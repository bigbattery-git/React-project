import styles from '../module_css/header.module.css'

function Header(){
  return(
    <header>
      <div className='header-left'>
        <button type='button' className='header-left-logo'>
          <div className='header-left-logo-img'></div>
        </button>
        <img src='#'></img>
      </div>
      <div className='header-right'>
        <div className='header-right-search'>
          <label for="search">
            <div className='search-logo'></div>
          </label>
          <input type="search" name="" id="" placeholder='노래, 앨범, 아티스트, 팟캐스트 검색'></input>
        </div>
        <div className='header-right-my'>
          <div className='header-right-my-account'></div>
        </div>
      </div>
    </header>
  );
}

export default Header;