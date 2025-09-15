import { useState } from "react"
import ButtonLayout from "./ButtonLayout"
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons"
import * as Icon from 'react-bootstrap-icons'

const Header = () => {

  const location = useLocation()
  const currentPath = location.pathname

  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <header className="flex flex-col p-4 max-w-7xl mx-auto my-0">
      <div className={`flex justify-between items-center py-3 px-5 bg-azul text-gris-oscuro ${isOpen ? 'rounded-t-lg rounded-l-lg' : 'rounded-lg'} sm:rounded-lg`}>
        <Link to="/" className={`mx-4 text-lg ${currentPath === '/' && 'font-bold'}`}><img src="img/logo.png" className="w-16"/></Link>
        {/* Desktop Navbar */}
        <div className="hidden sm:flex items-center">
          <div className="text-lg text-slate-800">
              <Link to="/blog" className={`mx-4 ${currentPath === '/blog' && 'font-bold'}`}>Blog</Link>
              <Link to="/talleres" className={`mx-4 ${currentPath === '/talleres' && 'font-bold'}`}>Talleres</Link>
              <Link to="/nosotros" className={`mx-4 ${currentPath === '/nosotros' && 'font-bold'}`}>Nosotros</Link>
          </div>
          <ButtonLayout label="Iniciar sesión" />
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block cursor-pointer sm:hidden"
        >
        {
          isOpen
            ? <Icon.XLg className="text-3xl text-slate-800" />
            : <Icon.List className="text-4xl text-slate-800"/>

        }
        </button>
      </div>
      {/* Mobile Navbar */}
      <div className={`${
        isOpen ? 'flex' : 'hidden'
        } sm:hidden bg-morado text-slate-700 ml-auto flex-col items-start w-48 px-3 py-2 pb-4 rounded-b-lg space-y-2`}
        >
        <div className="block text-lg font-semibold space-y-2">
            <Link to="/blog" className={`block ${currentPath === '/blog' && 'font-bold'}`}>Blog</Link>
            <Link to="/talleres" className={`block ${currentPath === '/talleres' && 'font-bold'}`}>Talleres</Link>
            <Link to="/nosotros" className={`block ${currentPath === '/nosotros' && 'font-bold'}`}>Nosotros</Link>
        </div>
        <ButtonLayout label="Iniciar sesión" />
      </div>
    </header>
  )
}

export default Header
