
import { Logo } from "@/components/ui/Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed h-[65px] border-b-gray-100 z-[100] bg-[rgba(255,255,255,0.95)] border-b border-solid top-0 inset-x-0">
      <div className="max-w-screen-xl h-full flex items-center justify-between mx-auto my-0 px-20 py-0 max-md:px-10 max-md:py-0 max-sm:px-5 max-sm:py-0">
        <Logo />
        
        {/* Desktop Navigation */}
        <div className="flex-1 flex items-center justify-center max-sm:hidden">
          <nav className="flex gap-8">
            <a
              href="#"
              className="text-base text-gray-600 no-underline transition-[color] duration-[0.2s] hover:text-[#008000]"
            >
              Home
            </a>
            <a
              href="#"
              className="text-base text-[#008000] no-underline transition-[color] duration-[0.2s]"
            >
              Features
            </a>
            <a
              href="#"
              className="text-base text-gray-600 no-underline transition-[color] duration-[0.2s] hover:text-[#008000]"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-base text-gray-600 no-underline transition-[color] duration-[0.2s] hover:text-[#008000]"
            >
              About
            </a>
            <a
              href="#"
              className="text-base text-gray-600 no-underline transition-[color] duration-[0.2s] hover:text-[#008000]"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="hidden max-sm:flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Login/Sign Up Button */}
        <div className="flex items-center max-sm:hidden">
          <button className="flex items-center gap-2 text-white text-base cursor-pointer shadow-[0px_1px_2px_rgba(0,0,0,0.05)] bg-[#008000] px-4 py-[11px] rounded-lg">
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 4C9.5 3.33696 9.23661 2.70107 8.76777 2.23223C8.29893 1.76339 7.66304 1.5 7 1.5C6.33696 1.5 5.70107 1.76339 5.23223 2.23223C4.76339 2.70107 4.5 3.33696 4.5 4C4.5 4.66304 4.76339 5.29893 5.23223 5.76777C5.70107 6.23661 6.33696 6.5 7 6.5C7.66304 6.5 8.29893 6.23661 8.76777 5.76777C9.23661 5.29893 9.5 4.66304 9.5 4ZM3 4C3 2.93913 3.42143 1.92172 4.17157 1.17157C4.92172 0.421427 5.93913 0 7 0C8.06087 0 9.07828 0.421427 9.82843 1.17157C10.5786 1.92172 11 2.93913 11 4C11 5.06087 10.5786 6.07828 9.82843 6.82843C9.07828 7.57857 8.06087 8 7 8C5.93913 8 4.92172 7.57857 4.17157 6.82843C3.42143 6.07828 3 5.06087 3 4ZM1.54062 14.5H12.4594C12.1813 12.5219 10.4813 11 8.42813 11H5.57188C3.51875 11 1.81875 12.5219 1.54062 14.5ZM0 15.0719C0 11.9937 2.49375 9.5 5.57188 9.5H8.42813C11.5063 9.5 14 11.9937 14 15.0719C14 15.5844 13.5844 16 13.0719 16H0.928125C0.415625 16 0 15.5844 0 15.0719Z"
                fill="white"
              />
            </svg>
            <span>Login / Sign Up</span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="hidden max-sm:flex flex-col absolute top-[65px] left-0 right-0 bg-white border-t border-gray-100 p-5 shadow-lg">
            <nav className="flex flex-col gap-4">
              <a
                href="#"
                className="text-base text-gray-600 no-underline transition-[color] duration-[0.2s]"
              >
                Home
              </a>
              <a
                href="#"
                className="text-base text-[#008000] no-underline transition-[color] duration-[0.2s]"
              >
                Features
              </a>
              <a
                href="#"
                className="text-base text-gray-600 no-underline transition-[color] duration-[0.2s]"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base text-gray-600 no-underline transition-[color] duration-[0.2s]"
              >
                About
              </a>
              <a
                href="#"
                className="text-base text-gray-600 no-underline transition-[color] duration-[0.2s]"
              >
                Contact
              </a>
            </nav>
            <button className="flex items-center justify-center gap-2 text-white text-base cursor-pointer shadow-[0px_1px_2px_rgba(0,0,0,0.05)] bg-[#008000] px-4 py-[11px] rounded-lg mt-4">
              <svg
                width="14"
                height="16"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 4C9.5 3.33696 9.23661 2.70107 8.76777 2.23223C8.29893 1.76339 7.66304 1.5 7 1.5C6.33696 1.5 5.70107 1.76339 5.23223 2.23223C4.76339 2.70107 4.5 3.33696 4.5 4C4.5 4.66304 4.76339 5.29893 5.23223 5.76777C5.70107 6.23661 6.33696 6.5 7 6.5C7.66304 6.5 8.29893 6.23661 8.76777 5.76777C9.23661 5.29893 9.5 4.66304 9.5 4ZM3 4C3 2.93913 3.42143 1.92172 4.17157 1.17157C4.92172 0.421427 5.93913 0 7 0C8.06087 0 9.07828 0.421427 9.82843 1.17157C10.5786 1.92172 11 2.93913 11 4C11 5.06087 10.5786 6.07828 9.82843 6.82843C9.07828 7.57857 8.06087 8 7 8C5.93913 8 4.92172 7.57857 4.17157 6.82843C3.42143 6.07828 3 5.06087 3 4ZM1.54062 14.5H12.4594C12.1813 12.5219 10.4813 11 8.42813 11H5.57188C3.51875 11 1.81875 12.5219 1.54062 14.5ZM0 15.0719C0 11.9937 2.49375 9.5 5.57188 9.5H8.42813C11.5063 9.5 14 11.9937 14 15.0719C14 15.5844 13.5844 16 13.0719 16H0.928125C0.415625 16 0 15.5844 0 15.0719Z"
                  fill="white"
                />
              </svg>
              <span>Login / Sign Up</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
