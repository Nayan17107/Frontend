import { memo } from "react";

const Buttons = memo(({event, name}) => {
    console.log("Rendering...")
    return(
        <>
            <button onClick={event}>{name}</button>
        </>
    )
});

export default Buttons;