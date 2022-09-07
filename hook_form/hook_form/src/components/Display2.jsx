import React, { useState } from 'react';


const Display2 = (props) => {
   

    return (
       <div className='container'>

            {props.colorList.map((item,i) => <div key={i} style={{backgroundColor: item, height: 200, width:200}}></div>)}
            </div>
    );
};
    
export default Display2;