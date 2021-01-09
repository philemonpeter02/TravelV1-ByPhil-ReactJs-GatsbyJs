import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, SocialIcon, SocialIconLink, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons} from './FooterElements'

const Footer = () => {
return(
    <FooterContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to="/">
                    <SocialIcon />
                    Phil's
                </SocialLogo>
                <WebsiteRights>
                    Phil's © {new Date().getFullYear()}.<br/> Designed And Developed By Philemon Peter.
                </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
    </FooterContainer>
)
}

export default Footer