

export default function Learn() {
    return (
        <div className="w-10/12 h-max absolute mx-auto p-8 flex justify-center items-center text-gray-100 bg-green-900 z-40" style={{left: '8.333%'}}>
            <div className="flex items-center">
                <div className="flex items-center">
                    <h1 className="text-2xl">Web Development</h1>
                    <div className="w-4 h-0.5 ml-2 bg-green-400" />
                </div>
                <div className="flex flex-col pl-4 border-l-2 border-green-400">
                    <Navlink link={''} text={'Become a Cloud Developer'} />
                    <Navlink link={''} text={'Become a Fullstack Developer'} />
                    <Navlink link={''} text={'Become an Android Developer'} />
                    <Navlink link={''} text={'Design Patterns'} />
                    <Navlink link={''} text={'Feynman Technique'} />
                    <Navlink link={''} text={'In 30 Days'} />
                    <Navlink link={''} text={'In 6 Months'} />
                    <Navlink link={''} text={'Learning to Code'} />
                    <Navlink link={''} text={'Learning to Learn'} />
                    <Navlink link={''} text={'Learning via Games'} />
                    <Navlink link={''} text={'Cybersecurity'} />
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center">
                    <h1 className="text-2xl">Become a Data Scientist</h1>
                    <div className="w-4 h-0.5 ml-2 bg-green-400" />
                </div>
                <div className="flex flex-col pl-4 border-l-2 border-green-400">
                    <Navlink link={''} text={'What is it?'} />
                    <Navlink link={''} text={'Best 50 Sites to Learn It'} />
                    <Navlink link={''} text={'Data Engineering'} />
                    <Navlink link={''} text={'Become an Entry-Level Data Analyst'} />
                    <Navlink link={''} text={'AI vs ML'} />
                    <Navlink link={''} text={'TensorFlow and Deep Learning'} />
                    <Navlink link={''} text={'Deep Learning vs Machine Learning'} />
                    <Navlink link={''} text={'Love'} />
                    <Navlink link={''} text={'ML Essentials'} />
                    <Navlink link={''} text={'PG Program in Artificial Intelligence and Machine Learning'} />
                    <Navlink link={''} text={'Intelligence and Machine Learning'} />
                    <Navlink link={''} text={'Optimize Your CV'} />
                </div>
            </div>
            <div className="flex items-center">
                <div className="flex items-center">
                    <h1 className="text-2xl">Languages</h1>
                    <div className="w-4 h-0.5 ml-2 bg-green-400" />
                </div>
                <div className="flex flex-col pl-4 border-l-2 border-green-400">
                    <Navlink link={''} text={'Blockchain'} />
                    <Navlink link={''} text={'C C# C++'} />
                    <Navlink link={''} text={'Go'} />
                    <Navlink link={''} text={'HTML & CSS'} />
                    <Navlink link={''} text={'Javascript'} />
                    <Navlink link={''} text={'PHP'} />
                    <Navlink link={''} text={'Cryptocurrency'} />
                    <Navlink link={''} text={'Python'} />
                    <Navlink link={''} text={'Ruby on Rails'} />
                    <Navlink link={''} text={'SQL'} />
                    <Navlink link={''} text={'In Partnership with Udacity'} />
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