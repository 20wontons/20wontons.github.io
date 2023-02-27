import anfootball from "../assets/anfootball-icon.png"

import { Button, Container, Row, Col, Card } from "react-bootstrap";


function Projects() {
    return (
        <>
            <Container id="projects" className="text-center justify-content-md-center p-5">
                <h2 className="my-3">Projects</h2>
                <Row className="gx-0">
                    <Col lg className="mb-3" md="auto">
                        <Card className="mx-auto" style={{ width: "18rem" }}>
                            <Card.Img variant="top" src={anfootball}></Card.Img>
                            <Card.Body>
                                <Card.Title>anfootball</Card.Title>
                                <Card.Text>
                                    A Discord bot that displays song tabs and chords
                                    using ultimate-guitar's repository of tabs.
                                    <br /><b>Coded in Python using Beautiful Soup and Interactions.py.</b>
                                </Card.Text>
                                <Container>
                                    <Row className="align-items-center m-0">
                                        <Col>
                                            <Button
                                                className="card-button"
                                                variant="secondary"
                                                href="https://www.github.com/20wontons/anfootball"
                                            >Github</Button>
                                        </Col>
                                        <Col>
                                            <Button
                                                className="card-button"
                                                variant="success"
                                                href="https://discord.com/api/oauth2/authorize?client_id=1018379814668865536&permissions=414464715840&scope=bot%20applications.commands"
                                            >Invite</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="mx-auto" style={{ width: "18rem" }}>
                            <Card.Img variant="top" src="https://the-new-webreg-2d73f.web.app/static/media/enrollment.f5b17f9ea2ed11af4f37.png" style={{ height: "18rem" }}></Card.Img>
                            <Card.Body>
                                <Card.Title>The New WebReg</Card.Title>
                                <Card.Text>
                                    Worked on a team to redesign the UI of UCI's registration system in a hackathon.
                                    <br /><b>Coded in JavaScript using React Bootstrap.</b>
                                </Card.Text>
                                <Container>
                                    <Row className="align-items-center m-0">
                                        <Col>
                                            <Button
                                                className="card-button"
                                                variant="secondary"
                                                href="https://github.com/ProfessorHPLeeFanClub/the-new-webreg"
                                            >Github</Button>
                                        </Col>
                                        <Col>
                                            <Button
                                                className="card-button"
                                                variant="success"
                                                href="https://the-new-webreg-2d73f.web.app/"
                                            >Link</Button>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <h3 className="my-3">What I Use</h3>
                    <ul className="web-icons">
                        <li>Python3</li>
                        <li>Kotlin</li>
                        <li>Java</li>
                        <li>JavaScript</li>
                        <li>C++</li>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>ReactJS</li>
                        <li>VSCode</li>
                        <li>IntelliJ</li>
                        <li>Replit</li>
                        <li>Git</li>
                    </ul>
                </Row>
            </Container>
        </>
    );
}

export default Projects;