// import React, { Component } from 'react'
// import React from 'react';
import 'bootstrap';

import React from 'react'

function Board(props) {
// const idForKey= props.index;
      console.log(props)
  let arr = Array(16).fill().map((x, i) => i)
  console.log(arr)
  
  let grid = []
  let subArr = []
  for (let j = 0; j < arr.length; j++) {
    
        let col = <button  onClick = {() => console.log('fuck')} key = {arr[j]}  className='col btn-primary' style={{ width: 150 }} >{j}</button>
        //fuck your keys
        subArr.push(col)
        if ((j + 1) % 4 === 0) {
            // console.log("in if")

            let row = <div className='row' style={{ height: 150 }}>{subArr}</div>
            grid.push(row)
            subArr = []
        }
    }
    console.log(grid, subArr)
    return (
        <div className='container'>
            {grid}
        </div>
    )
}
export default Board;








// import React, { Component } from 'react'

// export default class Board extends Component {
//     constructor(props){
//     super(props);
//     }

//     render() {
//         let arr = Array(16).fill().map((x, i) => i)
//   let grid = []
//   let subArr = []
//   for (let j = 0; j < arr.length; j++) {
//         let col = <div  className='col btn-primary' style={{ width: 150 }} >{j}</div>
//         subArr.push(col)
//         if ((j + 1) % 4 === 0) {
//             console.log("in if")
//             let row = <div className='row' style={{ height: 150 }}>{subArr}</div>
//             grid.push(row)
//             subArr = []
//         }
//     }
//     console.log(grid, subArr)
//     return (
//         <div className='container'>
//             {grid}
//         </div>
//     )
        
//     }
// }










// onClick={()=>this.handleClick(id)}


// export default class Board extends Component {
//     constructor(props) {
//         super(props);


//             let arr = Array(16).fill().map((x, i) => i)
//             let board = []
//             let subArr = []
//             for (let j = 0; j < arr.length; j++) {
//                 let col = <div className='col'>{j}</div>
//                 subArr.push(col)
//                 if ((j + 1) % 4 === 0) {
//                     console.log("in if")
//                     let row = <div className='row'>{subArr}</div>
//                     board.push(row)
//                     subArr = []
//                 }
//             }
//             console.log(board, subArr)
//         }


//     render(){
//     return(
//       <div className = 'container' >
//             { Board }
//       </div>
//     )
//  }
// }


