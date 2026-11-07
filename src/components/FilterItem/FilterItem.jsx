import styles from './FilterItem.module.css'

export function FilterItem({ onClickItem, text, isActive, icon }) {
  return (
    <li>
      <button
        onClick={onClickItem}
        className={`${
          !icon ? styles['filter__button'] : styles['filter__button-with-icon']
        } ${isActive ? styles.active : ''} `}
      >
        {icon ? (
          <img
            className={styles['filter__button-icon']}
            src={icon}
            alt="icon"
            loading="lazy"
          />
        ) : null}
        <span>{text}</span>
      </button>
    </li>
  )
}
