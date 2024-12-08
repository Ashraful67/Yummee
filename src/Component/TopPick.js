import React from "react";
import {topPicks} from "../Data/data"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const TopPick = ()=>{
    return(
        <>
            <h1 className="text-orange-500 font-bold text-2xl text-center py-5">Top Pick</h1>
            <div className="hidden lg:flex max-w[98%] px-2 py-2 m-auto">
                <Splide options={{perPage:4 ,gap:"0.5rem", drag:"free"}}>
                {
                    topPicks.map((product)=>{
                        return(
                            <SplideSlide key={product.id}>
                        <div className="relative rounded-3xl">
                            <div className="absolute w-full h-full rounded-3xl bg-black/50 text-white">
                                <p className="px-3 font-bold"> {product.name}</p>
                                <p className="px-3"> {product.price}</p>
                                <button className="border-dotted border-white text-white mx-2 bottom-4 absolute">Add to cart</button>
                            </div>
                            <img className="h-[200px] w-full rounded-3xl object-cover cursor-pointer hover:scale-100 ease-out duration-300" src={product.image} alt={product.name}/>
                        </div>
                        </SplideSlide>
                    )  
                    })
                }
                </Splide>
            </div>
        </>
    )
}
 export default TopPick