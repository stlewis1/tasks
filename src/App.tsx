import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Hello World
            </header>
            <h1>new header</h1>
            <img
                src="https://www.gemsforlife.net/-/media/project/gems/gems-for-life/university-profile-logos/batch5/university-of-delaware.png?h=600&w=600&hash=A657D2D9D32CA9071F87D493A53A5597"
                alt="UD"
            />
            <ul>
                Ordered List
                <li>one</li>
                <li>two</li>
                <li>three</li>
                <li>four</li>
            </ul>
            <Container className="col">
                <Row>
                    <Col>
                        1st column
                        <div
                            style={{
                                height: 50,
                                width: 600,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        2nd column
                        <div
                            style={{
                                height: 50,
                                width: 600,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Stephen Lewis
            </p>
        </div>
    );
}

export default App;
