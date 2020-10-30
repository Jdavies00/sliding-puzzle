import React from 'react';
import 'bootstrap';


// rawData= props.tile_Data_Raw;
// console.log(props.tile_Data_Raw)
//mapp on an index idex id to thses sons of britches
// let tile_Data_Mapped = props.tile_Data_Raw.map((index) => 
// ) 
// let mapped= props.tile_Data_Raw.map(())



function Board(props) {
    //unprocessed data to be mangled
    // console.log(props.tile_Data_Raw)
    //for some reason id wil not pass i cant get in the array 
    // console.log(num)
    //holds all these buttons
    let bunchoButonsArray = []
    //lop through raw data 
    for (let i = 0; i < props.tile_Data_Raw.length; i++) {
        let num =  props.tile_Data_Raw[i]
        // console.log(num)
        //every loop creates one button per loop
        //the og button is the blue print
        let ogButton = <button
            //col of buttons with an on clic
                //it sould know when what and wher is being clicked
                //what button 
                    //button defined by the properties 
                //where button 
                     //button defined by the properties 
                //when is was clicked?
                //onclcick = the property tile_click passed to us from props
                    //tile_click is = to the click function on  the app.js

            className=" col-3 btn-primary" onClick = {()=> props.tile_click(i)}
            style={{ height: 150 }} key={i} // keys aer the var i as we copunt through 
            //KEYS NEED TO BE ID
        >{num.currentValue}</button>
        //push the og button in to the buncho of buttupn
        bunchoButonsArray.push(ogButton)
        // console.log(ogButton)
    }
    return (
        //bring it back now yall
        <div className='container'>
            <div className='row'>
                {bunchoButonsArray}
            </div>
        </div>
    )
}

export default Board;



















