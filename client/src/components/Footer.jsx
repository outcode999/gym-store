

import React from "react";


const Footer = () => {
  return (
    <footer className="bg-black text-white p-10">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        {/* Menu Section */}
        <div className="flex-1 min-w-[200px] mb-5">
          <h3 className="mb-4 text-[#ffa34c] text-lg font-bold">MENU</h3>
          <a href="#" className="block mb-2 hover:text-[#ffa34c]">Home</a>
          <a href="#" className="block mb-2 hover:text-[#ffa34c] whitespace-nowrap">About Us</a>
          <a href="#" className="block mb-2 hover:text-[#ffa34c]">Services</a>
          <a href="#" className="block mb-2 hover:text-[#ffa34c]">Programs</a>
        </div>

        {/* Support Section */}
        <div className="flex-1 min-w-[200px] mb-5">
          <h3 className="mb-4 text-[#ffa34c] text-lg font-bold">Nutrition</h3>
          <a href="#" className="block mb-2 uppercase hover:text-[#ffa34c]">Blog</a>
          <a href="#" className="block mb-2 uppercase hover:text-[#ffa34c]">Vehicle</a>
          <a href="#" className="block mb-2 hover:text-[#ffa34c]">Testimonials</a>
          <a href="#" className="block mb-2 hover:text-[#ffa34c]">Shop</a>
       
          <a href="#" className="block mb-2 hover:text-[#ffa34c]">Contact Us</a>


        </div>



        <div className="flex-1 min-w-[200px] mb-5">
          <h3 className="mb-4 text-[#ffa34c] text-lg font-bold">FitLife Hub!</h3>
          <p className="mb-5">
          Achieve Your Fitness Goals with Expert Guidance and Personalized Plans.
          </p>
         
         
        </div>

        </div>


        

      {/* Bottom Section */}
      <div className="mt-5 flex justify-between items-end flex-wrap">
        <div className="flex space-x-4">
          <a href="#" className="text-2xl hover:text-[#ffa34c]">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="#" className="text-2xl hover:text-[#ffa34c]">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#" className="text-2xl hover:text-[#ffa34c]">
            <i className="fa fa-twitter"></i>
          </a>
        </div>

        

        <p className="text-center mb-2 mt-5">
          &copy; 2024 @FitLife Hub . <br />
          Designed & Developed by <strong>0023</strong>
        </p>
       

        <div>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
