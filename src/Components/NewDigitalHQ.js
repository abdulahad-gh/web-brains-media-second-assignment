import React from 'react';
import { ButtonDiv, NewDigitalHqSection, ResponseTitle, TalkToSalesBtn, TryForFreeBtn } from '../StyleComponents/WebBrainsMedia.Styled';

const NewDigitalHQ = () => {
    return (
        <NewDigitalHqSection>
            <ResponseTitle WhiteColor TeamsLargeSection>  Welcome to your new digital HQ.
            </ResponseTitle>
            <ButtonDiv NewDigitaBtnCont>
                <TalkToSalesBtn NewDigitaBtn icon>sign up with googlea</TalkToSalesBtn>
                <TryForFreeBtn icon>sign up with email address</TryForFreeBtn>


            </ButtonDiv>
        </NewDigitalHqSection>
    );
};

export default NewDigitalHQ;