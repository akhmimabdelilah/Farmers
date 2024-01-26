import { useNavigate } from "react-router-dom";

function Logo() {
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate("/")} className="flex-box cursor-pointer">
            <img className="w-10 h-10 mx-1 rounded-md" src="farmlink.jpeg" alt="logo" />
            <div className="">
                <span className="text-white text-3xl font-bold font-Gugi text-green-300">
                Farm<span className="font-Gugi text-green-700">Link</span>
                </span>
                <span className="text-white text-3xl font-light font-Iceland text-thirdLogo">
                    {/* Craft */}
                </span>
            </div>
        </div>
    );
}

export default Logo;