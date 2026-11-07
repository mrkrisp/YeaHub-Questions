import styles from './ExpandedButton.module.css'

export function ExpandedButton({ expanded, setExpanded }) {
  return (
    <button
      className={styles['expanded-btn']}
      type="button"
      onClick={() => setExpanded((prev) => !prev)}
    >
      {expanded ? 'Скрыть' : 'Посмотреть все'}
    </button>
  )
}
