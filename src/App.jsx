import './App.scss';

import { Container, Row, Col } from "react-bootstrap";
import NavBar from './components/NavBar.jsx';
import Projects from './components/Projects';
import Music from './components/Music';

function App() {
  return (
    <>
      <div id="top" style={{ backgroundColor: "#eee" }}>
        <Container>
          <Row
            className="justify-content-center align-items-center m-0"
            style={{ minHeight: "100vh", backgroundColor: "#eee" }}
          >
            <Col>
              <h1>Antoine Nguyen</h1>
              <p>CSE Major | Programming, Music, Community</p>
            </Col>
            <Col>
              <h2>Connect</h2>
              <Row>
                <div>
                  <ul className="web-icons">
                    <li>
                      <a href="https://www.github.com/20wontons/">
                        <img src="https://cdn-icons-png.flaticon.com/512/179/179323.png" alt="GitHub | 20wontons" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/antoine-b-nguyen/">
                        <img src="https://cdn-icons-png.flaticon.com/512/4494/4494497.png" alt="LinkedIn | antoine-b-nguyen" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/20wontons/">
                        <img src="https://cdn-icons-png.flaticon.com/512/4494/4494488.png" alt="Instagram | @20wontons" />
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/20wontons">
                        <img src="https://cdn-icons-png.flaticon.com/512/4494/4494477.png" alt="Twitter | @20wontons" />
                      </a>
                    </li>
                    <li>
                      <a href="https://linktr.ee/20wontons">
                        <img src="https://cdn.ymaws.com/www.alpfa.org/resource/resmgr/chapters/img/linktree.png" alt="LinkTree | 20wontons" />
                      </a>
                    </li>
                  </ul>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <NavBar />
        <Projects />
        <Music />
      </div>

    </>
  );
}

export default App;
