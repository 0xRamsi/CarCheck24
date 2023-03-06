import React, { useEffect, useState } from 'react'
import Circle from './components/circle.jsx';
import History from './components/History.jsx';
import Rectangle from './components/Rectangle.jsx';
import Triangle from './components/triangle.jsx';

export default function App(){
    const [history, setHistory] = useState([]);
    const [shape, setShape] = useState('rectangle');
    const [parameters, setParameters] = useState('{a:1, b:2}');
    const [selectedShape, setSelectedShape] = useState(1);

    const parseItems = (list) => {
        return list.map(item => JSON.parse(item));
    }

    useEffect(() => {
        fetch('/Shapes/GetHistory/')
            .then(r => r.json())
            .then(parseItems)
            .then(setHistory);
    }, [])

    useEffect(() => {
        console.log(selectedShape)
    }, [selectedShape])


    const getResultFromServer = () => {
        fetch(`/Shapes/Calculate/${shape}/${parameters}`)
            .then(res => res.json())
            .then(data => setHistory([...history, data]));
    }

    const circleSetter = (radius) => {
        if(selectedShape == 'circle'){
            setParameters(radius);
        }
    }
    const triangleSetter = (a, b, c) => {
        if(selectedShape == 'triangle') {
            setParameters(JSON.stringify({a, b, c}));
        }
    }
    const rectangleSetter = (a, b) => {
        if(selectedShape == 'rectangle'){
            setParameters(JSON.stringify({a, b}));
        }
    }

    return (<>
        <h3>Carcheck24, Bewerbungsarbeit von Ramzi</h3>
        <div style={{display: 'flex', gap: '5px'}}>
            Shape <input type="text" onChange={e => setShape(e.target.value)} value={shape} />
            Parameters <input type="text" onChange={e => setParameters(e.target.value)} value={parameters} />
            <button type='button' onClick={getResultFromServer}>Calculate</button>
        </div>
        <hr />
        <div style={{display: 'grid', gap: '5px', gridTemplateColumns: 'auto 1fr'}}>
            <input type='radio' name='shapeSelector' onChange={e => setSelectedShape(e.target.value)} id='circleRadio' value='circle'></input>
            <Circle setter={circleSetter} for='circleRadio' />
            <input type='radio' name='shapeSelector' onChange={e => setSelectedShape(e.target.value)} id='triangleRadio' value='triangle'></input>
            <Triangle setter={triangleSetter} />
            <input type='radio' name='shapeSelector' onChange={e => setSelectedShape(e.target.value)} id='rectangleRadio' value='rectangle'></input>
            <Rectangle setter={rectangleSetter} />
        </div>
        <hr />
        <History history={history} />
    </>);
}