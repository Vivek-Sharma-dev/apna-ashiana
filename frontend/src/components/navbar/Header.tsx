import Logo from './Logo'
import Navlinks from './Navlinks'
import Profile from './Profile'

const Header = () => {
  return (
    <>
    <header className='flex items-center justify-between py-4 container mx-auto'>
      <Logo />
      <Navlinks />
      <Profile />
    </header>
    </>
  )
}

export default Header
