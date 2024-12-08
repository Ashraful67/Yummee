import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import {mealData} from "../Data/data"

const Meal = ()=>{
    const[food,setFood] = useState(mealData)
    const filterCat = (category)=>{
        setFood(
            mealData.filter((item)=>{
                return item.category === category;
            })
        )
    }
    return(
        <>
            <h3 className="text-orange-500 font-bold text-2xl text-center py-5"> Meal </h3>
            <div className="flex flex-col lg:flex-row justify-center">
                <div className="flex justify-center">
                    <button onClick={()=>setFood(mealData)} className=" bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 mx-2">All</button>
                    <button onClick={()=>filterCat('Meat')} className=" bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 mx-2">Meat</button>
                    <button onClick={()=>filterCat('Bread')} className=" bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 mx-2">Bread</button>
                    <button onClick={()=>filterCat('Salad')} className=" bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 mx-2">Salad</button>
                    <button onClick={()=>filterCat('Noodles')} className=" bg-orange-500 text-white border-orange-500 hover:bg-white hover:text-orange-500 hover:border-orange-500 mx-2">Noodles</button>
                </div>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[100%] w-full h-full px-3 py-6 gap-6">
                {
                    food.map((product)=>{
                        return(
                            <div key={product.id} className="border-none hover:scale-105 duration-150">
                                <img className="w-full h-[200px] object-cover rounded-lg" 
                                src={product.image} alt={product.title}/>
                                <div className="flex justify-between py-2 px-4">
                                    <p className="font-bold py-2 -ml-4">{product.title}</p>
                                    <p className="bg-orange-500 h-14 w-14 text-white rounded-full -mt-10 flex justify-center items-center border-8">{product.price}</p> 
                                </div>
                                <div className=" -mt-3 text-orange">
                                    <p className="flex text-orange-500 cursor-pointer">View More <HiArrowRight className="mt-[6px] ml-2"/></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Meal;