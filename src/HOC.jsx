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
