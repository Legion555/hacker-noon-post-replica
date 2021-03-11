import postData from '../data/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json';
//icons
import {BsBookmark} from 'react-icons/bs';

export default function RelatedPosts() {
    return (
        <div className="w-full my-16">
            {/* Header */}
            <div className="flex mb-8 items-center ">
                <div className="w-full h-1 bg-gray-400" />
                <h1 className="mx-4 text-center text-4xl font-bold">Related</h1>
                <div className="w-full h-1 bg-gray-400" />
            </div>
            {/* Posts */}
            <div className="w-full flex md:justify-center flex-col md:flex-row flex-wrap">
                {/* Ad post */}
                <AdCard text={postData.relatedStories[0].text} image={postData.relatedStories[0].image}
                    companyName={postData.relatedStories[0].companyName} link={postData.relatedStories[0].link} />
                {/* Related posts */}
                {postData.relatedStories.slice(1).map(story =>
                    <RelatedCard key={story.id} title={story.title} reactionsCount={story.reactionsCount} image={story.mainImage}
                        avatar={story.profile.avatar} handle={story.profile.handle} displayName={story.profile.displayName}
                        estimatedTime={story.estimatedTime} publishedAt={story.publishedAt} tag={story.tags[0]} slug={story.slug} />
                )}
            </div>
        </div>
    )
}

const AdCard = ({text, image, companyName, link}) => {
    return (
        <div className="related-card min-w-full md:min-w-0 md:w-5/12 lg:w-4/12 xl:w-3/12 md:mx-2 my-4 xl:my-0 shadow border border-gray-200">
            {/* Title */}
            <div className="h-20 p-2 pt-4 md:text-xl font-bold overflow-hidden">
                <a href={link} target="_blank" rel="noreferrer">{text}</a>
            </div>
            {/* Image + reactionCount */}
            <div className="w-full h-52 flex items-center overflow-hidden relative">
                <a href={link} target="_blank" rel="noreferrer">
                <img src={image} alt="post" 
                    className="w-full object-cover transform hover:scale-105 transition-all duration-500 ease-in-out" />
                </a>
            </div>
            {/* Author info */}
            <div className="flex justify-between p-2">
                <div>
                    <a href={link}>Visit {companyName}</a>
                    <p>{link}</p>
                </div>
                <div className="mr-4 text-right">
                    <button className="p-2 bg-yellow-400 hover:bg-yellow-600 transition-all duration-500 ease-in-out" 
                        style={{boxShadow: 'rgb(102 97 5) 0px 0.2em, rgb(102 97 5) 0px -0.2em, rgb(102 97 5) 0.2em 0px, rgb(102 97 5) -0.2em 0px'}}>promoted</button>
                </div>
            </div>
        </div>
    )
}

const RelatedCard = ({title, reactionsCount, image, avatar, handle, displayName, estimatedTime, publishedAt, tag, slug}) => {

    const parseDate = () => {
        const publishedDate = new Date(publishedAt * 1000)
        let year = publishedDate.getFullYear();
        //parse month
        let month = publishedDate.getMonth();
        //parse date
        let date = publishedDate.getDate();
        return `${month+1}/${date}/${year}`
    }

    return (
        <div className="related-card min-w-full md:min-w-0 md:w-5/12 lg:w-4/12 xl:w-3/12 md:mx-2 my-4 xl:my-0 shadow relative border border-gray-200">
            <BsBookmark className="icon-bookmark hidden absolute top-2 right-2 text-2xl text-gray-600" />
            {/* Title */}
            <div className="h-20 p-2 pt-4 md:text-xl font-bold overflow-hidden">
                <a href={`https://hackernoon.com/${slug}`} target="_blank" rel="noreferrer">{title}</a>
            </div>
            {/* Image + reactionCount */}
            <p className="text-center text-gray-800 bg-gray-200">{reactionsCount} reactions</p>
            <div className="w-full overflow-hidden relative">
                <a href={`https://hackernoon.com/${slug}`} target="_blank" rel="noreferrer">
                <img src={image} alt="post" 
                    className="w-full h-52 object-cover transform hover:scale-105 transition-all duration-500 ease-in-out" />
                </a>
                <a href={`https://hackernoon.com/tagged/${tag}`} target="_blank" rel="noreferrer">
                <button className="p-2 absolute bottom-4 right-8 bg-gray-100 hover:bg-green-400 transition-all duration-500 ease-in-out" 
                    style={{boxShadow: 'rgb(194 202 214) 0px 0.2em, rgb(194 202 214) 0px -0.2em, rgb(194 202 214) 0.2em 0px, rgb(194 202 214) -0.2em 0px'}}>#{tag}</button>
                </a>
            </div>
            {/* Author info */}
            <div className="flex justify-between p-2">
                <div className="flex">
                    <div className="mr-4">
                        <a href={`https://hackernoon.com/u/${handle}`}>
                            <img src={avatar} alt="author avatar" width={50}
                                style={{boxShadow: 'rgb(194 202 214) 0px 0.2em, rgb(194 202 214) 0px -0.2em, rgb(194 202 214) 0.2em 0px, rgb(194 202 214) -0.2em 0px'}} /></a>
                    </div>
                    <div>
                        <a href={`https://hackernoon.com/u/${handle}`}>@{handle}</a>
                        <p>{displayName}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p>{estimatedTime}min</p>
                    <p>{parseDate()}</p>
                </div>
            </div>
        </div>
    )
}