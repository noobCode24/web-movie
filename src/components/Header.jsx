
import { Link, NavLink, useNavigate } from "react-router"
import logo from "../assets/img/logo.png"
import userIcon from "../assets/img/user.png"
import { useLocation } from "react-router"
import { useEffect, useRef, useState } from "react"
import { IoSearchOutline } from "react-icons/io5"
import { navigation } from "../contans/navigation"

const Header = () => {
  const location = useLocation()
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ")
  const [searchInput, setSearchInput] = useState(removeSpace)
  const headerRef = useRef()
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  useEffect(() =>{
    const scrollChange = () => {
      if (window.scrollY > 50) {
        headerRef.current.classList.add("!bg-black")
      } else {
        headerRef.current.classList.remove("!bg-black")
      }
    }
    
    window.addEventListener("scroll", scrollChange)

    return () => {
      window.removeEventListener("scroll", scrollChange)
    }
  }, [])
  // noi de chuyen sang duong dan voi ten trung voi api
  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`)
    }
  }, [searchInput])

  return (
    <header ref={headerRef} style={{ backgroundColor: "rgba(0, 0, 0, 0.2)"}} className='transition-all fixed top-0 w-full h-16  z-40'>
      <div className='container mx-auto px-3 flex items-center h-full'>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width={120}
          />
        </Link>

        <nav className='hidden lg:flex items-center gap-1 ml-5'>
          {navigation.map((nav, index) => (
            /* co the chinh sua key nay */
            <div key={index}> 
              <NavLink
                key={`${nav.label}-header-${index}`}
                to={nav.href}
                className={({ isActive }) =>
                  `px-2 hover:text-neutral-100 ${isActive ? "text-neutral-100" : ""}`
                }
              >
                {nav.label}
              </NavLink>
            </div>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput || ""}
            />
            <button className="text-2xl text-white" type="submit">
              <IoSearchOutline />
            </button>
          </form>
          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img
              src={userIcon}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
