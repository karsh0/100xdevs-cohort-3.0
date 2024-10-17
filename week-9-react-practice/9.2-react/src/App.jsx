import { useEffect, useState } from 'react'
import './App.css'

function App() {
  return(
<div style={{backgroundColor:"#dfe6e9", height:"100vh"}}>
<PostComponent></PostComponent>
</div>
)
}
function PostComponent(){
  return <div style={{alignItems:'center', gap:10, width:400, backgroundColor:"white", borderRadius:10, borderColor:"gray", borderWidth:1, padding:"20px"}}><div style={{display:"flex", gap:10}}>
    <img src="https://storage.googleapis.com/fc-freepik-pro-rev1-eu-static/ai-styles-landings/anime/characters-and-scenes.jpg?h=1280" alt="" style={{width:40, height:40, borderRadius:20}}/>
  <div>
    <b>100xdevs</b>
    <div>23,800 followers</div>
    <div>12m</div>
  </div>
 
  </div>
   <div style={{padding:"10px"}}>Explore Sarcaeus's board "Anime Profile Pictures", followed by 499 people on Pinterest.</div></div>
}
export default App
