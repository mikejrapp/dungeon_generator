import React, {Component} from 'react';
import './Grid';
import Grid from "./Grid";
import Controls from "./Controls";
import assets from './assets';
import {getGrid, populateGrid} from './GridFunctions';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            grid: getGrid(),
        }
    }

    updateGrid = () => {
        const tableLarge = assets.obstacles.tables.tableLarge;
        const tableMedium = assets.obstacles.tables.tableMedium;
        const chestSmall = assets.obstacles.chests.chestLarge;

        this.clearGrid().then( () => {
            const updatedGrid = populateGrid(this.state.grid, [tableLarge, tableMedium, chestSmall]);
            this.setState({grid: updatedGrid});
        })
    };

    clearGrid = async () => {
        this.setState({grid: getGrid()});
    };

    render() {
        return (
            <div className="App">
                <div className={'controls-wrapper'}>
                    <Controls handleGenerate={this.updateGrid} handleClear={this.clearGrid}/>
                </div>
                <div className={'dungeon-grid-wrapper'}>
                    <Grid grid={this.state.grid} className={'dungeon-grid'}/>
                </div>
            </div>
        );
    }
}

export default App;
