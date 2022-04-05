import * as React from 'react';
import {useState} from 'react';
import type {FC} from 'react';


export const Counter: FC = () => {
    const [count, setCount] = useState(0);

    return (
        <p>
            <span style={{marginRight: 5}}>Counter: {count}</span>
            <button onClick={() => setCount(count + 1)}>+ 1</button>
        </p>
    );
};
