import type React from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import { Main } from "../../components/Main";


type MainTamplatesProps = {
    children: React.ReactNode
}

export function MainTamplates({children}: MainTamplatesProps) {
    return(
        <>
            <Container>        
                <Header/>
            </Container>
            <Main>
                {children}
            </Main>
            <Container>
                <Footer/>
            </Container>
        </>
    )
}