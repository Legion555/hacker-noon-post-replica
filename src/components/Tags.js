import postData from '../data/step-by-step-guide-to-create-3-different-types-of-loading-screens-in-react-lu2633nd.json';



export default function Tags() {
    return (
        <div className="w-full md:w-3/5 mb-16 mx-auto">
            <div className="flex mb-8 items-center ">
                <div className="w-full h-0.5 bg-gray-400" />
                <h1 className="mx-4 text-center text-4xl font-bold">Tags</h1>
                <div className="w-full h-0.5 bg-gray-400" />
            </div>
            <div className="p-2 flex justify-center flex-wrap">
                {postData.tags.map(tag => 
                    <Tag key={tag} value={tag} />    
                )}
            </div>
        </div>
    )
}

const Tag = ({value}) => {
    return (
        <div className="m-2">
            <a href={`https://hackernoon.com/tagged/${value}`}>
            <button className="p-2 text-sm md:text-base text-gray-800 bg-gray-100 hover:bg-green-400 transition-all duration-500 ease-in-out"
                    style={{boxShadow: 'rgb(194 202 214) 0px 0.2em, rgb(194 202 214) 0px -0.2em, rgb(194 202 214) 0.2em 0px, rgb(194 202 214) -0.2em 0px'}}>#{value}</button>
            </a>
        </div>
    )
}