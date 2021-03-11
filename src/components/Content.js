import {ReactDOM} from 'react';
import postData from '../data/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json';
import {Markup}  from 'react-render-markup';
//icons
import {AiOutlineTwitter, AiOutlineGithub} from 'react-icons/ai';



export default function Content() {
    
    const parseIframe = () => {
        setTimeout(() => {
            let array = [...document.getElementsByClassName('gist-container')];
            array.forEach(item => {
                let iFrame = item.firstChild;
                iFrame.src = `data:text/html;charset=utf-8,
                <head><base target='parent' /></head>
                <body><script src='https://gist.github.com/${iFrame.id.slice(5)}.js'></script>
                </body>`;
            })
            console.log(array)
        }, 1e3);
    }
    parseIframe()
    
    
    return (
        <div className="post-content">
            <div className="mb-16 flex justify-between md:flex-col" style={{gridRow: 'span 5 / auto'}}>
                <div className="w-40 pr-4">
                    <a href={`https://hackernoon.com/u/${postData.profile.handle}`}>
                            <img src={postData.profile.avatar} alt="author avatar" width={50} className="mb-2" /></a>
                </div>
                <div className="">
                    <a href={`https://hackernoon.com/u/${postData.profile.handle}`} className="font-bold">@{postData.profile.handle}</a>
                    <p className="mb-8">{postData.profile.displayName}</p>

                    <p className="mb-2">{postData.profile.bio}</p>

                    <div className="flex">
                        <a href={`https://twitter.com/${postData.profile.twitter}`} style={{background: 'none'}}>
                            <AiOutlineTwitter className="text-2xl text-green-400"  /></a>
                        <a href={`https://github.com/${postData.profile.github}`} style={{background: 'none'}}>
                            <AiOutlineGithub className="text-2xl text-green-400" /></a>
                    </div>
                </div>
            </div>
            <Markup markup={postData.markup} />
        </div>
    )
}