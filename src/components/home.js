import { useState } from "react";
import  './home.css'
const urls=[{
  "image": "http://dummyimage.com/130x100.png/cc0000/ffffff",
  "titel": "Fat Kid Rules the World"
}, {
  "image": "http://dummyimage.com/190x100.png/5fa2dd/ffffff",
  "titel": "Morons From Outer Space"
}, {
  "image": "http://dummyimage.com/244x100.png/dddddd/000000",
  "titel": "Return to Snowy River (a.k.a. The Man From Snowy River II)"
}, {
  "image": "http://dummyimage.com/133x100.png/ff4444/ffffff",
  "titel": "The Old Gun"
}, {
  "image": "http://dummyimage.com/203x100.png/cc0000/ffffff",
  "titel": "Critters 3"
}, {
  "image": "http://dummyimage.com/202x100.png/cc0000/ffffff",
  "titel": "Münchhausen"
}, {
  "image": "http://dummyimage.com/229x100.png/dddddd/000000",
  "titel": "Show Me"
}, {
  "image": "http://dummyimage.com/112x100.png/5fa2dd/ffffff",
  "titel": "Rudolph, the Red-Nosed Reindeer"
}, {
  "image": "http://dummyimage.com/167x100.png/cc0000/ffffff",
  "titel": "Snowball Effect: The Story of 'Clerks'"
}, {
  "image": "http://dummyimage.com/127x100.png/5fa2dd/ffffff",
  "titel": "Hundred-Foot Journey, The"
}, {
  "image": "http://dummyimage.com/242x100.png/cc0000/ffffff",
  "titel": "Hang 'Em High"
}, {
  "image": "http://dummyimage.com/119x100.png/ff4444/ffffff",
  "titel": "Ulee's Gold"
}, {
  "image": "http://dummyimage.com/200x100.png/dddddd/000000",
  "titel": "House of Angels (Änglagård)"
}, {
  "image": "http://dummyimage.com/122x100.png/cc0000/ffffff",
  "titel": "Frozen Planet"
}, {
  "image": "http://dummyimage.com/128x100.png/dddddd/000000",
  "titel": "Anna Nicole (Anna Nicole Smith Story, The)"
}, {
  "image": "http://dummyimage.com/126x100.png/5fa2dd/ffffff",
  "titel": "Old Man Drinking a Glass of Beer"
}, {
  "image": "http://dummyimage.com/222x100.png/dddddd/000000",
  "titel": "'71"
}, {
  "image": "http://dummyimage.com/245x100.png/dddddd/000000",
  "titel": "Drones"
}, {
  "image": "http://dummyimage.com/204x100.png/ff4444/ffffff",
  "titel": "Squall, The"
}, {
  "image": "http://dummyimage.com/156x100.png/5fa2dd/ffffff",
  "titel": "Divergent"
}]
const Home =()=>{
  return <div className="grid-container">
{
  urls.map((e,index)=><div key={e.image+index}><img  src={`${e.image}`} />
  <p>{e.titel}</p>
  
  
  </div>)
}
  </div>
}


export default Home