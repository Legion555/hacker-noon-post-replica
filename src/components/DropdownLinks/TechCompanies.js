import Container from './Container';



export default function TechCompanies({setMenu}) {
    return (
        <Container setMenu={setMenu}>
            <div className="flex flex-col md:flex-row mb-8 md:mb-0">
                <div className="flex items-center">
                    <h1 className="text-2xl">A to F</h1>
                    <div className="w-4 h-0.5 ml-2 bg-green-400" />
                </div>
                <div className="flex flex-col pl-4 border-l-2 border-green-400">
                    <Navlink link={''} text={'Adobe'} />
                    <Navlink link={''} text={'Amazon'} />
                    <Navlink link={''} text={'Apache'} />
                    <Navlink link={''} text={'Apple'} />
                    <Navlink link={''} text={'Atlassian'} />
                    <Navlink link={''} text={'ATT'} />
                    <Navlink link={''} text={'BoA'} />
                    <Navlink link={''} text={'Coinbase'} />
                    <Navlink link={''} text={'Comcast'} />
                    <Navlink link={''} text={'Ebay'} />
                    <Navlink link={''} text={'Facebook'} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row mb-8 md:mb-0">
                <div className="flex items-center">
                    <h1 className="text-2xl">G to N</h1>
                    <div className="w-4 h-0.5 ml-2 bg-green-400" />
                </div>
                <div className="flex flex-col pl-4 border-l-2 border-green-400">
                    <Navlink link={''} text={'Google'} />
                    <Navlink link={''} text={'HP'} />
                    <Navlink link={''} text={'IBM'} />
                    <Navlink link={''} text={'Intel'} />
                    <Navlink link={''} text={'Intuit'} />
                    <Navlink link={''} text={'McDonalds'} />
                    <Navlink link={''} text={'Microsoft'} />
                    <Navlink link={''} text={'Netflix'} />
                    <Navlink link={''} text={'Nvidia'} />
                </div>
            </div>
            <div className="flex flex-col md:flex-row mb-8 md:mb-0">
                <div className="flex items-center">
                    <h1 className="text-2xl">O to Z</h1>
                    <div className="w-4 h-0.5 ml-2 bg-green-400" />
                </div>
                <div className="flex flex-col pl-4 border-l-2 border-green-400">
                    <Navlink link={''} text={'3m'} />
                    <Navlink link={''} text={'Oracle'} />
                    <Navlink link={''} text={'Pfizer'} />
                    <Navlink link={''} text={'Samsung'} />
                    <Navlink link={''} text={'Tesla'} />
                    <Navlink link={''} text={'Texas Instruments'} />
                    <Navlink link={''} text={'Tencent'} />
                    <Navlink link={''} text={'Twitter'} />
                    <Navlink link={''} text={'Uber'} />
                    <Navlink link={''} text={'See All 913 Tech Companies'} />
                </div>
            </div>
        </Container>
    )
}

const Navlink = ({link, text}) => {
    return (
        <a href='#' target="_blank" className="p-1" style={{background: 'none'}}>{text}</a>
    )
}