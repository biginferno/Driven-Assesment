import React, {Component} from 'react'

import TilePiece from './tile-piece';



export default class Column extends Component {

    constructor(props){
        super(props);

        //Initialize Column dimensions and player options
        this.state = {
            cur_col:0,
            cur_row:0,
            col_height:0,
            col_width:0,
            tile_piece:null,
            player1_color:"red",
            player2_color:"blue",
            player_shape:"circle"
        }
    }

    //Upon parent rendering, create each column specifics and attach a tile_piece to the selected column
    componentDidMount() {
        
        this.setState({
            cur_col: this.props.col,
            cur_row: this.props.row,
            col_height: this.props.height,
            col_width: this.props.width,
            player1_color:this.props.player1_color,
            player2_color:this.props.player2_color,
            player_shape:this.props.player_shape,
            tile_piece: <TilePiece 
                            row={this.props.row} 
                            column={this.props.col}
                            width={25}
                            height={25}
                            player1_color={this.props.player1_color}
                            player2_color={this.props.player2_color}
                            player_shape={this.props.player_shape}
                        />
        })

    }

    //Update the tile_piece with new player options
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.height !== this.props.height || prevProps.width !== this.props.width ||
            prevProps.player1_color !== this.props.player1_color ||
            prevProps.player2_color !== this.props.player2_color || 
            prevProps.player_shape !== this.props.player_shape) {
                this.setState({
                    cur_col: this.props.col,
                    cur_row: this.props.row,
                    col_height: this.props.height,
                    col_width: this.props.width,
                    player1_color:this.props.player1_color,
                    player2_color:this.props.player2_color,
                    player_shape:this.props.player_shape,
                    tile_piece: <TilePiece 
                                    row={this.props.row} 
                                    column={this.props.col}
                                    width={25}
                                    height={25}
                                    player1_color={this.props.player1_color}
                                    player2_color={this.props.player2_color}
                                    player_shape={this.props.player_shape}
                                />
                })
        }
    }

    //Create the checkerboard color scheme, alternating black-white depending on position of each column in each row
    createBoardColors(row, cur_col){
        let color = "white";
        if((row%2) === 0){
            //Even Rows
            if((cur_col%2) === 0){
                //Even Column
                color = "black";
            }

        }
        else {
            //Odd Rows
            if((cur_col%2) !== 0){
                //Odd Columns i.e (1,1), (2,3)
                color = "black";
            }
        }
        return color;
    }
    render(){
        
        let cur_col = this.state.cur_col;
        let row = this.state.cur_row;
        let col_width = this.state.col_width;
        let col_height = this.state.col_height;
        let color = this.createBoardColors(row,cur_col);
        let tile_Piece = this.state.tile_piece;
        return(
        <div className="column"  
            style={{
                float:"left",
                width:col_width,
                height:col_height,
                background:color,
                textAlign:"center"
            }}>
                {tile_Piece}
        </div>
        )
    }
    

}