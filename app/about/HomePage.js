
export default function Home(){
    return(
        <div className="px-4 md:px-10 mt-20">
            <div className="">
                <div className="md:flex">
                    <div className="flex-1">
                        <img src="/aboutone.svg" alt="" />
                    </div>
                    <div className="flex flex-col flex-1 md:justify-center">
                        <div className="px-5 md:px-10 pt-10 space-y-10">
                            <h1 className="text-[#050430] text-3xl md:text-4xl font-bold md:leading-loose ">The story behind how our company was founded</h1>
                            <p className="text-sm text-slate-500 leading-loose">Founded on principles of integrity, professionalism, and commitment to excellence, Autumn's & Co has been delivering top-tier accounting and financial services for 5 years. We are passionate about helping individuals and businesses thrive through sound financial management.</p>
                        </div>
                    </div>
                </div>
            

                <div className=" bg-[#e3dfdc] h-auto py-10 md:py-20 md:-mx-10 md:px-10 px-4 -mx-4">
                    <div className="md:flex justify-between">
                        <div className="flex-1">
                            <h1 className="text-2xl md:text-4xl font-semibold">Team Members</h1>
                            <p className="py-10 text-sm text-slate-500">Our team comprises highly skilled Chartered Accountants and financial experts dedicated to delivering exceptional service.  </p>
                        </div>
                        <div className="py-10 flex items-center md:justify-end flex-1">
                            <button className="text-[#e5e5e9] inline-flex items-center px-3 py-2 font-semibold text-center rounded-md bg-[#211f50]">Contact us</button>
                        </div>
                    </div>
                    <div className="md:flex space-x-10">
                        <div className="md:flex bg-white w-fit rounded-2xl p-5 gap-x-5 flex-1">
                            <div className="flex-1">
                                <img className="" src="/teamone.png" alt="" />
                            </div>
                            <div className="text-sm font-light flex flex-col flex-1 justify-around pt-10 md:p-0">
                                <div className="space-y-2">
                                    <h1 className="text-[#050430] text-lg font-bold">John Anderson, CPA</h1>
                                    <p className="text-slate-500 text-md pb-2">Founder & CEO</p>
                                </div>
                                
                                
                                
                                <div className="space-y-2 w-fit">
                                    <p className="bg-[#e2dfdc] rounded-full px-2 py-1">Financial strategy</p>
                                    <p className="bg-[#e2dfdc] rounded-full px-2 py-1">Financial strategy</p>
                                    <p className="bg-[#e2dfdc] rounded-full px-2 py-1">Financial strategy</p>
                                </div>
                            </div>
                        </div>


                        <div className="md:flex bg-white w-fit rounded-2xl p-5 gap-x-5 flex-1">
                            <div className="flex-1">
                                <img className="" src="/teamone.png" alt="" />
                            </div>
                            <div className="text-sm font-light flex flex-col flex-1 justify-around pt-10 md:p-0">
                                <div className="space-y-2">
                                    <h1 className="text-[#050430] text-lg font-bold">John Anderson, CPA</h1>
                                    <p className="text-slate-500 text-md pb-2">Founder & CEO</p>
                                </div>
                                
                                
                                
                                <div className="space-y-2 w-fit">
                                    <p className="bg-[#e2dfdc] rounded-full px-2 py-1">Financial strategy</p>
                                    <p className="bg-[#e2dfdc] rounded-full px-2 py-1">Financial strategy</p>
                                    <p className="bg-[#e2dfdc] rounded-full px-2 py-1">Financial strategy</p>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>

                <div>
                    <div className="bg-[#9cd6ae] rounded-2xl my-20 mx-4 flex flex-col py-16 space-y-8 items-center text-center">
                        <h1 className="text-xl md:text-3xl font-bold">Ready to transform your finances?</h1>
                        <p className=" text-sm md:text-md text-slate-500">Get in touch with us and utilize our Decades of combined industry experience.</p>
                        <button className="text-[#e5e5e9] inline-flex items-center px-3 py-2 font-semibold text-center rounded-md bg-[#211f50]">Contact Us</button>
                    </div>
                </div>

            {/* <Drop /> */}
            </div>    
        </div>
    )
}