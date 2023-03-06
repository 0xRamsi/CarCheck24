import React, { useEffect, useState } from 'react'

export default function Triangle({ setter }){
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    useEffect(() => {
        setter(a, b, c);
    }, [a, b, c]);

    return (<div>
        <span>Triangle</span>
        {/* <svg height="50" width="50">
            <polygon points="10,40 25,10 40,40" style={{fill:'#55f',strokeWidth:'3',stroke:'#000'}} />
        </svg> */}
        Side A: <input value={a} onChange={e => setA(e.target.value)} />
        Side B: <input value={b} onChange={e => setB(e.target.value)} />
        Side C: <input value={c} onChange={e => setC(e.target.value)} />
    </div>);
}