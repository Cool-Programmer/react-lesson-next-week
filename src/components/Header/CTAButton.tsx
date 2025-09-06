import { NavLink } from 'react-router-dom'
import type { CTAProps } from '../../common/Types'

function CTAButton({buttonText, buttonDestination}: CTAProps) {
  return (
    <>
        <NavLink to={buttonDestination} className="btn btn-outline-primary me-2">{buttonText}</NavLink>
    </>
  )
}

export default CTAButton