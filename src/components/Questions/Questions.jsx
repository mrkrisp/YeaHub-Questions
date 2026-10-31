import { getQuestions } from '@/api/apiQuestions'
import { useEffect, useState } from 'react'
import { Pagination } from '../Pagination/Pagination'
import styles from './Questions.module.css'
import { QuestionsList } from './QuestionsList/QuestionsList'

export function Questions({ selectedSkills }) {
  const [questions, setQuestions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      setError('')
      try {
        // const params = {
        //   page,
        //   selectedSkills: selectedSkills.join(','),
        // }
        const questionsData = await getQuestions({
          page,
          skills: selectedSkills.join(','),
        })

        setQuestions(questionsData.data)
        setTotalPages(questionsData.total)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [page, selectedSkills])

  return (
    <section className={styles['questions']}>
      <h2 className={styles['questions__title']}>Вопросы React, JavaScript</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <h2 style={{ color: 'red' }}>Error...</h2>
      ) : (
        <QuestionsList questions={questions} />
      )}
      <Pagination currentPage={page} total={totalPages} onClickPage={setPage} />
    </section>
  )
}
