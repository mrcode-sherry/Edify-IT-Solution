import { Facebook, Twitter, Linkedin, Github, Instagram, AtSign } from "lucide-react";

export default function Footer() {
  return (
    <div className="px-6 md:px-20 border-t-[3px] border-white border-opacity-30 flex justify-center items-center overflow-hidden">
      <footer className="footer flex justify-between md:flex-row flex-col w-full bg-black text-white py-16">
        {/* Left Section - Logo & Text */}
        <aside className="flex flex-col gap-4 md:max-w-[370px]">
          <div className="flex items-center mb-2">
            {/* Simple img tag instead of next/image */}
            <img src="/EdifyLogo.png" alt="" width="140" height="140" />
          </div>
          <p className="text-sm text-[#B2B2B2] md:text-[17.5px] ">
            Your trusted partner in AI solutions, creating smarter systems for
            smarter businesses.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 mt-6">
            <div className="icon p-2 h-[38px] rounded-md cursor-pointer">
            <Linkedin className="w-5 h-5 text-white" />
            </div>
            <div className="icon p-2 h-[38px] rounded-md cursor-pointer">
              <Twitter className="w-5 h-5 text-white" />
            </div>
            <div className="icon p-2 h-[38px] rounded-md cursor-pointer">
            <Instagram className="w-5 h-5 text-white" />
            </div>
            <div className="icon p-2 h-[38px] rounded-md cursor-pointer">
              <Facebook className="w-5 h-5 text-white" />
            </div>
            <div className="icon p-2 h-[38px] rounded-md cursor-pointer">
            <AtSign className="w-5 h-5 text-white"/>
            </div>
          </div>
        </aside>

        {/* Right Section - Nav Links */}
        <div className="flex gap-28 ">
          <nav>
            <h6 className="text-lg font-semibold mb-3">Sections</h6>
            <div className="space-y-3 text-[#B2B2B2] text-[16.5px]">
            <a className="block duration-150 cursor-pointer hover:text-white">Process</a>
            <a className="block duration-150 cursor-pointer hover:text-white">Services</a>
            <a className="block duration-150 cursor-pointer hover:text-white">Benefits</a>
            <a className="block duration-150 cursor-pointer hover:text-white">Plans</a>
            <a className="block duration-150 cursor-pointer hover:text-white">Contact</a>
            </div>
          </nav>

          <nav>
            <h6 className="text-lg font-semibold mb-3">Pages</h6>
            <div className="space-y-3 text-[#B2B2B2] text-[16.5px]">
            <a className="block duration-150 cursor-pointer hover:text-white">Home</a>
            <a className="block duration-150 cursor-pointer hover:text-white">Coming Soon</a>
            <a className="block duration-150 cursor-pointer hover:text-white">404</a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
