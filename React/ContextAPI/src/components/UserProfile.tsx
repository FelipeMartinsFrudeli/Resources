import React from "react"
import { useUserContext } from "../context/UserContext"

const UserProfile = () => {
    const userContext = useUserContext()

    return (
        <div>
            <p>Name: {userContext.user.name}</p>
            <button onClick={() => userContext.loginUser('hello')}>login</button>
        </div>
    )
}

export default React.memo(UserProfile);