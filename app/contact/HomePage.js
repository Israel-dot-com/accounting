import Drop from "../components/Drop";
export default function Home(){
    return(
        <div>
            <div className="px-4 md:px-10 mt-20 ">
                <div className="md:flex gap-x-10">
                    <div className="bg-[#9cd6ae] md:w-2/5 rounded-3xl  pb-10 text-[#050430] p-10 ">
                        <div className="">
                            <h1 className="text-[#050430] text-4xl font-bold">Contact us</h1>
                            <p>Fill out the form below, and one of our experts will get back to you promptly.</p>
                        </div>

                        <div>
                            <h5 className="text-lg font-semibold">Message Us</h5>
                            <div className="flex">
                                
                                <p>israeltheory@gmail.com</p>
                            </div>
                            
                        </div>


                        <div>
                            <h5 className="text-lg font-semibold">Call us</h5>
                            <p>+880 1704013333</p>
                        </div>

                        <div>
                            <h5 className="text-lg font-semibold">Address</h5>
                            <p>+43 wuye, Aubja</p>
                        </div>
                    </div>

                    <div className="bg-[#e2dfdc] md:w-3/5 rounded-3xl p-10 mt-10 md:mt-0">
                        <form className="space-y-5">
                            <div className="flex">
                                <div className="md:flex md:space-x-5">
                                    <div className="flex text-[#050430] font-serif font-semibold">
                                        <div className="space-y-2"><label>Full Name</label><input className="w-full bg-[#f3f0ee] rounded-sm" /></div>
                                    
                                    
                                    
                                    </div>
                                    <div className="flex text-[#050430] font-serif font-semibold">
                                        <div className="space-y-2"><label>Email Address</label>
                                            <input className="w-full bg-[#f3f0ee] rounded-sm" />
                                        </div>
                                    
                                    </div>      
                                </div>
                            </div>
                            
                            <div className="">
                                <div className="space-y-2">
                                    <div className="flex text-[#050430] font-serif font-semibold">
                                        <label>Message</label>
                                        
                                    </div>
                                    <div className="">
                                        <textarea className="bg-[#f3f0ee] h-32 w-full rounded-md" />
                                    </div>
                                    
                                </div>
                                
                            
                                <div>
                                    <button className="justify-center md:w-full inline-flex items-center md:text-lg px-3 py-1 font-medium rounded-md bg-[#9cd6ae] text-[#050430]">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-10 pb-10 mt-20">
                    <h1 className="text-[#050430] text-3xl md:text-4xl font-bold leading-snug text-center">Frequently Asked Questions</h1>
                    <p className="text-sm text-slate-500 text-center">Euismod augue phasellus dignissim lobortis tellus et arcu molestie convallis. Imperdiet sit sed mi iaculis et ac mattis proin.</p>
                    <Drop />
                </div>
            </div>
        </div>
    )
}

