import react from "react";

function Gadgets() {
    return (
        <>
            <div className="max-w-6xl mx-auto m-10">
                <div className="flex justify-between px-2">
                    <div className="font-semibold text-2xl">
                        Gadget
                    </div>
                    <div className="bg-brown-grey flex justify-between px-20 py-1 cursor-pointer">
                        <div className="text-white hover:text-olive">Filter</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mt-0.5 ml-" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div className="m-10 flex">
                    <div class="h-48 w-48 mx-4 rounded-md transition duration-500 ease-in-out bg-olive transform hover:-translate-y-1 hover:scale-110">
                        <div className="mx-10 mt-16 text-4xl font-bold text-brown-grey ">
                            SWOT
                        </div>
                    </div>

                    <div class="h-48 w-48 mx-4 rounded-md transition duration-500 ease-in-out bg-olive transform hover:-translate-y-1 hover:scale-110">
                        <div className="mx-10 mt-16 text-4xl font-bold text-brown-grey ">
                            Bussiness Model Canvas
                        </div>
                    </div>

                    <div class="h-48 w-48 mx-4 rounded-md transition duration-500 ease-in-out bg-olive transform hover:-translate-y-1 hover:scale-110">
                        <div className="mx-10 mt-16 text-4xl font-bold text-brown-grey ">
                            PESTEL
                        </div>
                    </div>

                    <div class="h-48 w-48 mx-4 rounded-md transition duration-500 ease-in-out bg-olive transform hover:-translate-y-1 hover:scale-110">
                        <div className="mx-10 mt-16 text-4xl font-bold text-brown-grey ">
                            5 FORCES
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gadgets;