import React from "react";
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";

const Footer=()=>{
    return (
        <div className="max-w-[1520px] m-auto px-3 py-2 bg-[#24262b]">
            <div className="px-4 py-16 grid lg:grid-cols-3 gap-8 text-gray-300">
                <div>
                    <h1 className="w-full text-3xl font-bold text-orange-500">YumMee</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="flex justify-between md:w-[75%] my-6">
                        <FaFacebookSquare className="bg-orange-500" size={30}/>
                        <FaInstagram className="bg-orange-500" size={30}/>
                        <FaTwitterSquare className="bg-orange-500" size={30}/>
                        <FaGithubSquare className="bg-orange-500" size={30}/>
                        <FaDribbbleSquare className="bg-orange-500" size={30}/>
                    </div>
                </div>
                <div className="lg:col-span-2 flex justify-between mt-6">
                    
                    <div>
                        <h6 className="text-orange-500 font-medium">Location</h6>
                        <ul>
                            <li className="p-2 text-sm">Bangladesh</li>
                            <li className="p-2 text-sm">USA</li>
                            <li className="p-2 text-sm">UK</li>
                            <li className="p-2 text-sm">Canada</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-orange-500 font-medium">Support</h6>
                        <ul>
                            <li className="p-2 text-sm">Pricing</li>
                            <li className="p-2 text-sm">Documentation</li>
                            <li className="p-2 text-sm">Guide</li>
                            <li className="p-2 text-sm">Api Status</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-orange-500 font-medium">Company</h6>
                        <ul>
                            <li className="p-2 text-sm">About</li>
                            <li className="p-2 text-sm">Career</li>
                            <li className="p-2 text-sm">FAQS</li>
                            <li className="p-2 text-sm">User Policy</li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-orange-500 font-medium">Legal</h6>
                        <ul>
                            <li className="p-2 text-sm">Claim</li>
                            <li className="p-2 text-sm">Plicy</li>
                            <li className="p-2 text-sm">Terms</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;