import React from 'react';
import { TeamsLargeSectionStyled, ResponseDesc, ResponseTitle, TeamsLargeIconDiv, SpanWithIcon, ButtonDiv, TryForFreeBtn, TalkToSalesBtn } from '../StyleComponents/WebBrainsMedia.Styled'

const TeamsLargeSection = () => {
    return (
        <TeamsLargeSectionStyled>
            <TeamsLargeIconDiv firstIcon>
                <SpanWithIcon><i class="fa-solid fa-landmark-flag"></i> <span>11</span></SpanWithIcon>
                <SpanWithIcon><i class="fa-solid fa-image"></i> <span>12</span></SpanWithIcon>
            </TeamsLargeIconDiv>
            <ResponseTitle TeamsLargeSection>Teams large and small rely on Slack </ResponseTitle>

            <TeamsLargeIconDiv >
                <SpanWithIcon><i class="fa-solid fa-chart-line"></i> <span>11</span></SpanWithIcon>
                <ResponseDesc TeamsLargeSection>Slack securely scales up to support collaboration at the world is biggest companies.</ResponseDesc>
                <SpanWithIcon><i class="fa-solid fa-handshake-simple"></i> <span>12</span></SpanWithIcon>
            </TeamsLargeIconDiv>
            <TeamsLargeIconDiv >
                <SpanWithIcon><i class="fa-solid fa-lock"></i> <span>11</span></SpanWithIcon>
                <ButtonDiv>
                    <TryForFreeBtn icon>sign up with email address</TryForFreeBtn>
                    <TalkToSalesBtn icon>sign up with googlea</TalkToSalesBtn>

                </ButtonDiv>
                <SpanWithIcon><i class="fa-solid fa-laptop"></i> <span>12</span></SpanWithIcon>
            </TeamsLargeIconDiv>



        </TeamsLargeSectionStyled>
    );
};

export default TeamsLargeSection;