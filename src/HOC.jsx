import React, { useState } from "react";

const Main = ()=>{
    const[loggedIn,setloggedIn]=useState(false)
    const CompoOne = () => {
        if (loggedIn) {
          return <CompoThree />;
        } else {
          return <CompoTwo />;
        }
        
      };
    return(
        <>
        <h4>
          Higher order components are the components which can be used globally or we can say using components as props. In the example below, I have created three functions. Second function returns "Please Login", Third component returns "Logged In" and in the First function I have declared a state which is false and created a toggle button with this whose value fluctuate on click. The Main function is returning component three if the value is true, and returns component two if the value is false.
        </h4>
         <CompoOne />
         <button onClick={()=>{setloggedIn(!loggedIn)}}>Change State</button>
        </>
    )
}

const CompoTwo = () => {
  return (
    <>
      <h2>Please Log In</h2>
    </>
  );
};

const CompoThree = () => {
  return (
    <>
      <h2>Logged In</h2>
    </>
  );
};

export default Main;
