'use client'
import React, { useState } from "react";
import ReactCompareImage from "react-compare-image";
import "./style.css";



const SliderCard = () => {
  const [hasError, setHasError] = useState(false);

  const handleOnError = (error: any, errorInfo: any) => {
    // You can handle errors here
    console.log("Error occurred:", error);
    setHasError(true);
    // You may also want to log errorInfo for more details about the error
    console.log("Error Info:", errorInfo);
  };

  return (
    <div className="contentWrapper max-h-[40px] w-full">
      {hasError ? (
        <div>Oops! Something went wrong.</div>
      ) : (
        <div className="  bg-contain rounded-lg  m-auto" style={{
            // height: "400px",
        }}><ReactCompareImage
        handleSize={20}
        leftImageCss={{
            'background': "center",
        }}
          leftImage={'https://res.cloudinary.com/dbhxrqn7l/image/upload/v1714983970/before_aa3j1l.png'}
          rightImage={'https://res.cloudinary.com/dbhxrqn7l/image/upload/v1714983970/after_itwigk.png'}
        /></div>
      )}
    </div>
  );
};

export default SliderCard;
