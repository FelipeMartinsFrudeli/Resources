import React from "react";

type AwesomeContextType = {
    awesomeState: number;
    setAwesomeState: React.Dispatch<React.SetStateAction<number>>;
}

export const AwesomeContext = React.createContext<AwesomeContextType | null>(null);

type Props = {
    children: React.ReactNode
}

export const AwesomeContextProvider = ({ children }: Props) => {
    const [awesomeState, setAwesomeState] = React.useState(0);

    const memoizedContextValue = React.useMemo(
        () => ({ awesomeState, setAwesomeState }),
        [awesomeState, setAwesomeState]
    )

    return <AwesomeContext.Provider value={memoizedContextValue}>
        { children }
    </AwesomeContext.Provider>
}

export const useAwesomeContext = () => {
    const awesomeContext = React.useContext(AwesomeContext);

    if (!awesomeContext) throw new Error('Youu need to use this context inside a Provider');

    return awesomeContext;
}