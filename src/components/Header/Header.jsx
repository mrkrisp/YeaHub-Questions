import LogoIcon from '../../assets/icons/LogoIcon.svg'
import styles from "./Header.module.css"

export function Header() {
	return <header className={styles.header}>
		<div className={`container ${styles["header__inner"]}`}>
				<div className={styles["header__logo"]}>
					<img src={LogoIcon} alt="Logo" />
				</div>
				<nav className={styles["header__nav"]}>
					<ul className={styles['header__nav-list']}>
						<li className="header__nav-item">
							<a className={styles['header__nav-link']} href="#">
								База вопросов
							</a>
						</li>
						<li className="header__nav-item">
							<a className={styles['header__nav-link']} href="#">
								Тренажёр
							</a>
						</li>
						<li className="header__nav-item">
							<a className={styles['header__nav-link']} href="#">
								Материалы
							</a>
						</li>
						<li className="header__nav-item">
							<a className={styles['header__nav-link']} href="#">
								Навыки (hh)
							</a>
						</li>
					</ul>
				</nav>
			
			
			<div className={styles["header__btns"]}>
				<button className={styles['header__btn-login']}>Вход</button>
				<button className={styles["header__btn-register"]}>Регистрация</button>
			</div>
		</div>
	</header>
}
