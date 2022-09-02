import React from 'react'
import { Card, CardContainer, CardLink, NewWayToWorkSection, ResponseTitle } from '../StyleComponents/WebBrainsMedia.Styled';

const NewWayToWork = () => {
    return (
        <NewWayToWorkSection>
            <ResponseTitle TeamsLargeSection decFontSize>
                Take a deeper dive into a new way to work
            </ResponseTitle>
            <CardContainer>
                <Card BgColorCard>
                    <div>
                        <p>Collection</p>
                        <h3>Slack as your digital HQ</h3>
                    </div>
                    <img src="https://a.slack-edge.com/891d9e5/marketing/img/digital-hq/promos/img-promo-01.png" alt="card" />
                    <CardLink WhiteLinkText>
                        <span>SEE ALL</span>
                        <i class="fa-solid fa-arrow-right-long"></i>

                    </CardLink>
                </Card>
                <Card >
                    <img src="https://a.slack-edge.com/891d9e5/marketing/img/digital-hq/promos/img-promo-02.jpg" alt="card" />
                    <div>
                        <p>Resource</p>
                        <h3>See how ohters are building their digital HQ</h3>
                    </div>

                    <CardLink>
                        <span>read more</span>
                        <i class="fa-solid fa-arrow-right-long"></i>

                    </CardLink>
                </Card>
                <Card >
                    <img src="https://a.slack-edge.com/9fbc946/marketing/img/digital-hq/promos/img-promo-03.jpg" alt="card" />
                    <div>
                        <p>Webiner</p>
                        <h3>Ebracing a digital-first approach to work</h3>
                    </div>

                    <CardLink>
                        <span>watch now</span>
                        <i class="fa-solid fa-arrow-right-long"></i>

                    </CardLink>
                </Card>
                <Card >
                    <img src="https://a.slack-edge.com/9fbc946/marketing/img/digital-hq/promos/img-promo-04.jpg" alt="card" />
                    <div>
                        <p>E-book</p>
                        <h3>Reinventing work: new imperatives for the future of working</h3>
                    </div>

                    <CardLink>
                        <span>get e-book</span>
                        <i class="fa-solid fa-arrow-right-long"></i>

                    </CardLink>
                </Card>

            </CardContainer>
        </NewWayToWorkSection>
    )
}

export default NewWayToWork;