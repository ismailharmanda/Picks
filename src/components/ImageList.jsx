import React from "react";

const ImageList = (props) => {
  const images = props.images.map((img) => {
    return (
      <img alt={img.description} key={img.id} src={img.urls.regular}></img>
    );
  });
  return <div>{images}</div>;
};

export default ImageList;
