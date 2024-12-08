import React from "react";

const NewsLetter = ()=>{
    return(
        <div className="max-w-[1520px] m-auto text-white py-3 bg-[#24262b]">
            <div className="mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4 px-4 flex flex-col justify-center">
                    <h1 className="text-2xl font-bold">Need advice on how to improve your flow. </h1>
                    <p className="mt-2 text-gray-300">signup to join our newslatter and stay upto date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input type="email" placeholder="Email"  className="py-3 w-[80%] flex rounded-md text-black pl-3"/>
                        <button className="bg-orange-500 text-white ml-4 my-6 mx-6 border-none rounded-md font-medium w-[200px] py-3">Notify me</button>
                    </div>
                    <p className="px-4 text-center lg:text-left"> We are concren about the security of your data, Read {""}<span className="text-orange-500">privacy policy</span></p>
                    
                </div>
                <hr className="w-[400px] my-6 mx-4 bg-orange-500"/>
            </div>
        </div>
    )
}
export default NewsLetter;