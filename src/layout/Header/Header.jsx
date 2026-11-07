import LogoIcon from '../../assets/icons/logo/LogoIcon.svg'
import LogoIconMobile from '../../assets/icons/logo/LogoIconMobile.svg'
import styles from './Header.module.css'
import { HeaderBurgerMenu } from './HeaderBurgerMenu/HeaderBurgerMenu'
import { HeaderNav } from './HeaderNav/HeaderNav'

const navItems = ['База вопросов', 'Тренажёр', 'Материалы', 'Навыки (hh)']

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles['header__inner']}`}>
        <div className={styles['header__logo']}>
          <picture>
            <source srcSet={LogoIcon} alt="Logo" media="(min-width: 500px)" />
            <source srcSet={LogoIconMobile} alt="Logo" />
            <img src={LogoIcon} alt="Logo" />
          </picture>
        </div>
        <HeaderNav navItems={navItems} />
        <HeaderBurgerMenu />
      </div>
    </header>
  )
}
