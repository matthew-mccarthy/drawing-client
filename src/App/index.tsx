import React from 'react';
import axios from 'axios';
import CanvasDraw from "react-canvas-draw";
import Button from '@material-ui/core/Button';

import './App.css';
import withAutoResize from '../WithAutoResize';
import { RouteComponentProps } from 'react-router';

const Canvas = withAutoResize(
    CanvasDraw,
    (height, width) => ({
        canvasHeight: height - 100,
        canvasWidth: width
    })
);

const App: React.FC<RouteComponentProps> = (props) => {
    axios.get('/api/join').then((response) => {
        console.log(response.status);
    }).catch(() => props.history.push('/login'));

    let canvas: any;

    return (
        <div className='App'>
            <Canvas
                ref={(self: any) => (canvas = self)}
                className='Canvas'
                lazyRadius={0} />
            <Button variant="contained" color="primary" onClick={() => canvas.undo()}>
                Undo
            </Button>
        </div>
    );
}

export default App;
