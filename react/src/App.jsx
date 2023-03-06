import React, { useEffect, useState } from 'react'
import History from './components/History.jsx';

export default function App(){
    const [history, setHistory] = useState([]);
    const [shape, setShape] = useState('rectangle');
    const [parameters, setParameters] = useState('{a:1, b:2}');

    const parseItems = (list) => {
        return list.map(item => JSON.parse(item));
    }

    useEffect(() => {
        fetch('/Shapes/GetHistory/')
            .then(r => r.json())
            .then(parseItems)
            .then(setHistory);
    }, [])

    const getResultFromServer = () => {
        fetch(`/Shapes/Calculate/${shape}/${parameters}`)
            .then(res => res.json())
            .then(data => setHistory([...history, data]));
    }

    return (<>
        <h3>Carcheck24, Bewerbungsarbeit von Ramzi</h3>
        <div style={{display: 'flex', gap: '5px'}}>
            Shape <input type="text" onChange={e => setShape(e.target.value)} value={shape} />
            Parameters <input type="text" onChange={e => setParameters(e.target.value)} value={parameters} />
            <button type='button' onClick={getResultFromServer}>Calculate</button>
        </div>
        <History history={history} />
    </>);
}