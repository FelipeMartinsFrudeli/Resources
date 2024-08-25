import React, { PropsWithChildren } from "react";

import Container from "@/components/Container";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const App: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
    return <>
        <Header />
        <Container>
            { children }
        </Container>
        <Footer />
    </>
}

export default App