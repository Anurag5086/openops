import {useState, useEffect} from 'react';
import './App.css';
import Box from './components/Box';
import './App.css'

//Interface of Box
interface BoxI {
  id: Number,
  boxComponent: JSX.Element
}

function App(){
  const [boxes, setBoxes] = useState<BoxI[]>([]);
  const noOfBoxes = Math.floor(window.screen.width/60);
  const noOfRows = Math.floor(window.screen.height/60);

  function random_bg_color(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
  }

  useEffect(() => {
    let subboxes = [];    //Temperory list for pushing all the box objects
    for(var i = 0 ; i < noOfBoxes*noOfRows ; i++){
      subboxes.push({id: i, boxComponent: <Box boxID={`${i}`} randomColor={random_bg_color}/>})
    }
    setBoxes(subboxes)
  }, [noOfBoxes, noOfRows])

  const boxClick = (boxID:Number) => {
    var num = +boxID;
    var c = random_bg_color();
    
    if(num % noOfBoxes === 0){
      document.getElementById(`${num+1}`)!.style.backgroundColor = c;
    }else{
      document.getElementById(`${num-1}`)!.style.backgroundColor = c;
    }
  }
 
  return (
    <div className = "app">
      {boxes?.map((box) => {
        return(
          <div onClick={() => {boxClick(box.id)}} className="boxContainer">
            {box.boxComponent}
          </div>
        )
      })}
    </div>
  )
}

export default App;
