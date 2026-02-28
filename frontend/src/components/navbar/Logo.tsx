import { Link } from 'react-router-dom'
import SiteLogo from '../../assets/logo.png'

const Logo = () => {
  return (
    <Link to="/" className=''>   
        <img src={SiteLogo} alt="Site Logo" className="w-20" />
    </Link>
  )
}

export default Logo
