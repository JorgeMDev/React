import React, {useState} from 'react';
import './App.css';
import Display2 from './components/Display2';
import Form2 from './components/Form2';


function App() {
  const [currentColor, setCurrentcolor] = useState('')
  const [colorList, setColorList] = useState([])
  const [currentSize, setCurrentsize] = useState('')
  const [sizeList, setSizeList] = useState([])
  const youveGotColor = ( newColor, newSize) => {
    setCurrentcolor(newColor)
    setCurrentsize(newSize)
    setColorList([...colorList,newColor])
    setSizeList([...sizeList,newSize])
  }
  return (
    <div className="App">
      <Form2 onNewColor={youveGotColor}></Form2>
      <Display2 color= {currentColor} colorList = {colorList} size ={currentSize} sizeList = {sizeList}></Display2>

    </div>
  );
}

export default App;
