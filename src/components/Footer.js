import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <img
              src="https://afinfosys.netlify.app/logo512.png"
              className="w-10 h-10 mr-3 rounded-full border border-slate-700"
              alt="AF Infosys Logo"
            />
            <div>
              <span className="font-bold text-white text-xl">A.F. Infosys</span>
              <p className="text-sm mt-1">
                Serving Panchayats with Trust & Technology since 2010
              </p>
              <h3
                style={{
                  fontSize: "16px",
                  color: "#ff6a6a",
                  fontWeight: "500",
                }}
              >
                Powered by GRAM PANCHAYAT
              </h3>
            </div>
          </div>
          <div className="text-sm text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} A.F. Infosys. All rights
              reserved.
            </p>
            <div className="flex justify-center md:justify-end space-x-4 mt-2">
              <a href="#home" className="hover:text-white transition-colors">
                Home
              </a>
              <a
                href="#services"
                className="hover:text-white transition-colors"
              >
                Services
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
