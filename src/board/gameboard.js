import React, {Component} from 'react'

import Row from './row'

import '../gameboard.css'


export default class Gameboard extends Component {

    
    constructor(props){
        
        super(props);

        this.state = {

            //Create Gameboard Specifications
            default_size:8,
            input_size:0,
            size:8,
            row_height:50,
            row_width:600,
            game_board_height:600,
            game_board_width:600,

            //Initialize Player Colors/Shapes
            player1_color:"red",
            player2_color:"blue",
            shape:"circle",

            //Initialize Player Color/Shape Options
            shape_options:["circle", "triangle"],
            player1_colors:["red", "orange", "yellow"],
            player2_colors:["blue", "purple", "green"],

        }

    }
    createBoard(){
        let size = this.state.size;
        let square_dim = 600 / size;
        
        this.setState({
            row_height: square_dim,
            row_width: 600
        })

    }
    componentDidMount(){
        this.createBoard();
    }
    
    //Input handling for chanding Player 1 Color
    setPlayer1Color(changeEvent) {
        this.setState({
          player1_color: changeEvent.target.value
        });
    }
    //Input handling for chanding Player 2 Color
    setPlayer2Color(event){
        this.setState({
            player2_color: event.target.value
        })
    }

    //Input Handling for Player Shapes
    setPlayerShapes(event){
        this.setState({
            shape: event.target.value
        })
    }


    render() {
        //Gameboard Setup/Initialization
        let size = this.state.size;
        let row_height = this.state.row_height;
        let row_width = this.state.row_width;
        let player1_color = this.state.player1_color;
        let player2_color = this.state.player2_color;
        let player_shape = this.state.shape;
        // console.log(player_shape)

        //Create JSX for Row
        const rows = Array(size).fill().map((col, i) => {
            return <Row 
                    size={size} 
                    height={row_height} 
                    width={row_width} 
                    cur_row={i} 
                    key={i}
                    player1_color={player1_color}
                    player2_color={player2_color}
                    player_shape={player_shape}/>
            
        });

        //Game Options Initializtation
        let shape_options = this.state.shape_options;
        let player1_colors = this.state.player1_colors;
        let player2_colors = this.state.player2_colors;


        
        
        return(
            <div>
                <div className="checkerboard" style={{
                    width:600,
                    height:600,
                    border:"solid"
                    }} >
                    {rows}
                    
                </div>


                <div className="game-options"
                    style={{
                        width:600,
                        height:200,
                        fontColor:"red",
                        fontSize:"20px",
                        border:"solid"
                    }}>

                    <div className="color-change-player1"> 
                        <h4>Player 1 Color</h4>
                        <div onChange={event => this.setPlayer1Color(event)}>
                            <div><input type="radio" value={player1_colors[0]} defaultChecked name="color"/> {player1_colors[0]}</div>
                            <div><input type="radio" value={player1_colors[1]} name="color"/> {player1_colors[1]}</div>
                            <div><input type="radio" value={player1_colors[2]} name="color"/> {player1_colors[2]}</div>
                        </div>
                    </div>

                    <div className="color-change-player2">
                        <h4>Player 2 Color</h4>
                        <div onChange={event => this.setPlayer2Color(event)} >
                            <div><input type="radio" value={player2_colors[0]} defaultChecked name="color2"/> {player2_colors[0]}</div>
                            <div><input type="radio" value={player2_colors[1]} name="color2"/> {player2_colors[1]}</div>
                            <div><input type="radio" value={player2_colors[2]} name="color2"/> {player2_colors[2]}</div>
                        </div>
                    </div>
                    <div className="shape-change">
                    <h4>Player Shapes</h4>
                        <div onChange={event => this.setPlayerShapes(event)} >
                            <div><input type="radio" value={shape_options[0]} defaultChecked name="shape"/> {shape_options[0]}</div>
                            <div><input type="radio" value={shape_options[1]} name="shape"/> {shape_options[1]}</div>
                        </div>
                    </div>
                </div>

            </div>
                )
    }



}
