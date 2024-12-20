import "./Navbar.css";
import Image from "next/image";
import searchIcon from "@/public/search.svg";

function Navbar() {
    //navigation func and provide search

    return (
        <div className="nav-bar">
          
          <div>this is nav bar</div>
          <div>
            <div>
              <button className="nav-bar-search-button">
                login
              </button>
            </div>
            <div>
              <button className="nav-bar-search-button">
                <Image 
                  src={searchIcon}
                  width={25}
                  height={25}
                  alt={'search image'}
                  priority={true} 
                />
              </button>
            </div>
          </div>
         
          
          </div>
    );
  };
  
  export default Navbar;