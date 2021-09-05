import React, {useState, useEffect} from 'react'
import './Box.css'

interface BoxColor{
    color: String
}

interface BoxProps{
    boxID: string,
    randomColor: Function
}
function Box({boxID, randomColor}:BoxProps) {
    const [boxColor, setBoxColor] = useState<BoxColor>();

    useEffect(() => {
        var c = randomColor();
        setBoxColor({color: c})
    }, [randomColor])

    function boxClicked(){
        var c = randomColor();
        setBoxColor({color: c});
    }

    return (
        <div id={boxID} onClick={() => {boxClicked()}} className="mainBox" style={{backgroundColor: `${boxColor?.color}` , height: '60px', width: '60px'}}></div>
    )
}

export default Box
