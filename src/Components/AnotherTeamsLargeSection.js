import React from 'react';
import { BrandTwoSideContent, ResponseDesc, ResponseExternalLink, ResponseTitle, RoundedDiv, TeamsP } from '../StyleComponents/WebBrainsMedia.Styled';

const AnotherTeamsLargeSection = () => {
    return (
        <>
            <BrandTwoSideContent another>

                <RoundedDiv width='600px' height='400px' src="https://a.slack-edge.com/93eaeb3/marketing/img/features/customer-awards/customer-awards-tmobile-quote-610x305@2x.mp4" autoPlay loop muted playsInline></RoundedDiv>


                <div>


                    <ResponseDesc italic>‘We were able to create a large virtual network of employees that can communicate as though they are together. There was a lot of disruption in terms of where we worked, but in terms of how we worked – very little disruption.’</ResponseDesc>
                    <div>
                        <p>Mark Smith</p>
                        <p>Senior Technical Product Manager, T-Mobile
                        </p>
                    </div>
                    <ResponseExternalLink href="https://"><span>Learn more about the Slack platform</span> <i class="fa-solid fa-arrow-right-long"></i></ResponseExternalLink>

                </div>

            </BrandTwoSideContent>
            <TeamsP>* Weighted average. Based on 2,707 survey responses from weekly Slack users in the US, UK, Australia and Canada with a ± 2% margin of error at 95% CI (December 2021).

            </TeamsP>
        </>
    );
};

export default AnotherTeamsLargeSection;