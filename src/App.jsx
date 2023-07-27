import './App.scss';

import { useState } from 'react'
import { Nav, Navbar, Container } from "react-bootstrap";
import Projects from './components/Projects';
import Music from './components/Music';
import WelcomeCard from './components/WelcomeCard';


function App() {
  const [type, setType] = useState('type1')
  const handTypeChange = (type)=>{
      setType(type)
  }
  return (
    <>
      <div className="welcome-container">
        <WelcomeCard />
      </div>
      <div className="page-container">
        <Navbar sticky="top" variant="dark" bg="dark" activeKey="#top">
            <Container>
                <Navbar.Brand href="#top">Antoine Nguyen</Navbar.Brand>
                <Nav className="me-auto" variant="pills">
                    <Nav.Link eventKey={0} href="#projects" onClick={()=>handTypeChange('projects')}>Projects</Nav.Link>
                    <Nav.Link eventKey={1} href="#music" onClick={()=>handTypeChange('music')}>Music</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        {type==='projects' && <Projects />}
        {type==='music' && <Music />}
      </div>

    </>
  );
}

export default App;
