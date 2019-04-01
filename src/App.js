import React, {Component} from 'react';
import './App.css';
import './Grid';
import Grid from "./Grid";
import Obstacle from "./Obstacle";
import assets from './assets';

class App extends Component {

    constructor(props){
        super(props);

        this.state = {
            obstacles: this.getObstacles(),
            height: 5,
            width: 5,
            blockableSquares: (this.height - 2) * (this.width - 2)
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

        console.log(this.getObstaclesBySize());

        return (
            <div className="App">
                <Grid obstacles={obstacles}/>
            </div>
        );
    }
}

export default App;
