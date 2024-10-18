import React from 'react'

function ErrorBoundary() {
  return (
    <div>
        <Card1/>
        <Card1/>
        
    </div>
  )
}

function Card1(){
    return(
        <div style={{background:"red", borderRadius:10,margin:10, padding:20}}>hey there</div>
    )
}
function Card2(){
    return(
        <div style={{background:"red", borderRadius:10,margin:10, padding:20}}>hello world</div>
    )
}

export default ErrorBoundary