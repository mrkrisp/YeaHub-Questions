import HeaderArrowDown from '@assets/icons/arrows/HeaderArrowDown.svg'
import { useState } from 'react'
import styles from './HeaderNav.module.css'

export function HeaderNav({ navItems }) {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <nav className={styles['header__nav']}>
      <div className={styles['header__nav-accordion']}>
        <button className={styles['header__nav-button']} onClick={onClick}>
          <span>Подготовка</span>
          <img
            className={`${styles['header__nav-arrow']} ${
              isOpen ? styles.open : ''
            }`}
            src={HeaderArrowDown}
            width={24}
            height={24}
            alt="🔽"
          />
        </button>
        <ul
          className={`${styles['header__nav-list']} ${
            isOpen ? styles.open : ''
          }`}
        >
          {navItems.map((item) => (
            <li key={item} className={styles['header__nav-item']}>
              <a className={styles['header__nav-link']} href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
