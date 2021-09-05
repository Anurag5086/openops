import React, {useState, useEffect} from 'react'

interface BoxColor{
    color: String
}

interface BoxProps{
    boxID: string,
    randomColor: Function
}
function Box({boxID, randomColor}:BoxProps) {
    const [boxColor, setBoxColor] = useState<BoxColor>();
    const widthOfBox = Math.floor(window.screen.width/26);     //Each row will have 25 Blocks
    const heightOfBox = Math.floor(window.screen.height/15);

    useEffect(() => {
        var c = randomColor();
        setBoxColor({color: c})
    }, [randomColor])

    function boxClicked(){
        var c = randomColor();
        setBoxColor({color: c});
    }

    return (
        <div id={boxID} onClick={() => {boxClicked()}} className="mainBox" style={{backgroundColor: `${boxColor?.color}` , height: heightOfBox, width: widthOfBox}}></div>
    )
}

export default Box
