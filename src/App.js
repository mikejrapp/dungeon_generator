import React, {Component} from 'react';
import './Grid';
import Grid from "./Grid";
import Obstacle from "./Obstacle";
import Controls from "./Controls";
import TileRow from "./TileRow";
import assets from './assets';
import * as functions from './functions';
//import * as grid from './GridFunctions';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            obstacles: this.getObstacles(),
            tiles: this.getTiles('stone'),
            height: functions.getGridRowNumber(),
            width: functions.getGridColumnNumber(),
            blockableSquares: (this.height - 2) * (this.width - 2),
            grid: []
        }
    }

    getObstacles() {
        return assets.obstacles.map( (object, i) => {
            return <Obstacle obstacle={object} style={functions.getObstacleStyle(object)} key={i}/>;
        });
    }

    getTiles(tileType) {
        let tileRows = [];
        let tiles = [];
        const style = functions.getTileStyle(tileType);

        for(let i = 0; i < functions.getGridRowNumber(); i++){
            for(let j = 0; j < functions.getGridColumnNumber(); j++){
                tiles.push("");
            }
            tileRows.push(<TileRow tiles={tiles} className={tileType} style={style} key={i}/>);
            tiles = [];
        }

        return tileRows;
    }

    getObstaclesBySize() {
        return assets.obstacles.filter( ({spacesBlocked}) => spacesBlocked <= 6);
    }

    render() {
        return (
            <div className="App">
                <div className={'controls-wrapper'}>
                    <Controls/>
                </div>
                <div className={'dungeon-grid-wrapper'}>
                    <Grid obstacles={this.getObstacles()} tiles={this.getTiles('stone')} className={'dungeon-grid'}/>
                </div>
            </div>
        );
    }
}

export default App;
