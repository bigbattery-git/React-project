import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, useNavigate, outlet} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        
      </Routes>
      <Footer/>
    </div>
  );
}

function Header(){
  return(
    <div>
      <img src='#'></img>
      <div className='tab'>
        <ul>
          <li><span>이메일 로그인</span></li>
          <li><span>휴대폰번호 로그인</span></li>
          <li><span>QR코드 로그인</span></li>
        </ul>
      </div>
    </div>
  );
}

function Footer(){
  return(
    <div>
      <div className='footer-contentbox'>
        <p className='footer-contentbox-content'>법인 고객이신가요?<br/>
        사업자 회원으로 전용 특가 혜택을 누려보세요.</p>
        <a href='#'>쿠팡비즈 간편가입</a>
      </div>
      <div className='footer-copyright'>
        <p className='footer-copyright-content'>©Coupang Corp. All rights reserved.</p>
      </div>
    </div>
  )
}
export default App;
