import React, {Component} from 'react'
import Column from './column'
export default class Row extends Component {

    constructor(props){
        super(props);

        //Initialize Row Dimensions and Player Options
        this.state = {
            num_row:0,
            row_height:0,
            row_width:0,
            cur_row:0,
            player1_color:"red",
            player2_color:"blue",
            player_shape:"circle"
        }
    }

    //Set current dimensions and player options
    componentDidMount() {
        this.setState({
            num_row: this.props.size,
            row_height:this.props.height,
            row_width:this.props.width,
            cur_row:this.props.cur_row,
            player1_color:this.props.player1_color,
            player2_color:this.props.player2_color,
            player_shape:this.props.player_shape
        })
    }

    //Upon change from parent component, reupdate player options and row dimensions
    componentDidUpdate(prevProps, prevState, snapshot){
        if(prevProps.height !== this.props.height || prevProps.width !== this.props.width ||
            prevProps.player1_color !== this.props.player1_color ||
            prevProps.player2_color !== this.props.player2_color || 
            prevProps.player_shape !== this.props.player_shape){
            this.setState({
                num_row: this.props.size,
                row_height:this.props.height,
                row_width:this.props.width,
                cur_row:this.props.cur_row,
                player1_color:this.props.player1_color,
                player2_color:this.props.player2_color,
                player_shape:this.props.player_shape
            })
        }
    }

    render(){
        //Call Column for each num_row
        
        let row_height = this.state.row_height;
        let row_width = this.state.row_width;
        let num_col = this.state.num_row;
        let cur_row = this.state.cur_row;

        let col_height = row_height;
        let col_width = row_width / num_col;
        let player1_color = this.state.player1_color;
        let player2_color = this.state.player2_color;
        let player_shape = this.state.player_shape;

        //Initialize the amount of columns equal to the amount of rows, 
        //and produce the columns to fill each row
        const data = Array(num_col).fill().map((v, i) => ({i}))
        const columns = data.map((i,idx) => {
            
            return <Column 
                        row={cur_row} 
                        col={idx} 
                        height={col_height} 
                        width={col_width} 
                        key={idx}
                        player1_color={player1_color}
                        player2_color={player2_color}
                        player_shape={player_shape}/>
        });
        return(
            <div 
            className="row"
            style={{
                width: row_width,
                height:row_height
                }} 
            >
                {columns}
            </div>
        )
    }

}