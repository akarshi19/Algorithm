import React, {Component} from 'react';
import SimpleSelect from "./simpleSelect";

class Menu extends Component {
    render() {
        return (
            <nav className="nav alert-dark" >
                <SimpleSelect
                    onAlgoChanged = {this.props.onAlgoChanged}
                    items={this.props.algorithms}
                />
                <SimpleSelect
                    onAlgoChanged={this.props.onMazeChanged}
                    items={this.props.mazes}
                />
                
                <button
                    onClick={this.props.onVisualize}
                    className="btn btn-warning btn-lg"
                >Visualize</button>
                
                <button
                    onClick={this.props.onClearBoard}
                    className='btn btn-danger btn-lg m-2'>Clear Board</button>
            </nav>
        );
    }
}

export default Menu;