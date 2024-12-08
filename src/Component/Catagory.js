import React from "react";
import {partners} from "../Data/data"

const Catagory = ()=>{
    return(
        <>
            <div className="max-w[100%] m-auto px-3 py-4">
                <h1 className="text-orange-500 text-center font-bold py-6 text-2xl"> Catarory</h1>
                <div className="grid md:grid-cols-6 sm:grid-cols-4 lg:grid-cols-6 gap-5 py-5 px-2">
                    {
                        partners.map((partner)=>{
                            return (
                                <div key={partner.id} className="p-4 flex justify-center items-center hover:scale-105 duration-300">
                                    <img className="w-40 h-10 rounded-xl cursor-pointer shadow-xl " src={partner.image} alt={partner.name}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Catagory;