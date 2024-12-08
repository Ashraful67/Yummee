import React from "react";

const Deleveries = () =>{
    return(
        <div className="w-full px-4 py-16 bg-white">
            <h3 className="text-3xl text-orange-500 font-bold text-center ">Quick Delevery</h3>
            <div className="w-[90%] mx-auto mt-5 grid md:grid-cols-2">
                <img className="w-[550px] mx-auto my-4" src='https://th.bing.com/th/id/OIP.zM5vR3nTUmFMjeCSX9dJawAAAA?rs=1&pid=ImgDetMain' alt="an"/>
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold text-3xl md:text-2xl lg:text-xl">Get The App</p>
                    <h1 className="md:text-4xl sm:text-3xl text-5xl py-2 font-bold">Limitless Convenience on Demand</h1>
                    <p className="text-gray-800 text-justify py-3">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>
                    <button className="bg-black w-[150px] h-[50px] text-[#00df9a] my-6">Order Now</button>
                </div>
            </div>
        </div>
    )
}
export default Deleveries;