import React, { useState, useCallback } from "react";
import Buttons from "./Button";

function Usecallback() {
    const [count, setCount] = useState(0);

    const handleInc = useCallback(() => {
        setCount((prev) => prev + 1);
    }, []);

    const handleDec = useCallback(() => {
        setCount((prev) => prev - 1);
    }, []);

    return (
        <>
            <h1>UseCallback</h1>
            <h2>Count: {count}</h2>

            <Buttons name={"Incriment"} event={handleInc}/>
            <Buttons name={"Decriment"} event={handleDec}/>
        </>
    );
}

export default Usecallback;
