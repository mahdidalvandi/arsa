import messanger from "../assets/messanger.png";
import search from "../assets/search.png";
import project from "../assets/project.png";
import profile from "../assets/profile.png";
import wallet from "../assets/wallet.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#DEEBEC] border-gray-200">
        <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="hidden ml-72 md:block" id="navbar-default">
            <ul className=" items-center font-medium flex text-center justify-center flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded- md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li className="w-full items-center [text-align:-webkit-center] justify-center ">
                <img className="h-6 w-6 " src={messanger} />
                <a
                  href="#"
                  className="block py-2 px-3 text-[#005354] rounded"
                  aria-current="Messenger"
                >
                  ME<span className="text-[#B19149]">S</span>SENGER
                </a>
              </li>
              <li className="w-full items-center [text-align:-webkit-center] justify-center">
                <img className="h-6 w-6 " src={search} />
                <a href="#" className="block py-2 px-3 text-[#005354] rounded">
                  E<span className="text-[#B19149]">X</span>PLORE
                </a>
              </li>
              <li className="w-full items-center [text-align:-webkit-center] justify-center">
                <img className="h-6 w-6 " src={project} />
                <a
                  href="/project"
                  className="block py-2 px-3 text-[#005354] rounded"
                >
                  PROJE<span className="text-[#B19149]">C</span>T
                </a>
              </li>
              <li className="w-full items-center [text-align:-webkit-center] justify-center">
                <img className="h-6 w-6 " src={profile} />

                <a href="#" className="block py-2 px-3 text-[#005354] rounded">
                  PROFI<span className="text-[#B19149]">L</span>E
                </a>
              </li>
              <li className="w-full items-center [text-align:-webkit-center] justify-center">
                <img className="h-6 w-6 " src={wallet} />
                <a href="#" className="block py-2 px-3 text-[#005354] rounded">
                  <span className="text-[#B19149]">W</span>ALLET
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
