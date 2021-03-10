import postData from '../data/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json';
import { useEffect, useState } from 'react';
import {AiOutlineUser, AiOutlineArrowRight} from 'react-icons/ai';
import {FaMoon, FaSun} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GoSearch} from 'react-icons/go';
//redux
import {useDispatch, useSelector} from 'react-redux';
import {updateTheme} from '../actions';



export default function Nav() {
    const dispatch = useDispatch();
    const theme = useSelector(state => state.theme);

    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(currentScrollPos > 1000);
        console.log(visible)
      };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [visible, handleScroll]);

    const [hamburgerToggle, setHamburgerToggle] = useState(false);

    return (
        <header className="w-full fixed top-0 shadow z-40">
            {/* Top bar */}
            <div className={`w-full justify-between items-center py-2 px-4 ${visible ? 'hidden' : 'flex'}
                ${theme === 'light' && 'bg-hackerGreenLight'} ${theme === 'dark' && 'bg-hackerGreenDark'}`}>
                <img className="hidden md:block w-48" src="https://hackernoon.com/hn-logo.png" />
                <img className="w-8 md:hidden" src="https://hackernoon.com/hn-icon.png" />
                <div className="flex items-center">
                    <div className="flex items-center">
                        <input className="nav-search_box py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-100" style={{background: '#003B00', border: '2px solid #00BB00'}}
                            placeholder="Search..."></input>
                        <GoSearch className="relative right-6 font-bold" style={{color: '00BB00'}} />
                    </div>
                    <button className="hidden md:block mr-4 px-2 py-1 text-gray-100 border-2 border-gray-800 font-bold hover:bg-green-400">Start Writing</button>
                    <AiOutlineUser className="hidden md:block mr-4 text-4xl bg-gray-100" />
                    <div>
                        {theme === 'light' &&
                            <FaSun className="mr-3 text-3xl text-gray-600 cursor-pointer" onClick={() => dispatch(updateTheme('dark'))} />
                        }
                        {theme === 'dark' &&
                            <FaMoon className="mr-3 text-3xl text-gray-300 cursor-pointer" onClick={() => dispatch(updateTheme('light'))} />
                        }
                    </div>
                    <GiHamburgerMenu className="text-3xl md:hidden" onClick={() => setHamburgerToggle(true)} />
                </div>
            </div>
            {/* Nav Links */}
            <div className={`w-full min-h-screen md:min-h-full md:min-h-8 
                ${hamburgerToggle ? 'fixed top-0 block' : 'hidden'} md:block flex flex-col md:flex-row items-center text-sm text-gray-100`}
                style={{background: '#003B00'}}>
                <div className="w-full mb-8 p-2 flex justify-between items-center md:hidden">
                    <AiOutlineUser className="text-4xl text-gray-800 bg-gray-100" />
                    <AiOutlineArrowRight className="text-3xl" style={{color: '#00BB00'}} onClick={() => setHamburgerToggle(false)} />
                </div>
                <div className="w-full md:p-2 flex flex-col md:flex-row md:justify-center md:items-center">
                    <NavLinkExpand link={'https://hackernoon.com/tagged'} text={'Read'} />
                    <NavLink link={'https://hackernoon.com/tagged/hackernoon-top-story'} text={'Top Stories'} />
                    <NavLink link={'https://www.publish.hackernoon.com/'} text={'Write'} />
                    <NavLink link={'https://hackernoon.com/tagged/hackernoon-podcast'} text={'Listen'} />
                    <NavLinkExpand link={'https://hackernoon.com/u/udacity'} text={'Learn'} />
                    <NavLinkExpand link={'https://sponsor.hackernoon.com/'} text={'Advertise'} />
                    <NavLinkExpand link={'https://www.about.hackernoon.com/'} text={'About'} />
                    <NavLinkExpand link={'https://hackernoon.com/about-tech-company-news-pages-by-hacker-noon-uwu34bh'} text={'Tech Companies'} />
                    <NavLink link={'https://careers.hackernoon.com/'} text={'Careers'} />
                    <NavLink link={'https://www.slogging.com/'} text={'Slogging'} />
                </div>
            </div>
            {/* Ad */}
            <div  className={`w-full flex justify-center items-center py-2 px-4
                ${theme === 'light' && 'bg-yellow-300'} ${theme === 'dark' && 'bg-yellow-600'}`} >
                    <img className="object-fit mr-4" src='https://hackernoon.com/images/img-8i133ho.png' alt="spectra ad" width={30} />
                    <h1 className={`font-bold ${theme === 'dark' && 'text-yellow-300'}`}>Join 3500 Developers at Spectra March 17th</h1>
            </div>
            {/* Post title */}
            <div id="nav_title" className={`nav_title w-full items-center py-2 px-4 ${visible ? 'flex' : 'hidden'}
                ${theme === 'light' && 'bg-gray-100'} ${theme === 'dark' && 'bg-hackerGreenLight'}`} >
                    <img className="mr-2" src="https://hackernoon.com/hn-icon.png" alt="watch icon" width={20} />
                    <h1 className={`font-bold ${theme === 'dark' && 'text-gray-800'}`}>{postData.title} 
                        by <a href={`https://hackernoon.com/u/${postData.profile.handle}`}>@{postData.profile.handle}</a></h1>
            </div>
        </header>
    )
}

const NavLink = ({text, link}) => {
    return (
        <a href={link} alt="category link" className="w-full md:w-max md:mr-6 mb-4 md:mb-0 pb-4 md:pb-0 pl-2 md:pl-0 border-b border-green-400 md:border-none"
            style={{background: 'none'}} >
            {text}</a>
    )
}

const NavLinkExpand = ({text, link}) => {
    return (
        <a href={link} alt="category link" className="w-full md:w-max md:mr-6 mb-4 md:mb-0 pb-4 md:pb-0 pl-2 md:pl-0 border-b border-green-400 md:border-none"
            style={{background: 'none'}} >
            {text} <AiOutlineArrowRight className="md:hidden float-right text-2xl" style={{color: '#00BB00'}} /></a>
    )
}