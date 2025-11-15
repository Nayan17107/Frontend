/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react"
import CompB from "./CompB"

export const UserContest = createContext();
const CompA = () => {
    const [name, setName] = useState("john peter")
    return (
        <>
            <h2>compA rendaring...  {name}</h2>
            <UserContest.Provider value={name}>

                <CompB />
            </UserContest.Provider>
        </>
    )
}

export default CompA