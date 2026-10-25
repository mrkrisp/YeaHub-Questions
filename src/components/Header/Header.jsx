import LogoIcon from '../../assets/icons/logo/LogoIcon.svg'
import LogoIconMobile from '../../assets/icons/logo/LogoIconMobile.svg'
import styles from "./Header.module.css"
import { HeaderNav } from './HeaderNav'

const navItems = ['База вопросов', 'Тренажёр', 'Материалы', 'Навыки (hh)']

export function Header() {
	return <header className={styles.header}>
		<div className={`container ${styles["header__inner"]}`}>
			<div className={styles["header__logo"]}>
				<picture>
					<source srcSet={LogoIcon} alt="Logo" media='(min-width: 500px)' />
					<source srcSet={LogoIconMobile} alt="Logo" />
					<img src={LogoIcon} alt="Logo" />
				</picture>
			</div>
			<HeaderNav navItems={navItems} />

			<div className={styles["header__btns"]}>
			  
				<button className={styles['header__btn-login']}>Вход</button>
				<button className={styles["header__btn-register"]}>Регистрация</button>
			</div>

		</div>
	</header>
}
