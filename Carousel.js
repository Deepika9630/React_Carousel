import React, { useState, useEffect } from "react";
import "./Carousel.css";

function Carousel() {

const images = [
"https://picsum.photos/id/1015/900/400",
"https://picsum.photos/id/1016/900/400",
"https://picsum.photos/id/1018/900/400",
"https://picsum.photos/id/1020/900/400",
"https://picsum.photos/id/1024/900/400"
];

const [currentIndex,setCurrentIndex] = useState(0);
const [pause,setPause] = useState(false);

const nextImage = () =>{
setCurrentIndex((prev)=>(prev+1)%images.length);
};

const prevImage = () =>{
setCurrentIndex((prev)=>(prev-1+images.length)%images.length);
};

useEffect(()=>{

if(pause) return;

const interval = setInterval(()=>{
nextImage();
},3000);

return ()=>clearInterval(interval);

},[pause,currentIndex]);

useEffect(()=>{

const handleKey = (e)=>{

if(e.key === "ArrowRight") nextImage();

if(e.key === "ArrowLeft") prevImage();

};

window.addEventListener("keydown",handleKey);

return ()=> window.removeEventListener("keydown",handleKey);

},[]);

return(

<div 
className="carousel"
onMouseEnter={()=>setPause(true)}
onMouseLeave={()=>setPause(false)}
>

<button className="arrow left" onClick={prevImage}>
❮
</button>

<div className="image-container">

<img src={images[currentIndex]} alt="carousel"/>

</div>

<button className="arrow right" onClick={nextImage}>
❯
</button>

<div className="dots">

{images.map((_,index)=>(
<span
key={index}
className={index===currentIndex?"dot active":"dot"}
onClick={()=>setCurrentIndex(index)}
></span>
))}

</div>

</div>

);

}

export default Carousel;