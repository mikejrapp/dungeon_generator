import React, {Component} from 'react';
import './Grid';
import Grid from "./Grid";
import Obstacle from "./Obstacle";
import Controls from "./Controls";
import assets from './assets';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            obstacles: this.getObstacles(),
            height: 5,
            width: 5,
            blockableSquares: (this.height - 2) * (this.width - 2),
            grid: []
        }
    }

    getObstacles() {
        return assets.obstacles.map( (object, i) => {
            return <Obstacle obstacle={object} key={i}/>;
        });
    }

    getObstaclesBySize() {
        return assets.obstacles.filter( ({spacesBlocked}) => spacesBlocked <= 6);
    }

    render() {
        const {obstacles} = this.state;

        return (
            <div className="App">
                <div className={'controls-wrapper'}>
                    <Controls/>
                </div>
                <div className={'dungeon-grid-wrapper'}>
                    <Grid obstacles={obstacles} className={'dungeon-grid'}/>
                </div>
            </div>
        );
    }
}

export default App;
