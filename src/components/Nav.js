import postData from '../data/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json';
import { useEffect, useState } from 'react';
import {AiOutlineUser, AiOutlineArrowRight} from 'react-icons/ai';
import {FaMoon, FaSun} from 'react-icons/fa';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GoSearch} from 'react-icons/go';
//components
import Read from './DropdownLinks/Read';
import Learn from './DropdownLinks/Learn';
import Advertise from './DropdownLinks/Advertise';
import About from './DropdownLinks/About';
import TechCompanies from './DropdownLinks/TechCompanies';
//redux
import {useDispatch, useSelector} from 'react-redux';
import {updateTheme} from '../actions';



export default function Nav() {
    const dispatch = useDispatch();
    //color theme
    const theme = useSelector(state => state.theme);

    //scroll down menu state
    const [visible, setVisible] = useState(false);

    //mega menu state
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(currentScrollPos > 1000);
            console.log(visible)
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [visible]);

    const [hamburgerToggle, setHamburgerToggle] = useState(false);

    return (
        <header className="w-full sticky top-0 shadow z-40">
            {/* Top bar */}
            <div className={`w-full flex justify-between items-center px-4 overflow-hidden transition-all duration-500 ease-in-out
                ${visible ? 'h-0 py-0' : 'h-12 py-2'}
                ${theme === 'light' && 'bg-hackerGreenLight'} ${theme === 'dark' && 'bg-hackerGreenDark'}`}>
                {/* Logo */}
                <img className="hidden md:block w-48" src="https://hackernoon.com/hn-logo.png" alt="logo" />
                <img className="w-8 md:hidden" src="https://hackernoon.com/hn-icon.png" alt="logo" />
                <div className="flex items-center">
                    {/* Search */}
                    <div className="flex items-center">
                        <input className="nav-search_box py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-100" style={{background: '#003B00', border: '2px solid #00BB00'}}
                            placeholder="Search..."></input>
                        <GoSearch className="relative right-6 font-bold" style={{color: '00BB00'}} />
                    </div>
                    {/* Start Writing */}
                    <button className="hidden md:block mr-4 px-2 py-1 text-gray-100 border-2 border-gray-800 font-bold hover:bg-green-400">Start Writing</button>
                    {/* Profile */}
                    <AiOutlineUser className="hidden md:block mr-4 text-4xl bg-gray-100" />
                    {/* Theme toggler */}
                    <div>
                        {theme === 'light' &&
                            <FaSun className="mr-3 text-3xl text-gray-600 cursor-pointer" onClick={() => dispatch(updateTheme('dark'))} />
                        }
                        {theme === 'dark' &&
                            <FaMoon className="mr-3 text-3xl text-gray-300 cursor-pointer" onClick={() => dispatch(updateTheme('light'))} />
                        }
                    </div>
                    {/* Mobile menu toggler */}
                    <GiHamburgerMenu className="text-3xl md:hidden" onClick={() => setHamburgerToggle(true)} />
                </div>
            </div>
            {/* Nav Links */}
            <div className={`w-full min-h-screen md:min-h-full md:min-h-8 z-10
                ${hamburgerToggle ? 'fixed top-0 block' : 'hidden'} md:block flex flex-col md:flex-row items-center text-sm text-gray-100 overflow-hidden
                ${visible ? 'h-0 py-0' : 'h-12 py-2'}`}
                style={{background: '#003B00'}}>
                {/* Mobile menu */}
                <div className="w-full mb-8 p-2 flex justify-between items-center md:hidden">
                    <AiOutlineUser className="text-4xl text-gray-800 bg-gray-100" />
                    <AiOutlineArrowRight className="text-3xl" style={{color: '#00BB00'}} onClick={() => setHamburgerToggle(false)} />
                </div>
                {/* Links */}
                <div className="w-full md:p-2 flex flex-col md:flex-row md:justify-center md:items-center">
                    <NavLinkExpand link={'https://hackernoon.com/tagged'} text={'Read'}
                        setMenu={setMenu} menuValue={'read'} />
                    <NavLink link={'https://hackernoon.com/tagged/hackernoon-top-story'} text={'Top Stories'} />
                    <NavLink link={'https://www.publish.hackernoon.com/'} text={'Write'} />
                    <NavLink link={'https://hackernoon.com/tagged/hackernoon-podcast'} text={'Listen'} />
                    <NavLinkExpand link={'https://hackernoon.com/u/udacity'} text={'Learn'} 
                        setMenu={setMenu} menuValue={'learn'} />
                    <NavLinkExpand link={'https://sponsor.hackernoon.com/'} text={'Advertise'}
                        setMenu={setMenu} menuValue={'advertise'} />
                    <NavLinkExpand link={'https://www.about.hackernoon.com/'} text={'About'}
                        setMenu={setMenu} menuValue={'about'} />
                    <NavLinkExpand link={'https://hackernoon.com/about-tech-company-news-pages-by-hacker-noon-uwu34bh'} text={'Tech Companies'}
                        setMenu={setMenu} menuValue={'companies'} />
                    <NavLink link={'https://careers.hackernoon.com/'} text={'Careers'} />
                    <NavLink link={'https://www.slogging.com/'} text={'Slogging'} />
                </div>
                {/* Sub-menu render */}
                {menu === 'read' && <Read setMenu={setMenu} /> }
                {menu === 'learn' && <Learn setMenu={setMenu} /> }
                {menu === 'advertise' && <Advertise setMenu={setMenu} /> }
                {menu === 'about' && <About setMenu={setMenu} /> }
                {menu === 'companies' && <TechCompanies setMenu={setMenu} /> }
            </div>
            {/* Ad */}
            <div  className={`w-full flex justify-center items-center py-2 px-4 text-sm md:text-base
                ${theme === 'light' && 'bg-yellow-300'} ${theme === 'dark' && 'bg-yellow-600'}`} >
                    <img className="object-fit mr-4" src='https://hackernoon.com/images/img-8i133ho.png' alt="spectra ad" width={30} />
                    <h1 className={`font-bold ${theme === 'dark' && 'text-yellow-300'}`}>Join 3500 Developers at Spectra March 17th</h1>
            </div>
            {/* Post title */}
            <div id="nav_title" className={`nav_title w-full flex items-center px-4 text-sm md:text-base overflow-hidden transition-all duration-500 ease-in-out
                ${visible ? 'h-20 md:h-16 py-2' : 'h-0 py-0'}
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
        <div className="w-full md:w-max md:mr-6 mb-4 md:mb-0 pb-4 md:pb-0 pl-2 md:pl-0 border-b border-green-400 md:border-none">
            <a href={link} alt="category link" className="hover:underline"
                style={{background: 'none'}} >
                {text}</a>
        </div>
    )
}

const NavLinkExpand = ({text, link, setMenu, menuValue}) => {
    return (
        <div className="w-full md:w-max md:mr-6 mb-4 md:mb-0 pb-4 md:pb-0 pl-2 md:pl-0 border-b border-green-400 md:border-none">
            <a href={link} alt="category link" className="hover:underline"
            style={{background: 'none'}} onMouseEnter={() => {setMenu(menuValue)}} >
            {text} </a>
            <AiOutlineArrowRight onClick={() => setMenu(menuValue)} className="md:hidden float-right text-2xl inline" style={{color: '#00BB00'}} />
        </div>
        
    )
}