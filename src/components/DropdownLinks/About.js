

export default function About() {
    return (
        <div className="w-10/12 h-max absolute mx-auto p-8 flex justify-center items-center text-gray-100 bg-green-900 z-40" style={{left: '8.333%'}}>
            <div className="flex items-center">
                <div className="flex items-center">
                    <h1 className="text-2xl">About</h1>
                    <div className="w-4 h-0.5 ml-2 bg-green-400" />
                </div>
                <div className="flex flex-col pl-4 border-l-2 border-green-400">
                    <Navlink link={''} text={'A Story'} />
                    <Navlink link={''} text={'Careers'} />
                    <Navlink link={''} text={'CEO'} />
                    <Navlink link={''} text={'COO'} />
                    <Navlink link={''} text={'CPO'} />
                    <Navlink link={''} text={'Equity Crowdfunding'} />
                    <Navlink link={''} text={'In Six Words or Less'} />
                    <Navlink link={''} text={'LinkedIn'} />
                    <Navlink link={''} text={'On the Gram'} />
                    <Navlink link={''} text={'Our Podcast'} />
                    <Navlink link={''} text={'Tech GIFS'} />
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center">
                    <h1 className="text-2xl">Write</h1>
                    <div className="w-4 h-0.5 ml-2 bg-green-400" />
                </div>
                <div className="flex flex-col pl-4 border-l-2 border-green-400">
                    <Navlink link={''} text={'Add Coil Meta Tag'} />
                    <Navlink link={''} text={'Better Headlines'} />
                    <Navlink link={''} text={'Create Your Own Call To Action'} />
                    <Navlink link={''} text={'Help Section'} />
                    <Navlink link={''} text={'Coding'} />
                    <Navlink link={''} text={'Get Published'} />
                    <Navlink link={''} text={'Submit a Story Checklist'} />
                    <Navlink link={''} text={'Troubleshooting Account Creation'} />
                    <Navlink link={''} text={'Writing Guide'} />
                    <Navlink link={''} text={'Write Now'} />
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center">
                    <h1 className="text-2xl">Noonies 2020</h1>
                    <div className="w-4 h-0.5 ml-2 bg-green-400" />
                </div>
                <div className="flex flex-col pl-4 border-l-2 border-green-400">
                    <Navlink link={''} text={'Back to the Internet'} />
                    <Navlink link={''} text={'Decentralization'} />
                    <Navlink link={''} text={'FAQ'} />
                    <Navlink link={''} text={'Future Heroes'} />
                    <Navlink link={''} text={'Interviews'} />
                    <Navlink link={''} text={'Podcast'} />
                    <Navlink link={''} text={'Software'} />
                    <Navlink link={''} text={'Stories'} />
                    <Navlink link={''} text={'Technology'} />
                    <Navlink link={''} text={'Video'} />
                    <Navlink link={''} text={'2019 Inaugerial Winners'} />
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