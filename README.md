# Ex05 Image Carousel
## Date:17.03.2026

## AIM
To create a Image Carousel using React 

## ALGORITHM
### STEP 1 Initial Setup:
Input: A list of images to display in the carousel.

Output: A component displaying the images with navigation controls (e.g., next/previous buttons).

### Step 2 State Management:
Use a state variable (currentIndex) to track the index of the current image displayed.

The carousel starts with the first image, so initialize currentIndex to 0.

### Step 3 Navigation Controls:
Next Image: When the "Next" button is clicked, increment currentIndex.

If currentIndex is at the end of the image list (last image), loop back to the first image using modulo:
currentIndex = (currentIndex + 1) % images.length;

Previous Image: When the "Previous" button is clicked, decrement currentIndex.

If currentIndex is at the beginning (first image), loop back to the last image:
currentIndex = (currentIndex - 1 + images.length) % images.length;

### Step 4 Displaying the Image:
The currentIndex determines which image is displayed.

Using the currentIndex, display the corresponding image from the images list.

### Step 5 Auto-Rotation:
Set an interval to automatically change the image after a set amount of time (e.g., 3 seconds).

Use setInterval to call the nextImage() function at regular intervals.

Clean up the interval when the component unmounts using clearInterval to prevent memory leaks.

## PROGRAM:
### Carousel.js:
```
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
```
### Carousel.css:
```
.carousel{
position:relative;
width:90%;
max-width:900px;
margin:50px auto;
overflow:hidden;
text-align:center;
}

.image-container{
width:100%;
}

.carousel img{
width:100%;
border-radius:10px;
transition:transform 0.5s ease;
}

.arrow{
position:absolute;
top:50%;
transform:translateY(-50%);
background:rgba(0,0,0,0.5);
color:white;
border:none;
font-size:30px;
padding:10px 15px;
cursor:pointer;
border-radius:5px;
}

.left{
left:10px;
}

.right{
right:10px;
}

.arrow:hover{
background:rgba(0,0,0,0.8);
}

.dots{
margin-top:15px;
}

.dot{
height:12px;
width:12px;
background:#bbb;
border-radius:50%;
display:inline-block;
margin:5px;
cursor:pointer;
}

.active{
background:#333;
}

@media (max-width:600px){

.carousel img{
height:auto;
}

.arrow{
font-size:22px;
}

}
```
### App.jss:
```
import React from "react";
import Carousel from "./Carousel";

function App() {
  return (
    <div>
      <h2 style={{textAlign:"center"}}>Advanced React Image Carousel</h2>
      <Carousel/>
    </div>
  );
}

export default App;
```


## OUTPUT
![WhatsApp Image 2026-03-17 at 4 01 36 PM](https://github.com/user-attachments/assets/8f8c7fca-a275-4b79-8431-08ad60ec96bc)
![WhatsApp Image 2026-03-17 at 4 02 02 PM](https://github.com/user-attachments/assets/5a44fbf2-5504-4c3d-b28d-6a3fd1d7ba96)
![WhatsApp Image 2026-03-17 at 4 03 35 PM](https://github.com/user-attachments/assets/46582c8b-324a-4417-8685-0dc47a902f08)
![WhatsApp Image 2026-03-17 at 4 03 54 PM](https://github.com/user-attachments/assets/551ad179-e9f2-46c4-87de-def8cfc6b836)
![WhatsApp Image 2026-03-17 at 4 04 13 PM](https://github.com/user-attachments/assets/b37ad3af-533e-4ecb-b4e9-b309126d1c9d)



## RESULT
The program for creating Image Carousel using React is executed successfully.
