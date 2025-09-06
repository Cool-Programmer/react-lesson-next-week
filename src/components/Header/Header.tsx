import { NavLink } from 'react-router-dom'

import type { HeaderProps } from '../../common/Types';
import CTAButton from './CTAButton';

function Header({logoCDNUrl, menuItems} : HeaderProps) {
  return (
    <>
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <NavLink to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img src={logoCDNUrl} width="120px" alt="Logo" />
                </NavLink>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    {
                        Object.entries(menuItems).map(([label, path], index)=>(
                            <li key={index}>
                                <NavLink to={path} className='nav-link px-2 link-secondary'>{label}</NavLink>
                            </li>
                        ))
                    }
                </ul>

                <div className="col-md-3 text-end">
                    <CTAButton buttonText="Login" buttonDestination="/account/login"/>
                    <CTAButton buttonText="Sign-up" buttonDestination="/account/registration"/>
                </div>
            </header>
        </div>
    </>
  )
}

export default Header