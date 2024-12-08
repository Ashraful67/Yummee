import React, { useState,useEffect,useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Featured = () => {
    const sliders = [
        {url:'https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?cs=srgb&dl=cooked-food-1860208.jpg&fm=jpg'},
        {url:'https://wallpapercave.com/wp/wp3105392.jpg'},
        {url:'https://www.tasteofhome.com/wp-content/uploads/2021/01/tasty-butter-chicken-curry-dish-from-indian-cuisine-1277362334.jpg?w=1200'},
        {url:'https://img.jakpost.net/c/2016/09/29/2016_09_29_12990_1475116504._large.jpg'},
    ]
    const [slideImage,setSlideImage] = useState(0)

    const leftSlider = ()=>{
        const isfirstSlide = slideImage === 0;
        const newIndex = isfirstSlide ? sliders.length - 1 : slideImage - 1;
        setSlideImage(newIndex)
    }

    const rightSlider = useCallback(() => {
        setSlideImage((prevSlideImage) => {
            const isLastSlide = prevSlideImage === sliders.length - 1;
            return isLastSlide ? 0 : prevSlideImage + 1;
        });
    }, [sliders.length])

    const newSlider = (slid)=>{
        setSlideImage(slid)
    }
    useEffect(() => {
        const timer = setInterval(() => {
            rightSlider();
        }, 4000);

        return () => clearInterval(timer); 
    }, [rightSlider]);
    return(
        <div className="max-w-[100%] w-full h-[500px] px-4 py-4 relative group">
            <div className="w-full h-full bg-center bg-cover duration-[2000ms] rounded-3xl"
                 style={{backgroundImage: `url(${sliders[slideImage].url})`,transition: "background-image 2s ease-in-out",}}>
            </div>
            <div className="hidden group-hover:block bg-orange-500 text-white absolute top-[50%] right-6 rounded-full text-2xl translate-x-0 -translate-y[-50%]">
                <BsChevronCompactRight onClick={rightSlider}/>
            </div>
            <div className="hidden group-hover:block bg-orange-500 text-white absolute top-[50%] left-6 rounded-full text-2xl translate-x-0 -translate-y[-50%]">
                <BsChevronCompactLeft onClick={leftSlider}/>
            </div>
            <div className=" py-4 flex justify-center">
                {
                sliders.map((sliderItem,sliderIndex) => (
                    <div key={sliderIndex} className="cursor-pointer text-2xl" onClick={()=>newSlider(sliderIndex)}> 
                        <RxDotFilled />
                    </div>
                ))
                
                }
            </div>
        </div>
    )
}
export default Featured;