import React from 'react';
import { BannerSection, ButtonDiv, P, Span, TalkToSalesBtn, Title, TryForFreeBtn } from '../StyleComponents/WebBrainsMedia.Styled';

const Banner = () => {
    return (
        <BannerSection>
            <div>
                <Title>
                    Great teamwork starts <br /> with a digital HQ
                </Title>
                <P><Span>Slack is free to try </Span> for as long as you like</P>
                <ButtonDiv>
                    <TryForFreeBtn>sign up with email address</TryForFreeBtn>
                    <TalkToSalesBtn>sign up with googlea</TalkToSalesBtn>

                </ButtonDiv>
            </div>
            <div >
                <video width='700px' height='400px' src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/hero-product-ui.webm" autoPlay loop muted playsInline></video>
            </div>

        </BannerSection>
    );
};

export default Banner;