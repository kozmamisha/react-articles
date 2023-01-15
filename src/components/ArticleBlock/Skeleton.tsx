import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={530}
    viewBox="0 0 400 530"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="234" y="32" rx="0" ry="0" width="6" height="0" /> 
    <rect x="69" y="95" rx="0" ry="0" width="19" height="1" /> 
    <rect x="123" y="230" rx="0" ry="0" width="0" height="29" /> 
    <rect x="0" y="0" rx="10" ry="10" width="400" height="217" /> 
    <rect x="29" y="234" rx="3" ry="3" width="132" height="22" /> 
    <rect x="30" y="348" rx="3" ry="3" width="350" height="96" /> 
    <rect x="32" y="476" rx="10" ry="10" width="100" height="25" /> 
    <rect x="30" y="269" rx="0" ry="0" width="350" height="58" />
  </ContentLoader>
)

export default Skeleton;