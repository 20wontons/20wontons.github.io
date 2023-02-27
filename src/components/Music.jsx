import { Container, Row, Col } from "react-bootstrap";

function Music() {
    return (
        <>
            <Container id="music" className="text-center justify-content-md-center p-5">
                <h2 className="my-3">Music</h2>
                <Row className="text-center justify-content-md-center">
                    <Row>
                        <Col>
                            <h3>Solo Projects</h3>
                            <p style={{ textAlign: "left" }}>
                                I spend time writing songs about my life, things I struggle with, things I cherish.
                                I like Indie Rock and Midwest Emo.
                            </p>
                        </Col>
                        <Col>
                            <h3>The Band</h3>
                            <p style={{ textAlign: "left" }}>
                                I play with a pop punk, indie rock, midwest emo band. I do bass, guitar, and vocals.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <iframe title="Spotify"
                                src="https://open.spotify.com/embed/artist/2yvyqHjROMM5DFxi5N4dHB?utm_source=generator"
                                width="100%" height="352" allow="encrypted-media"
                                allowFullScreen loading="lazy"></iframe>
                        </Col>
                        <Col>
                            <iframe width="100%" height="352"
                                src="https://www.youtube.com/embed/8CX3Ew4Y524"
                                title="YouTube" allowFullScreen></iframe>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <h3 className="mt-3">What I Use</h3>
                    <ul className="web-icons">
                        <li>Cakewalk</li>
                        <li>Audacity</li>
                        <li>Yamaha MX 12/6</li>
                        <li><a href="https://www.boss.info/us/products/gt-1/">BOSS GT-1 Multi-Effects Pedal</a></li>
                        <li>Squier Classic Vibe '60s Telecaster Thinline</li>
                        <li>Squier Affinity Series Stratocaster</li>
                        <li>Cort GB54P Bass</li>
                        <li><a href="https://www.akaipro.com/mpk249">Akai Professional MPK249 49-Key MIDI Controller</a></li>
                        <li>Shure Dynamic Microphone</li>
                        <li>Fender Rumble 40 Bass Amp</li>
                    </ul>
                </Row>
                <Row>
                    <h3 className="mt-3">Check out the music!</h3>
                    <ul className="web-icons">
                        <li>
                            <a href="https://open.spotify.com/artist/2yvyqHjROMM5DFxi5N4dHB?si=sI8tjym0R2C_wPDHILiWaA">
                                <img src="https://cdn-icons-png.flaticon.com/512/3669/3669986.png" alt="Spotify | 20wontons" />
                            </a>
                        </li>
                        <li>
                            <a href="https://20wontons.bandcamp.com/">
                                <img src="https://cdn-icons-png.flaticon.com/512/49/49461.png" alt="Bandcamp | 20wontons" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UC9JqBrtH8O_zKk4gl5rzVBg">
                                <img src="https://cdn-icons-png.flaticon.com/512/4494/4494485.png" alt="YouTube | 20wontons" />
                            </a>
                        </li>
                        <li>
                            <a href="https://soundcloud.com/20wontons">
                                <img src="https://cdn-icons-png.flaticon.com/512/4494/4494520.png" alt="Soundcloud | 20wontons" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.bandlab.com/20wontons">
                                <img src="https://apk4all.io/wp-content/uploads/apps/BandLab-Music-Studio-Social-Network/OavWAFQYn-66EPNQcy5conEHClQ3IvUCgCsXKIlJqeYrT_46Mh-iHb0B707y2X3byvY.png" alt="Bandlab | 20wontons" />
                            </a>
                        </li>
                    </ul>
                </Row>
            </Container>
        </>
    );
}

export default Music;