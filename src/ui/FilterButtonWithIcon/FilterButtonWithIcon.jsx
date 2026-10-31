import { useState } from 'react'
import styles from './FilterButtonWithIcon.module.css'

export function FilterButtonWithIcon({ id, iconSrc, text, onClickItem }) {
  const [isActive, setIsActive] = useState(false)

  const onClick = () => {
    setIsActive((prev) => !prev)
    onClickItem(id)
  }

  return (
    <button
      onClick={onClick}
      className={`${styles['filter__button-with-icon']} ${
        isActive ? styles.active : ''
      }`}
    >
      {iconSrc ? (
        <img
          className={styles['filter__button-icon']}
          src={iconSrc}
          alt="icon"
        />
      ) : null}
      <span>{text}</span>
    </button>
  )
}
