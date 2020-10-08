import React from "react";
import Container from "react-bootstrap/Container";
import "./style.css";

function Main(props) {
    return (
        <main className="bg-color">
            <Container>{props.children}</Container>
        </main>
    );
}

export default Main;
