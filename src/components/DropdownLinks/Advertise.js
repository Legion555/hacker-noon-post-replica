

export default function Advertise() {
    return (
        <div className="w-10/12 h-max absolute mx-auto p-8 flex justify-center items-center text-gray-100 bg-green-900 z-40" style={{left: '8.333%'}}>
            <div className="flex items-center">
                <div className="flex items-center">
                    <h1 className="text-2xl">Post</h1>
                    <div className="w-4 h-0.5 ml-2 bg-green-400" />
                </div>
                <div className="flex flex-col pl-4 border-l-2 border-green-400">
                    <Navlink link={''} text={'Corporate Blog Posts'} />
                    <Navlink link={''} text={'Tech News Release'} />
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center">
                    <h1 className="text-2xl">Place an Ad</h1>
                    <div className="w-4 h-0.5 ml-2 bg-green-400" />
                </div>
                <div className="flex flex-col pl-4 border-l-2 border-green-400">
                    <Navlink link={''} text={'Targeted Niche Marketing'} />
                    <Navlink link={''} text={'Sitewide Takeover'} />
                </div>
            </div>
        </div>
    )
}

const Navlink = ({link, text}) => {
    return (
        <a href='#' target="_blank" className="p-1" style={{background: 'none'}}>{text}</a>
    )
}