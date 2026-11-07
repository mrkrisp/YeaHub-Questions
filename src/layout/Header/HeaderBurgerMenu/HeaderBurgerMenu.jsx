import { useState } from 'react'
import styles from './HeaderBurgerMenu.module.css'

export function HeaderBurgerMenu() {
  const [isOpenBurgerBtn, setIsOpenBurgerBtn] = useState(false)

  const onToggleBurgerBtn = () => {
    setIsOpenBurgerBtn((prev) => !prev)
  }

  return (
    <div className={styles['burger__menu']}>
      <button
        className={styles['burger__menu-btn']}
        onClick={onToggleBurgerBtn}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        className={`${styles['header__btns']} ${
          isOpenBurgerBtn ? styles['burger-open'] : ''
        }`}
      >
        <button className={styles['header__btn-login']}>Вход</button>
        <button className={styles['header__btn-register']}>Регистрация</button>
      </div>
    </div>
  )
}
