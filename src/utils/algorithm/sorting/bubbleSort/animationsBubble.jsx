export default function animationBubble(animations, speed){
    // doing one foor loop on the animation array (coming from ArraySort)
    for(let i = 0; i < animations.length; i++){
        const arrayBars = document.getElementsByClassName('array_bar');
        const isColorChange = animations[i][2];
    
        if(isColorChange){
          // Getting the barOne position and barTwo position from one specific animation (i)
             const[barOneIdx , barTwoIdx] = animations[i];
    
          // If the Remainder of the position that I am is equal to 0, them turn to one color, else: change to another color
             const color = i % 2 === 0 ? "#0ff" : "rgb(168, 58, 135)";
          //  Changing the positions of the bars
             setTimeout(()=>{
              arrayBars[barOneIdx].style.backgroundColor=color;
              arrayBars[barTwoIdx].style.backgroundColor=color;
             }, i * speed);
         }else{
           setTimeout(()=>{
            //  Changing the positions of the bars
             const [barOneIdx , newHeight] = animations[i];
             const barOneStyle = arrayBars[barOneIdx].style;
             barOneStyle.height = `${newHeight}px`;
           }, i * speed);
         }
    }
}