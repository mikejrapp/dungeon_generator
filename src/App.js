import React, {Component} from 'react';
import './Grid';
import Grid from "./Grid";
import Obstacle from "./Obstacle";
import Controls from "./Controls";
import Tile from "./Tile";
import assets from './assets';
import {getObstacleStyle, getGridColumnNumber, getGridRowNumber, getTileTotal, getTileStyle} from './functions';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            obstacles: this.getObstacles(),
            tiles: this.getTiles('stone'),
            height: getGridRowNumber(),
            width: getGridColumnNumber(),
            blockableSquares: (this.height - 2) * (this.width - 2),
            grid: []
        }
    }

    getObstacles() {
        return assets.obstacles.map( (object, i) => {
            return <Obstacle obstacle={object} style={getObstacleStyle(object)} key={i}/>;
        });
    }

    getTiles(tileType) {
        let tiles = [];
        const style = getTileStyle(tileType);

        for(let i = 0; i < getTileTotal(); i++){
            tiles.push(<Tile className={tileType} style={style} key={i}/>)
        }

        return tiles;
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
