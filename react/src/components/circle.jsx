import React, { useEffect, useState } from 'react'

export default function Circle({ setter }){
    const [radius, setRadius] = useState(1);

    useEffect(() => {
        setter(radius);
    }, [radius]);

    return (<div>
    <span>Circle</span>
    {/* <svg height="50" width="50">
        <circle cx="25" cy="25" r="20" style={{fill:'#55f',strokeWidth:'3',stroke:'#000'}} />
    </svg> */}
    Radius: <input value={radius} onChange={e => setRadius(e.target.value)} />
    </div>);
}