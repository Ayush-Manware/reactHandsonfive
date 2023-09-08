import React from "react"

const LoggedIn = true

const CompoOne = ()=>{
    
    if(LoggedIn){
        return <CompoThree />
    }else{
        return <CompoTwo />
    }
    
}
const CompoTwo = ()=>{
    return(
        <>
          <h2>Please Log In</h2>
        </>
    )
}

const CompoThree = ()=>{
    return(
        <>
          <h2>Logged In</h2>
        </>
    )
}

export default CompoOne