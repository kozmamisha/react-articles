import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppDispatch } from './redux/store';
import { useSelector } from 'react-redux';

import Header from './components/Header';
import ItemBlock from './components/ArticleBlock';
import Skeleton from './components/ArticleBlock/Skeleton';
import FullArticle from './components/FullArticle';
import { fetchArticles } from './redux/article/asyncActions';
import { selectArticleData } from './redux/article/selectors';
import { selectSearch } from './redux/search/selectors';

const App: React.FC = () => {
  const isSearch = React.useRef(false);
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectArticleData);
  const { searchValue } = useSelector(selectSearch);

  const getArticles = async () => {
    const isSearched = searchValue ? `&search=${searchValue}` : '';

    dispatch(fetchArticles({ isSearched }));
  };

  React.useEffect(() => {
    if (!isSearch.current) {
      getArticles();
    }

    isSearch.current = false;
  }, [searchValue]);

  const articles = items.map((obj: any) => <ItemBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="wrapper">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <div className="content">
                <div className="container">
                  <b>Results: {items.length}</b>
                  {status === 'error' ? (
                    <div className="content__error">
                      <h2>Error!</h2>
                      <p>Failed to retrieve data.</p>
                    </div>
                  ) : (
                    <div className="content__items">
                      {status === 'loading' ? skeletons : articles}
                    </div>
                  )}
                </div>
              </div>
            </>
          }
        />
        <Route path="/page/:id" element={<FullArticle />} />
      </Routes>
    </div>
  );
};

export default App;
