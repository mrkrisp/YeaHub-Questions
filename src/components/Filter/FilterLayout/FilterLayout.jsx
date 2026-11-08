import CloseButtonIcon from '@assets/icons/CloseButtonIcon.svg'
import styles from './FilterLayout.module.css'

export function FilterLayout({ setFilterIsOpen, children }) {
  const onClickFilterClose = () => {
    setFilterIsOpen(false)
  }

  return (
    <div className={styles['filter']}>
      <img
        className={styles['filter__close-btn']}
        src={CloseButtonIcon}
        onClick={onClickFilterClose}
        width={20}
        height={20}
        loading="lazy"
      />
      <div className={styles['filter__content']}>{children}</div>
    </div>
  )
}
