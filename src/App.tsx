import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import ItemBlock from './components/ItemBlock';
import Skeleton from './components/ItemBlock/Skeleton';
import FullArticle from './components/FullArticle';

function App() {
  const [items, setItems] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    try {
      axios
        .get('https://63c062c2e262345656fe028b.mockapi.io/items')
        .then(({ data }) => {
          setItems(data);
        })
        .then(() => setIsLoading(false));
    } catch (error) {
      alert('Error getting items');
      console.log(error);
    }
  }, []);

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
                  <div className="content__items">{isLoading ? skeletons : articles}</div>
                </div>
              </div>
            </>
          }></Route>
        <Route
          path="/page/:id"
          element={
            items.map((obj: any) => obj.id && <FullArticle key={obj.id} {...obj} />)
          }></Route>
      </Routes>
    </div>
  );
}

export default App;
