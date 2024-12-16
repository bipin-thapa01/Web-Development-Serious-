import netflixLogo from './assets/netflix-3.svg';
import userLogo from './assets/userlogo.webp';
import './main.css'

function Header() {
  return (
    <nav className='header'>
      <div className='main-logo-container container pointer'>
        <img className='logo' src={netflixLogo} alt="Netflix Logo" />
      </div>
      <div className='nav-content'>
        <div className='container left-nav-container'>
          <span className='pointer'>Home</span>
          <span className='pointer'>TV Shows</span>
          <span className='pointer'>Movies</span>
          <span className='pointer'>Latest</span>
          <span className='pointer'>My list</span>
          <span className='pointer'>Browse by Languages</span>
        </div>
        <div className='container right-nav-container'>
          <span className='pointer nav-icons'><i className='fa-solid fa-magnifying-glass'></i></span>
          <span className='pointer nav-icons'><i className='fa-regular fa-bell'></i></span>
          <span className='pointer'>
            <span><img className='user-logo' src={userLogo} alt="Logo" /></span>
            <span><i className='fa-solid fa-caret-down nav-icons'></i></span>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Header;