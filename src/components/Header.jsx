import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/img/logo.png";
import userIcon from "../assets/img/user.png";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { navigation } from "../contans/navigation";

const Header = () => {
  const [searchInput, setSearchInput] = useState();
  console.log('🚀 ~ Header ~ searchInput:', searchInput)
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/search/${searchInput}`);
  };
  return (
    <header
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      className='transition-all fixed top-0 w-full h-16  z-40'
    >
      <div className='container mx-auto px-3 flex items-center h-full'>
        <Link to='/'>
          <img src={logo} alt='logo' width={120} />
        </Link>

        <nav className='hidden lg:flex items-center gap-1 ml-5'>
          {navigation.map((nav, index) => (
            <div key={index}>
              <NavLink
                key={`${nav.label}-header-${index}`}
                to={nav.href}
                className={({ isActive }) =>
                  `px-2 hover:text-neutral-100 ${
                    isActive ? "text-neutral-100" : ""
                  }`
                }
              >
                {nav.label}
              </NavLink>
            </div>
          ))}
        </nav>
        <div className='ml-auto flex items-center gap-5'>
          <form className='flex items-center gap-2'>
            <input
              type='text'
              placeholder='Search here...'
              className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput || ""}
            />
            <button className='text-2xl text-white' type='submit'>
              <IoSearchOutline onClick={handleSearch} />
            </button>
          </form>
          <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
            <img src={userIcon} className='w-full h-full' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
