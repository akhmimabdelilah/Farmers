import TypewriterComponent from "typewriter-effect";
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();

    return (
        <div className="bg-green-700 w-full py-2 flex-box">
            <div className="flex-box w-full flex-col md:flex-row my-6">
                <div className="text-center overflow-hidden w-full py-10 flex-box flex-col scroll-smooth">
                    <div className="flex-box w-full overflow-hidden">
                        <div className="flex-box">
                            <div className="px-6 text-center text-white md:px-12 font-Bruno flex-box flex-col">
                                <h1 className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent text-5xl pb-6 font-extrabold sm:text-5xl">


                                    Welcome <br /> in


                                    <h2 className="text-5xl text-green-200 drop-shadow-sm shadow-black">
                                        Farm
                                        <span className="text-green-400">Link</span>

                                    </h2>
                                </h1>
                                <p className="max-w-2xl mb-6  font-light text-primary lg:mb-8 md:text-lg lg:text-xl">
                                    Say goodbye to traditional farmers and buyers connection! Our
                                    AI-powered technology ensures precise and efficient
                                    Marketing  generation. Join the revolution and experience the
                                    future of ML models with FarmLink.
                                </p>
                                <h2 className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-2xl pb-6 font-bold text-transparent lg:text-2xl">
                                    <TypewriterComponent
                                        options={{
                                            strings: [
                                                "#Farmers",
                                                "#Buyers",
                                                "#Marketing",
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h2>

                                <div className="my-8 w-48 flex-box text-center border rounded-md shadow-md hover:shadow-red shadowred">
                                    <a
                                        href="#"
                                        className='text-green-500 bg-green-700'
                                        onClick={() => navigate("/")}
                                    >
                                        <p className="pl-3 p-4">Explore Now</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-box p-4">
                    <div className="flex-box">
                        <div className="mx-3">
                            <img
                                className="logo rounded-md inline-block w-screen p-8 md:p-0"
                                src="bg-farm.jpeg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;