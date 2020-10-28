 *Board*
class Board extends Component{
    constructor(){
    super()
    board is an aray that holds the tiles 
    each tiles is its own object
        each tile object has the folloing properties
            this.tile
            currentX
            currentY
            make an id whichis the index of each object in the array

            this.tile.name
            this.tile.currentPosition
            this.tile.canMove = defautl false 
                if isBlank = true will canMove= true
            this.tile.winPosition = 
            this.tile.isBlank    *isBlank* 
                    if (true){
                        - stop rendering image
                        -canMove = true
                        -Can move to the folowwing positions on the board
                            - rememebr to not let blank jump the board
                        - onlick move to where clicked 
                        -after onClick stop being blank= fale
                    }else{
                        rendure image as normal
                    }

            this.setState= {
                clicked:0
                if onClick = true then 
                ***should state only be if blank or not?***
                this.tile.isblank=true
            }
            this.state= {
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
this.clickHandler= this.clickahndler.bind(this) *to bring state back up from tile to parent*


clickHandler(e){
    this.setState({clicked: this.state.blank=true
    })

    <!--this.setState({clicked: this.state.clicked ??=ture or +1})
    +1 wil not work unless is cleared post blank state
}-->
 validate
            render(){
                return()*
                <>
s//some <div> to control how to setup grid
//fill with tiles

                    <Title

                        this.tile
                        name= {this.tile.name}
                        currentPosition={this.tile.currentPosition}
                        ableToMove ={this.tile.canMove}
                     />

                </>

*Tile*
class Tile extends Component 
function Title 

