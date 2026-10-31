import { FilterQuestions } from '@/components/FilterQuestions/FilterQuestions'
import { Questions } from '@/components/Questions/Questions'
import { useState } from 'react'
import styles from './QuestionsPage.module.css'

export function QuestionsPage() {
  const [selectedSkills, setSelectedSkills] = useState([])

  return (
    <main className={styles.main}>
      <div className={`container ${styles['main__inner']}`}>
        <Questions selectedSkills={selectedSkills} />
        <FilterQuestions setSelectedSkills={setSelectedSkills} />
      </div>
    </main>
  )
}
