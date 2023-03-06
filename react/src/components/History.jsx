import React from 'react'

export default function History({ history }) {
    return (<>
        <ul>
            {history.map(entry => <li>{entry.shape} {entry.parameters} = {entry.circumference}</li>)}
        </ul>
        <hr />
        {<div>{history.length} entrys</div>}
    </>);
}