import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

    const {user, setUser} = useContext(UserContext)

    const newUser = {
        id: user.id + 1,
        name: "Daniel"
    }

    return (
        <div>
            <h1>Login</h1>
            <div className="btn btn-primary"
                onClick={()=>setUser(newUser)}
            >
                Cambiar Usuario
            </div>
        </div>
    )
}
