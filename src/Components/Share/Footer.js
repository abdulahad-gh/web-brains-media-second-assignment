import React from 'react';
import { AnohterLink, CardLink, CopyRightText, FooterBottom, FooterElement, FooterSection, H3, Hr, LinkCont, ResponseExternalLink, SocialLinks } from '../../StyleComponents/WebBrainsMedia.Styled'
const Footer = () => {
    return (
        <>
            <FooterSection>
                <a data-clog-click="" data-clog-ui-component="inc_footer_nav" data-clog-ui-element="link_home" href="https://slack.com/intl/en-in/" aria-label="Slack"><svg width="54" height="54" class="c-nav--footer__svgicon c-slackhash" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M19.712.133a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386h5.376V5.52A5.381 5.381 0 0 0 19.712.133m0 14.365H5.376A5.381 5.381 0 0 0 0 19.884a5.381 5.381 0 0 0 5.376 5.387h14.336a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386" fill="#097eff"></path><path d="M53.76 19.884a5.381 5.381 0 0 0-5.376-5.386 5.381 5.381 0 0 0-5.376 5.386v5.387h5.376a5.381 5.381 0 0 0 5.376-5.387m-14.336 0V5.52A5.381 5.381 0 0 0 34.048.133a5.381 5.381 0 0 0-5.376 5.387v14.364a5.381 5.381 0 0 0 5.376 5.387 5.381 5.381 0 0 0 5.376-5.387" fill="#097eff"></path><path d="M34.048 54a5.381 5.381 0 0 0 5.376-5.387 5.381 5.381 0 0 0-5.376-5.386h-5.376v5.386A5.381 5.381 0 0 0 34.048 54m0-14.365h14.336a5.381 5.381 0 0 0 5.376-5.386 5.381 5.381 0 0 0-5.376-5.387H34.048a5.381 5.381 0 0 0-5.376 5.387 5.381 5.381 0 0 0 5.376 5.386" fill="#ecb12f"></path><path d="M0 34.249a5.381 5.381 0 0 0 5.376 5.386 5.381 5.381 0 0 0 5.376-5.386v-5.387H5.376A5.381 5.381 0 0 0 0 34.25m14.336-.001v14.364A5.381 5.381 0 0 0 19.712 54a5.381 5.381 0 0 0 5.376-5.387V34.25a5.381 5.381 0 0 0-5.376-5.387 5.381 5.381 0 0 0-5.376 5.387" fill="#ecb12f"></path></g></svg></a>
                <FooterElement>
                    <H3 DefaultAlign>why slack?</H3>
                    <p>Slack vs email</p>
                    <p>Channels</p>
                    <p>Engagement</p>
                    <p>Scale</p>
                    <p>Watch the demo</p>
                </FooterElement>
                <FooterElement>
                    <H3 DefaultAlign>product</H3>
                    <p>Features</p>
                    <p>Integrations</p>
                    <p>Enterprise</p>
                    <p>Solutions</p>
                </FooterElement>
                <FooterElement>
                    <H3 DefaultAlign>pricing</H3>
                    <p>Subscriptions</p>
                    <p>Paid vs free</p>
                </FooterElement>
                <FooterElement>
                    <H3 DefaultAlign>resources</H3>
                    <p>Partners</p>
                    <p>Developers</p>
                    <p>Community</p>
                    <p>Apps</p>
                    <p>Blog</p>
                    <p>Help Center</p>
                    <p>Events</p>
                </FooterElement>
                <FooterElement>
                    <H3 DefaultAlign>company</H3>
                    <p>About us</p>
                    <p>Leadership</p>
                    <p>Investor relations</p>
                    <p>News</p>
                    <p>Media kit</p>
                    <p>Careers</p>
                </FooterElement>
            </FooterSection>

            <FooterBottom>
                <Hr></Hr>
                <SocialLinks>

                    <LinkCont>
                        <ResponseExternalLink Black href="S">Status</ResponseExternalLink>
                        <ResponseExternalLink Black href="#privacy">Privacy</ResponseExternalLink>
                        <ResponseExternalLink Black href="#Terms">Terms</ResponseExternalLink>
                        <ResponseExternalLink Black href="#Cookie">Cookie preferences</ResponseExternalLink>
                        <ResponseExternalLink Black href="#Contact">Contact us</ResponseExternalLink>
                        <ResponseExternalLink Black href="#Change_region"><i class="fa-solid fa-globe"></i> Change region </ResponseExternalLink>
                    </LinkCont>

                    <div>
                        <LinkCont>
                            <AnohterLink Black href="#download_slack"><i class="fa-solid fa-cloud-arrow-down"></i> Downlaod Slack</AnohterLink>
                            <ResponseExternalLink Black href="#twitter"><i class="fa-brands fa-twitter"></i></ResponseExternalLink>
                            <ResponseExternalLink Black href="#fb"><i class="fa-brands fa-square-facebook"></i></ResponseExternalLink>
                            <ResponseExternalLink Black href="#yt"><i class="fa-brands fa-youtube"></i></ResponseExternalLink>
                            <ResponseExternalLink Black href="#ld"><i class="fa-brands fa-linkedin"></i></ResponseExternalLink>

                        </LinkCont>
                    </div>
                </SocialLinks>
                <CopyRightText>©2022 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.</CopyRightText>

            </FooterBottom>
        </>

    );
};

export default Footer;