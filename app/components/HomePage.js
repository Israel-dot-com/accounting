
import Link from 'next/link';
export default function Home() {
  return (
    <div className=" px-4 md:px-10 mt-20">
        <div className="hero md:flex">
          <div className="flex-1 left space-y-10 pb-10">
              <div className="flex bg-purple-200 w-max rounded-full p-2 text-sm font-bold">Every client growing 5X
                    <img src="/trend.svg" />
              </div>
              <h1 className="text-[#050430] text-4xl md:text-5xl font-extrabold leading-snug"> Your Trusted Partner in Financial Success</h1>
              <h5 className="text-sm text-slate-500 leading-loose">Expert Financial Guidance You Can Trust - Providing Comprehensive Accounting, Taxation, and Advisory Services to Help Individuals and Businesses Thrive in a Complex Financial World</h5>
              <Link href="/contact" className="text-[#050430] inline-flex items-center px-3 py-2 font-semibold text-center rounded-md bg-[#9cd6ae]">Contact Us</Link>
          </div>
          <div className="flex-1">
              {/* <div className="bg-green-400 h-60 w-60 rounded-full">

              </div> */}
              <div className="flex justify-center mb-5">
                <img className="pb-10 md:pb-1 scale-100 md:scale-90 lg:scale-90 z-1" src="/homeone.webp" />
              </div>
              

          </div>

        </div>
        <div className="md:flex ">
          <div className="flex-1">
            <img className="pb-10" src="/herotwo.png" />
          </div>
          <div className="flex-1 space-y-5 pb-10">
            <h1 className="text-2xl md:text-4xl font-semibold">Our legacy of trust and Excellence</h1>
            <p className="text-sm text-slate-500 leading-loose">At Autumn's & Co, we understand that navigating the financial landscape can be challenging. That’s why we’re here to simplify it for you, offering personalized solutions to meet your unique needs. Whether you’re an individual, small business, or large corporation, we’re dedicated to ensuring your financial success.</p>

            <Link href="/about" className="text-[#050430] inline-flex items-center px-3 py-2 font-semibold text-center rounded-md bg-[#9cd6ae]">About Us</Link>
          </div>
        </div>


        <div className="bg-[#e3dfdc] h-auto py-10 md:py-20 md:-mx-10 md:px-10 px-4 -mx-4">
          <div className="md:flex justify-between">
            <div className="flex-1">
              <h1 className="text-2xl md:text-4xl font-semibold">Customised accounting services</h1>
              <p className="py-10 text-sm text-slate-500">Here are the key services we offer. If you need something not offered, contact us and talk to an expert
              </p>
            </div>
            <div className="py-10 flex items-center md:justify-end flex-1">
              <button className="text-[#e5e5e9] inline-flex items-center px-3 py-2 font-semibold text-center rounded-md bg-[#211f50]">All services</button>
            </div>
          </div>

          <div className="md:flex md:space-x-8 justify-center space-y-8 md:space-y-0">

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <a className="" href="#">
                  <img className="mx-auto mt-5 rounded-t-lg" src="/herothree.png" alt="" />
              </a>
              <div className="p-5">
                <a href="/services">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Expert assistance in corporate tax planning.</h5>
                </a>
                <a href="/services" className="text-[#050430] inline-flex items-center px-3 py-2 font-semibold text-center rounded-md bg-[#9cd6ae]">
                  Book a consultation
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <a className="" href="#">
                  <img className="mx-auto mt-5 rounded-t-lg" src="/herothree.png" alt="" />
              </a>
              <div className="p-5">
                <a href="/services">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Tailored business strategy & investment advice</h5>
                </a>
                <a href="services" className="text-[#050430] inline-flex items-center px-3 py-2 font-semibold text-center rounded-md bg-[#9cd6ae]">
                  Book a consultation
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
              <a className="" href="#">
                  <img className="mx-auto mt-5 rounded-t-lg" src="/herothree.png" alt="" />
              </a>
              <div className="p-5">
                <a href="/services">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Comprehensive audits to ensure compliance</h5>
                </a>
                <a href="/services" className="text-[#050430] inline-flex items-center px-3 py-2 font-semibold text-center rounded-md bg-[#9cd6ae]">
                  Book a consultation
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>




        </div>
    </div>
  );
}



