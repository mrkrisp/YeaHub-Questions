import { useState } from 'react'
import styles from './FilterButton.module.css'

export function FilterButton({ id, text, onClickItem }) {
  const [isActive, setIsActive] = useState(false)

  const onClick = () => {
    setIsActive((prev) => !prev)
    onClickItem(id)
  }

  return (
    <button
      onClick={onClick}
      className={`${styles['filter__button']} ${isActive ? styles.active : ''}`}
    >
      {text}
    </button>
  )
}
