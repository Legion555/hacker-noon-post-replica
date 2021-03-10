import {useState, useEffect} from 'react';
//icons
import {AiOutlineTwitter, AiOutlineGithub, AiFillYoutube, AiFillInstagram} from 'react-icons/ai';
import {FaPodcast, FaRss, FaLinkedinIn, FaFacebookF} from 'react-icons/fa';
//redux
import {useSelector} from 'react-redux';



export default function Footer() {
    const theme = useSelector(state => state.theme);
    const [themeStyle, setThemeStyle] = useState('')

  useEffect(() => {
    if (theme === 'light') {
        return setThemeStyle('text-gray-800 bg-gray-200')
    } else if (theme === 'dark') {
        return setThemeStyle('text-gray-100 bg-gray-600')
    }
  }, [theme])


    return (
        <div className={`w-full p-4 flex justify-between items-center ${themeStyle}`}>
            {/* Site Links */}
            <div className="w-9/12">
                <div className="flex flex-wrap">
                    <FooterLink url={"https://help.hackernoon.com"} text={"Help"} styleVar={"font-bold"} />
                    <FooterLink url={"https://www.about.hackernoon.com"} text={"About"} styleVar={"font-bold"} />
                    <FooterLink url={"https://app.hackernoon.com/drafts/tsAEw2B7RbghYLwGm9Jz"} text={"Start Writing"} styleVar={"font-bold"} />
                    <FooterLink url={"https://sponsor.hackernoon.com"} text={"Sponsor:"} styleVar={"font-bold"} />
                    <FooterLink url={"https://sponsor.hackernoon.com/#brandasauthor"} text={"Brand-as-Author"} />
                    <FooterLink url={"https://sponsor.hackernoon.com/#billboard"} text={"Sitewide Billboard"} />
                    <FooterLink url={"https://sponsor.hackernoon.com/#adbytag"} text={"Ad by tag"} />
                    <FooterLink url={"https://sponsor.hackernoon.com/#newsletter"} text={"Newsletter"} />
                    <FooterLink url={"https://noonies.tech/sponsor"} text={"Noonies"} />
                </div>
                <div className="flex flex-wrap">
                    <FooterLink url={"https://hackernoon.com/contact"}text={"Contact Us"} />
                    <FooterLink url={"https://hackernoon.com/terms"}text={"Terms"} />
                    <FooterLink url={"https://hackernoon.com/privacy"}text={"Privacy"} />
                    <FooterLink url={"https://hackernoon.com/cookies"}text={"Cookies"} />
                    <FooterLink url={"https://hackernoon.com/archives/yesterday"} text={"Stories published yesterday"} />
                    <FooterLink url={"https://leaders.hackernoon.com/"} text={"Leaderboard"} />
                    <FooterLink url={"https://community.hackernoon.com/"} text={"Contributors' Club"} />
                    <FooterLink url={"https://chrome.google.com/webstore/detail/tech-stories-tab-by-hacke/cmcgnandlhnjekeccmongfellpljlohh?hl=en-US"} text={"Chrome Extension"} />
                </div>
            </div>
            {/* Social Links */}
            <div className="flex flex-col md:flex-row">
                <SocialLink icon={FaLinkedinIn} />
                <SocialLink icon={FaFacebookF} />
                <SocialLink icon={AiOutlineTwitter} />
                <SocialLink icon={AiOutlineGithub} />
                <SocialLink icon={AiFillYoutube} />
                <SocialLink icon={AiFillInstagram} />
                <SocialLink icon={FaPodcast} />
                <SocialLink icon={FaRss} />
            </div>
        </div>
    )
}

const FooterLink = ({url, text, styleVar}) => {
    return (
        <a href={url} target="_blank" className={`mr-4 text-sm ${styleVar}`}>{text}</a>
    )
}

const SocialLink = ({icon}) => {
    const Icon = icon;
    return (
        <Icon className="mx-1 text-2xl text-green-400 hover:text-green-800" style={{transition: '1s cubic-bezier(0.075, 0.80, 0.165, 1)'}} />
    )
}