import { headerLogo } from '../assets/images'
import {hamburger} from '../assets/icons'
const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full mt-[-10px] text-lg'>
        <nav className='flex justify-between items-center max-container'>
            <a href='/'>
                <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
            <ul className=' font-semibold flex-1 flex items-center text-[#FF6452] justify-center gap-16 max-lg:hidden'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Sign In</li>
                <li>Ask Queries</li>
            </ul>
          {/* <button className='bg-blue-400 text-xl px-2 py-1 text-white  rounded-lg hover:bg-red-400'>Click me</button> */}
        </nav>
    </header>
  )
}

export default Nav