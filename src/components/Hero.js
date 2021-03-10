import postData from '../data/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json';
//icons
import {BsBookmark} from 'react-icons/bs';
import {FaHeart, FaLightbulb} from 'react-icons/fa';
import {GiSailboat, GiCash} from 'react-icons/gi';

export default function Hero() {
    
    const genDate = () => {
        const publishedDate = new Date(postData.publishedAt * 1000)
        let year = publishedDate.getFullYear();
        //parse month
        let month = publishedDate.getMonth();
        let monthOptions = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November' ,'December']
        month = monthOptions[month];
        //parse date
        let date = publishedDate.getDate();
        console.log(date[date.toString().length])
        switch (date) {
            case 1: case 21: case 31 :
                date = `${date}st`;
                break;
            case 2: case 22: 
                date = `${date}nd`;
                break;
            case 3: case 23:
                date = `${date}rd`;
                break;
            default:
                date = `${date}th`;
                break;
        }
        return `${month} ${date} ${year}`
    }

    return (
        <div className="w-full mb-8 pt-40">
            <h1 className="mb-4 text-3xl md:text-4xl text-left md:text-center font-bold">{postData.title}</h1>
            <div className="flex justify-between items-center">
                <p>{genDate()}<BsBookmark className="inline" /></p>
                <div className="mb-8 flex items-center text-3xl">
                    <p className="mr-2">{postData.reactions.total}</p>
                    <FaHeart className="hover:text-red-600" style={{transition: '1s cubic-bezier(0.075, 0.80, 0.165, 1)'}} />
                    <FaLightbulb className="hover:text-yellow-400" style={{transition: '1s cubic-bezier(0.075, 0.80, 0.165, 1)'}} />
                    <GiSailboat className="hover:text-yellow-800" style={{transition: '1s cubic-bezier(0.075, 0.80, 0.165, 1)'}} />
                    <GiCash className="hover:text-yellow-500" style={{transition: '1s cubic-bezier(0.075, 0.80, 0.165, 1)'}} />
                </div>
            </div>
            <img className="object-cover transform hover:scale-105" style={{transition: '1s cubic-bezier(0.075, 0.80, 0.165, 1)'}}
                src={postData.mainImage} alt="main image" />
        </div>
    )
}