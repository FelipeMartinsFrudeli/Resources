import React from "react";

type UserProviderProps = { children: React.ReactNode }

type User = {
    name: string,
    isLoggedIn: boolean
}

type UserContext = {
    user: User,
    loginUser: (name: string) => void,
    logoutUser: () => void
}

export const UserContext = React.createContext<UserContext | undefined>(undefined);

const initialUserState = { name: '', isLoggedIn: false }

export const UserProvider = ({ children }: UserProviderProps) => {
    
    const [user, setUser] = React.useState<User>(initialUserState)

    const loginUser = (name: string) => {
        setUser({ name, isLoggedIn: true })
    }

    const logoutUser = () => {
        setUser(initialUserState)
    }

    const memoizedContextValue = React.useMemo(
        () => ({ user, loginUser, logoutUser }),
        [{ user, loginUser, logoutUser }]
    )

    return (
        <UserContext.Provider value={memoizedContextValue}>
            { children }
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const userContext = React.useContext(UserContext)

    if (!userContext) throw new Error('Youu need to use this context inside a Provider');

    return userContext;
}