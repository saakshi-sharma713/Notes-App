import React from "react";

const Loader = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      fontSize: "20px",
      fontWeight: "bold",
      borderTop:"10px",
      borderRadius:"50%",
      borderColor:"blue",
    }} className="load">
    
    </div>
  );
};

export default Loader;