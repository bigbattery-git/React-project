import style from '../css/header.module.css'

function Header(){
	return (
		<>
		<header className={style.header}>
			<ul>
				<li>SHOP</li>
				<li>STYLE</li>
				<li>ABOUT</li>
			</ul>
			<div>Logo</div>
			<ul>
				<li>돋보기</li>
				<li>로그인</li>
				<li>바구니</li>
			</ul>
		</header>
		</>
	);
}

export default Header;