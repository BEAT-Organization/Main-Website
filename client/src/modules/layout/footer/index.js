import React from 'react'
import Footer from './footer'
export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>

                    <Footer.Column social>
                        <Footer.Title>About Beat</Footer.Title>
                        <Footer.Link href="/home">
                            Biomedical Engineering Awareness and Technologies
                            (BEAT)
                        </Footer.Link>

                        <div className="icons">
                            <Footer.Link href="https://www.facebook.com/beat.bme">
                                <Footer.Icon social className="fab fa-facebook-square" />
                            </Footer.Link>
                            <Footer.Link href="https://www.linkedin.com/company/beat-sbme">
                                <Footer.Icon social className="fab fa-linkedin" />
                            </Footer.Link>
                            <Footer.Link href="https://github.com/BEAT-Organization">
                                <Footer.Icon social className="fab fa-github-square" />
                            </Footer.Link>
                            <Footer.Link href="#">
                                <Footer.Icon social className="fab fa-youtube-square" />
                            </Footer.Link>
                        </div>
                    </Footer.Column>

                    <Footer.Column id="contacts">
                        <Footer.LocalLink to="/ContactUs" contact>
                            <Footer.Icon className="fas fa-map-marker-alt" />
                            Faculty of Engineering, Cairo University.
                        </Footer.LocalLink>

                        <Footer.Link contact >
                            <Footer.Icon className="fas fa-phone-alt" />
                            Phone number
                        </Footer.Link>

                        <Footer.Link contact href="mailto:beat.sbme.official@gmail.com" >
                            <Footer.Icon className="far fa-envelope" />
                            <Footer.Mail > beat.sbme.official@gmail.com </Footer.Mail>
                        </Footer.Link>
                    </Footer.Column>

                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}
