import React from 'react';
import { BrandIconCont, BrandSection, BrandTwoSideContent, H3, ResponseDesc, ResponseExternalLink, ResponseTitle } from '../StyleComponents/WebBrainsMedia.Styled'

const Brand = () => {
    return (
        <BrandSection>
            <H3>trusted by companies all over the world</H3>
            <BrandIconCont>
                <img src='https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-seek.png' alt='brandIcon' />
                <img src='https://a.slack-edge.com/8719b/marketing/img/logos/company/_color/logo-xero.png' alt='brandIcon' />
                <img src='https://a.slack-edge.com/96f2e65/marketing/img/logos/company/_color/rea.png   ' alt='brandIcon' />
                <img src='https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/rmit.png' alt='brandIcon' />
                <img src='https://a.slack-edge.com/68794/marketing/img/logos/company/_color/ibm.png' alt='brandIcon' />
                <img src='https://a.slack-edge.com/f854ec/marketing/img/logos/company/_color/deliveroo.png' alt='brandIcon' />

            </BrandIconCont>
            <BrandTwoSideContent>
                <div>
                    <video width='600px' height='400px' src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/connectedness.webm" autoPlay loop muted playsInline></video>
                </div>
                <div>
                    <ResponseTitle>bring your team <br /> together</ResponseTitle>
                    <ResponseDesc>At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.</ResponseDesc>
                    <ResponseExternalLink href="https://"><span>Learn more about channels</span> <i class="fa-solid fa-arrow-right-long"></i></ResponseExternalLink>
                </div>
            </BrandTwoSideContent>
            <BrandTwoSideContent>

                <div>
                    <ResponseTitle>Choose how you<br />want to work</ResponseTitle>
                    <ResponseDesc>In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live.</ResponseDesc>
                    <ResponseExternalLink href="https://"><span>Learn more about flexible communication</span> <i class="fa-solid fa-arrow-right-long"></i></ResponseExternalLink>
                </div>
                <div>
                    <video width='600px' height='400px' src="https://a.slack-edge.com/9689dea/marketing/img/homepage/e2e-prospects/animations/webm/flexibility.webm" autoPlay loop muted playsInline></video>
                </div>
            </BrandTwoSideContent>
            <BrandTwoSideContent>
                <div>
                    <video width='600px' height='400px' src="https://a.slack-edge.com/221d25b/marketing/img/homepage/e2e-prospects/animations/webm/speed.webm" autoPlay loop muted playsInline></video>
                </div>
                <div>
                    <ResponseTitle>Move faster with your <br />tools in one place</ResponseTitle>
                    <ResponseDesc>With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.</ResponseDesc>
                    <ResponseExternalLink href="https://"><span>Learn more about the Slack platform</span> <i class="fa-solid fa-arrow-right-long"></i></ResponseExternalLink>
                </div>
            </BrandTwoSideContent>

        </BrandSection>
    );
};

export default Brand;