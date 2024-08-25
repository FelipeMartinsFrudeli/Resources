import React, { PropsWithChildren } from "react";

import './Container.css'

const Container: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
    return <main className="app-container">
        {children}
    </main>
}

export default Container