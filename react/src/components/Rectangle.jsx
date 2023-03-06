import React, { useEffect, useState } from 'react'

export default function Rectangle({ setter }){
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    useEffect(() => {
        setter(a, b);
    }, [a, b]);

    return (
    <div>
        <span>Rectangle</span>
        {/* <svg width="50" height="50">
            <rect width="40" height="40" style={{fill:'#55f',strokeWidth:'3',stroke:'#000'}} />
        </svg> */}
        Side A: <input value={a} onChange={e => setA(e.target.value)} />
        Side B: <input value={b} onChange={e => setB(e.target.value)} />
    </div>);
}