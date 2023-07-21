import React from "react";
import Logo from "../../assets/logo.png";

function ProfessorNavbar() {
  return (
    <div
      className="headerBar flex bg-white pt-4 pl-4 pr-4 shadow-md"
      style={{ position: "fixed", top: "0", width: "100%" }}
    >
      <img src={Logo} className="w-2/12 mb-8 " />

      <nav
        aria-label="primary"
        class="relative z-20 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-evenly md:flex-row "
      >
        <div class="relative group">
          <button class="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <span>WELCOME TO PROFESSORS INFORMATION MANAGEMENT SYSTEM 🙏</span>
          </button>
        </div>
        <div class="relative group">
          <button class="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <span>Account</span>
          </button>
          <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
            <div class="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
              <div class="">
                <div>
                  <button className="bg-gray-700 text-white font-bold">
                    {" "}
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative group">
          <button class="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <span>Guides</span>
          </button>
          <div class="absolute z-10 hidden bg-grey-200 group-hover:block">
            <div class="px-2 pt-2 pb-4 bg-white bg-gray-200 shadow-lg">
              <div class="">
                <div>Video Guide Coming Soon</div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative group">
          <button class="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <span>About</span>
          </button>
        </div>
        <div class="relative group">
          <button class="flex flex-row items-center w-full px-4 py-4 mt-2 text-base font-bold text-left uppercase bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 focus:outline-none font-montserrat">
            <span>Enquiry</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default ProfessorNavbar;
