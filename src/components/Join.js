import {FaGlasses} from 'react-icons/fa';



export default function Join() {
    return (
        <div className="w-full mb-16 flex flex-col justify-center items-center">
            <button className="w-max p-4 text-2xl text-green-400 bg-gray-800 border-4 border-green-400 transform hover:scale-105">Join Hacker Noon <FaGlasses className="inline" /></button>
            <p>Create your free account to unlock your custome reading experience.</p>
        </div>
    )
}