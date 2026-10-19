import styles from "./Header.module.css"

export function Header() {
	return <header className={styles.header}>
		<div className='container header__inner'>
			<div className='header__logo'>Yeahub</div>
			<nav className='header__nav'>
				<ul className='header__nav-list'>
					<li className="header__nav-item">
						<a href="#">
							База вопросов
						</a>
					</li>
					<li className="header__nav-item">
						<a href="#">
							Тренажёр
						</a>
					</li>
					<li className="header__nav-item">
						<a href="#">
							Материалы
						</a>
					</li>
					<li className="header__nav-item">
						<a href="#">
							Навыки (hh)
						</a>
					</li>
				</ul>
			</nav>

			<div className='header__btns'>
				<button className="header__btn-login">Вход</button>
				<button className="header__btn-register">Регистрация</button>
			</div>
		</div>
	</header>
}
