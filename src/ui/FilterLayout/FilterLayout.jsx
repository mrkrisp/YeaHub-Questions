import styles from './FilterLayout.module.css'

export function FilterLayout({ children }) {
  return <div className={styles['filter']}>{children}</div>
}
