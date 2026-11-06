import { Questions } from '@/components/Questions/Questions'
import styles from './QuestionsPage.module.css'

export function QuestionsPage() {
  return (
    <main className={styles.main}>
      <div className={`container ${styles['main__inner']}`}>
        <Questions />
      </div>
    </main>
  )
}
