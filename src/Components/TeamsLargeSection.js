import React from 'react';
import { TeamsLargeSectionStyled, ResponseDesc, ResponseTitle, TeamsLargeIconDiv, SpanWithIcon, ButtonDiv, TryForFreeBtn, TalkToSalesBtn, TeamsLargeIconThird, ParcentCont, ParcentSpan } from '../StyleComponents/WebBrainsMedia.Styled'

const TeamsLargeSection = () => {
    return (
        <TeamsLargeSectionStyled>
            <TeamsLargeIconDiv firstIcon>
                <SpanWithIcon><i class="fa-solid fa-landmark-flag"></i> <span>11</span></SpanWithIcon>
                <SpanWithIcon><i class="fa-solid fa-image"></i> <span>12</span></SpanWithIcon>
            </TeamsLargeIconDiv>
            <ResponseTitle TeamsLargeSection>Teams large and small rely on Slack </ResponseTitle>

            <TeamsLargeIconDiv secondIcon>
                <SpanWithIcon><i class="fa-solid fa-chart-line"></i> <span>11</span></SpanWithIcon>
                <ResponseDesc TeamsLargeSection>Slack securely scales up to support collaboration at the world is biggest companies.</ResponseDesc>
                <SpanWithIcon><i style={{ color: 'orange' }} class="fa-solid fa-handshake-simple"></i> <span>12</span></SpanWithIcon>
            </TeamsLargeIconDiv>
            <TeamsLargeIconThird >
                <SpanWithIcon><i style={{ color: 'orange' }} class="fa-solid fa-lock"></i> <span>11</span></SpanWithIcon>
                <ButtonDiv>
                    <TryForFreeBtn icon>sign up with email address</TryForFreeBtn>
                    <TalkToSalesBtn icon>sign up with googlea</TalkToSalesBtn>

                </ButtonDiv>
                <SpanWithIcon><i class="fa-solid fa-laptop"></i> <span>12</span></SpanWithIcon>
            </TeamsLargeIconThird>
            <ParcentCont>

                <div>
                    <ParcentSpan>85%</ParcentSpan>
                    <p>of users say that Slack has improved communication*</p>
                </div>
                <div>
                    <ParcentSpan>86%</ParcentSpan>
                    <p>feel that their ability to work remotely has improved*</p>
                </div>
                <div>
                    <ParcentSpan>88%</ParcentSpan>
                    <p>feel more connected to their teams*</p>
                </div>
            </ParcentCont>




        </TeamsLargeSectionStyled>
    );
};

export default TeamsLargeSection;