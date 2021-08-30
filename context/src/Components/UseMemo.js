import React, { useState, useMemo } from 'react';

const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [item, setItems] = useState(10);

    const multiCountMemo = useMemo(function multicount() {
        console.log("Multi-fuction")
        return count + 5;
    }, [count])


    return (
        <>
            <h2>{count}</h2>
            <h2>{item}</h2>
            <h1>Multicount : {multiCountMemo}</h1>
            <button onClick={() => setCount(count + 1)}>Count</button>
            <button onClick={() => setItems(item * 5)}>Items</button>
        </>
    )
}

export default UseMemo;