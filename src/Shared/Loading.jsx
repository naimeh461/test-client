import boy from "../assets/other/3298301.png"
import girl from "../assets/other/3298300.png"

const Loading = () => {
    return (
        <div className="flex justify-center h-screen animate-pulse">
            <img src={girl} alt="" className="h-28 my-auto transform-translate-x-6 duration-700" />
            <img src={boy} alt="" className="h-28 my-auto" />
        </div>
    );
};

export default Loading;