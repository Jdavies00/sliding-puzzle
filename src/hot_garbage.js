


// behold my pesudocde for the board of doom 






// import React, { Component } from 'react'

// export default class Board extends Component {
    //     constructor(props){
        //     super(props);
        //    
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












// tileData= {this.state.tileData}
//            tileData={this.state.tileData}
// this.state= {
//   titleData:[
//     //0 ide is blank
//     //id is the index 
//     //currrnt columx if +- 1 is valid move
//     //current columyif +- 1 is valid move
//     //value 
//     //isblank
//     //winposition =  index so io need for keeping winpositions as its own thing
//       //when w
//       //if blank is in botom right hand
//       //current value can be based 

//       {id:0, currentValue:0 ,currentRowX:0 ,currentCloumY:0, winPosition:0,0 },
//       {id:1, currentValue:1 ,currentRowX:1 ,currentCloumY:0, winPosition:1,0 }, 
//       {id:2, currentValue:2 ,currentRowX:2 ,currentCloumY:0, winPosition:2,0 },
//       {id:3, currentValue:3 ,currentRowX:3 ,currentCloumY:0, winPosition:3,0 }, 

//       {id:4, currentValue:4 ,currentRowX:4 ,currentCloumY:0, winPosition:4,0 }, 
//       {id:5, currentValue:  ,currentRowX:0 ,currentCloumY:1, winPosition: },
//       {id:6, currentValue:  ,currentRowX:1 ,currentCloumY:1, winPosition: },
//       {id:7, currentValue:  ,currentRowX:2 ,currentCloumY:1, winPosition: },

//       {id:8, currentValue:  ,currentRowX:3 ,currentCloumY:1, winPosition: },
//       {id:9 , currentValue: ,currentRowX:0 ,currentCloumY:2, winPosition: },
//       {id:10, currentValue: ,currentRowX:1 ,currentCloumY:2, winPosition: },
//       {id:11, currentValue: ,currentRowX:2 ,currentCloumY:2, winPosition: },   

//       {id:12, currentValue: ,currentRowX:3 ,currentCloumY:2, winPosition:  },
//       {id:13, currentValue: ,currentRowX:0 ,currentCloumY:3, winPosition:  },
//       {id:14, currentValue: ,currentRowX:1 ,currentCloumY:3, winPosition:  },
//       {id:15, currentValue: ,currentRowX:2 ,currentCloumY:3, winPosition:  }

//   ]

// }

//     
//     
//     this.clicked = 0;

//     this.state={thisclicked:0
//     }
// }
// clickHandler(e){
//   this.setState({clicked:this.state.clicked+1})
// }

//   render() {
//     return (
//       <div>
//         <Grid />
//         </div>
//     );
//     }
//   }
// }
//   }
//}





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







// for (let i = 0; i < clicked_on_tile.possibleMoves.length; i++) {
    //   if (Tiles[possibleMoves[i]].value === 0) {
    //     Tiles[id].value = Tiles[possibleMoves[i]].value
    //     Tiles[possibleMoves[i]].value = currentValue
    //   }
    // }