import postData from '../data/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json';
//icons
import {AiOutlineTwitter} from 'react-icons/ai';
import {CgMail} from 'react-icons/cg';
import {FaHeart, FaLightbulb, FaLinkedinIn, FaFacebookF, FaUserAstronaut} from 'react-icons/fa';
import {GiSailboat, GiCash} from 'react-icons/gi';

export default function ContentFooter() {
    return (
        <div className="content_footer w-full md:w-3/5 mx-auto">
            {/* Reactions */}
            <div className="w-max my-8 mx-auto flex items-center text-3xl">
                <p className="mr-2">{postData.reactions.total}</p>
                <FaHeart className="hover:text-red-600 transition-all duration-500 ease-in-out" />
                <FaLightbulb className="hover:text-yellow-400 transition-all duration-500 ease-in-out" />
                <GiSailboat className="hover:text-yellow-800 transition-all duration-500 ease-in-out" />
                <GiCash className="hover:text-yellow-500 transition-all duration-500 ease-in-out" />
            </div>
            {/* Share Links */}
            <div className="w-full mt-16 flex justify-end items-center">
                <p>Share this story</p>
                <AiOutlineTwitter className="text-2xl text-green-600" />
                <FaFacebookF className="text-2xl text-green-600" />
                <FaLinkedinIn className="text-2xl text-green-600" />
                <CgMail className="text-2xl text-green-600" />
            </div>
            {/* Author info */}
            <div className="author-info_footer w-full mt-4 flex justify-between">
                <div>
                    <a href={`https://hackernoon.com/u/${postData.profile.handle}`}>
                            <img src={postData.profile.avatar} alt="author avatar" width={50} className="mb-2" /></a>
                    <a href={`https://hackernoon.com/u/${postData.profile.handle}`}>@{postData.profile.handle}</a>
                    <p>{postData.profile.displayName}</p>
                </div>
                <div className="w-6/12 flex">
                    <FaUserAstronaut className="text-xl mr-2 mt-2" />
                    <a href={postData.profile.adLink} className="ad text-xl font-bold" style={{background: 'none'}}>{postData.profile.adText}</a>
                </div>
            </div>
        </div>
    )
}