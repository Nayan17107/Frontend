import { useContext } from "react"
import { UserContest } from "./CompA"

const CompD = () => {
    const name = useContext(UserContest)
    return (
        <>
            <h2>compD rendaring...{name}</h2>
        </>
    )
}

export default CompD