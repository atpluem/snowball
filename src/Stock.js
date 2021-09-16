import react from "react";

import { collections } from './data/collection.json'

function Stock() {
    console.log(collections);

    return (
        <>
            <div className="max-w-6xl mx-auto m-10">
                <div className="flex justify-between px-2">
                    <div className="font-semibold text-2xl">
                        My Collection
                    </div>
                    <div className="bg-brown-grey flex justify-between px-20 py-1 cursor-pointer">
                        <div className="text-white hover:text-olive">Save</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white mt-0.5 ml-" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>

                <div className="m-10 flex">
                    Test Stok page
                    
                </div>
            </div>
        </>
    );
}

export default Stock;