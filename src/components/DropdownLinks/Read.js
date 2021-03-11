

export default function Read() {
    return (
        <div className="w-10/12 h-max absolute mx-auto p-8 flex justify-center items-center text-gray-100 bg-green-900 z-40" style={{left: '8.333%'}}>
            <div className="flex items-center">
                <div className="flex items-center">
                    <h1 className="text-2xl">Tech</h1>
                    <div className="w-4 h-0.5 ml-2 bg-green-400" />
                </div>
                <div className="flex flex-col pl-4 border-l-2 border-green-400">
                    <Navlink link={''} text={'AI'} />
                    <Navlink link={''} text={'Automation'} />
                    <Navlink link={''} text={'Business'} />
                    <Navlink link={''} text={'Data'} />
                    <Navlink link={''} text={'Data Science'} />
                    <Navlink link={''} text={'Deep Fakes'} />
                    <Navlink link={''} text={'Economics'} />
                    <Navlink link={''} text={'Entrepreneurship'} />
                    <Navlink link={''} text={'Future'} />
                    <Navlink link={''} text={'Founders'} />
                    <Navlink link={''} text={'Funding'} />
                    <Navlink link={''} text={'Iot'} />
                    <Navlink link={''} text={'Management'} />
                    <Navlink link={''} text={'Marketing'} />
                    <Navlink link={''} text={'Meaning of Life'} />
                    <Navlink link={''} text={'Robotics'} />
                    <Navlink link={''} text={'Self-Driving Cars'} />
                    <Navlink link={''} text={'Startups'} />
                    <Navlink link={''} text={'Venture Capital'} />
                    <Navlink link={''} text={'Virtual Reality'} />
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center">
                    <h1 className="text-2xl">Software</h1>
                    <div className="w-4 h-0.5 ml-2 bg-green-400" />
                </div>
                <div className="flex flex-col pl-4 border-l-2 border-green-400">
                    <Navlink link={''} text={'Agile'} />
                    <Navlink link={''} text={'APIs'} />
                    <Navlink link={''} text={'Architecture'} />
                    <Navlink link={''} text={'C'} />
                    <Navlink link={''} text={'Coding'} />
                    <Navlink link={''} text={'Engineering'} />
                    <Navlink link={''} text={'Java'} />
                    <Navlink link={''} text={'Javascript'} />
                    <Navlink link={''} text={'Killers'} />
                    <Navlink link={''} text={'MVP'} />
                    <Navlink link={''} text={'NodeJS'} />
                    <Navlink link={''} text={'Open Source'} />
                    <Navlink link={''} text={'PHP'} />
                    <Navlink link={''} text={'Programming'} />
                    <Navlink link={''} text={'Python'} />
                    <Navlink link={''} text={'React'} />
                    <Navlink link={''} text={'Ruby'} />
                    <Navlink link={''} text={'SQL'} />
                    <Navlink link={''} text={'Swift'} />
                    <Navlink link={''} text={'Vim'} />
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center">
                    <h1 className="text-2xl">Decentralization</h1>
                    <div className="w-4 h-0.5 ml-2 bg-green-400" />
                </div>
                <div className="flex flex-col pl-4 border-l-2 border-green-400">
                    <Navlink link={''} text={'Altcoins'} />
                    <Navlink link={''} text={'Bitcoin'} />
                    <Navlink link={''} text={'Bitcoin Cash'} />
                    <Navlink link={''} text={'Bitcoin Spotlight'} />
                    <Navlink link={''} text={'Blockchain'} />
                    <Navlink link={''} text={'Coil'} />
                    <Navlink link={''} text={'Cryptocurrency'} />
                    <Navlink link={''} text={'Cardano'} />
                    <Navlink link={''} text={'DApps'} />
                    <Navlink link={''} text={'Does it work?'} />
                    <Navlink link={''} text={'DWeb'} />
                    <Navlink link={''} text={'EOS'} />
                    <Navlink link={''} text={'Ethereum'} />
                    <Navlink link={''} text={'Finance'} />
                    <Navlink link={''} text={'Libra'} />
                    <Navlink link={''} text={'Mind Blown'} />
                    <Navlink link={''} text={'Ripple'} />
                    <Navlink link={''} text={'Space'} />
                    <Navlink link={''} text={'Tether'} />
                    <Navlink link={''} text={'Twitter'} />
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