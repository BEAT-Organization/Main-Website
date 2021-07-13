import React from 'react'
import Footer from '../components/footer'
export function FooterContainer() {
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
                            <Footer.Link href="#">
                                <Footer.Icon social className="fab fa-facebook-square" />
                            </Footer.Link>
                            <Footer.Link href="#">
                                <Footer.Icon social className="fab fa-linkedin" />
                            </Footer.Link>
                            <Footer.Link href="#">
                                <Footer.Icon social className="fab fa-github-square" />
                            </Footer.Link>
                            <Footer.Link href="#">
                                <Footer.Icon social className="fab fa-youtube-square" />
                            </Footer.Link>
                        </div>
                    </Footer.Column>

                    <Footer.Column id="contacts">
                        <Footer.Contact>
                            <Footer.Icon className="fas fa-map-marker-alt" />
                            Faculty of Engineering, Cairo University.
                        </Footer.Contact>

                        <Footer.Contact>
                            <Footer.Icon className="fas fa-phone-alt" />
                            Phone number
                        </Footer.Contact>

                        <Footer.Contact href="#">
                            <Footer.Icon className="far fa-envelope" />
                            <Footer.Mail > beat.sbme.official@gmail.com </Footer.Mail>
                        </Footer.Contact>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}
