import { getQuestions } from '@/api/apiQuestions'
import { useEffect, useState } from 'react'
import { FilterQuestions } from '../FilterQuestions/FilterQuestions'
import styles from './Questions.module.css'
import { QuestionsList } from './QuestionsList/QuestionsList'

export function Questions() {
  const [questions, setQuestions] = useState([])
  const [error, setError] = useState('')

  const [filters, setFilters] = useState({
    specialization: null,
    skills: [],
    complexity: [],
    rating: [],
  })
  const [searchQuery, setSearchQuery] = useState('')
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const [filterIsOpen, setFilterIsOpen] = useState(false)

  const onClickFilterButton = () => {
    setFilterIsOpen((prev) => !prev)
    if (!filterIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }
  }

  useEffect(() => {
    async function fetchData() {
      setError('')
      try {
        const params = {
          page,
          title: searchQuery,
          skills: filters.skills.join(','),
          specializationId: filters.specialization,
          rate: filters.rating.join(','),
          complexity: filters.complexity.join(','),
        }
        const questionsData = await getQuestions(params)

        setQuestions(questionsData.data)
        setTotalPages(questionsData.total)
      } catch (err) {
        setError(err.message)
      }
    }

    fetchData()
  }, [page, filters, searchQuery])

  return (
    <>
      <section className={styles['questions']}>
        <div className={styles['questions__header']}>
          <h2 className={styles['questions__title']}>
            Вопросы React, JavaScript
          </h2>
          <button
            className={styles['questions__header-button']}
            onClick={onClickFilterButton}
          >
            Open
          </button>
        </div>
        {error ? (
          <h2 style={{ color: 'red' }}>Error...</h2>
        ) : (
          <QuestionsList
            questions={questions}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        )}
      </section>
      <aside
        className={`${styles['questions__filter']} ${
          filterIsOpen ? styles.open : ''
        }`}
      >
        <FilterQuestions
          filters={filters}
          setFilters={setFilters}
          onSearch={setSearchQuery}
          setPage={setPage}
        />
      </aside>
    </>
  )
}
