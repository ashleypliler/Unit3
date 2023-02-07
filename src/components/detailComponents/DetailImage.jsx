import React from "react";


const DetailsImage = ({ image, title }) => {
    const backgroundString = `--background: url(${image})`
    return (
      <div
        className='detailsPic'
        style={{
          backgroundSize: "cover",
          background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image})`
        }}
      >
        <div className="deatilsHeader">
          <h1>{title}</h1>
        </div>
      </div>
    );
  };
  
  export default DetailsImage;
  