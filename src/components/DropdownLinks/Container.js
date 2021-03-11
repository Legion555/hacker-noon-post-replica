//icons
import { ImCross } from "react-icons/im";



export default function Container(props) {
    return (
        <div className="w-full md:w-9/12 h-screen md:h-auto fixed top-0 left-0 md:left-1/2 md:top-auto overflow-y-auto
            transform md:-translate-x-1/2 py-8 px-8 md:px-16 flex flex-col md:flex-row md:justify-evenly text-gray-100 bg-green-900 z-50"
            onMouseLeave={() => props.setMenu(null)}>
            <ImCross className="text-xl absolute top-4 right-4 text-green-400 md:hidden" onClick={() => props.setMenu(null)} />
            {props.children}
        </div>
    )
}