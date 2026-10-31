import { getSkills } from '@/api/apiSkills.js'
import { getSpecializations } from '@/api/apiSpecializations.js'
import { FilterList } from '@/components/FilterList/FilterList'
import { FilterLayout } from '@/ui/FilterLayout/FilterLayout'
import SearchIcon from '@assets/icons/SearchIcon.svg'
import { useEffect, useState } from 'react'
import styles from './FilterQuestions.module.css'

export function FilterQuestions({ setSelectedSkills }) {
  const [specializations, setSpecializations] = useState([])
  const [selectedSpecializations, setSelectedSpecializations] = useState([])
  const [skills, setSkills] = useState([])

  useEffect(() => {
    async function fetchSpecializations() {
      try {
        const specializationsData = await getSpecializations()

        setSpecializations(specializationsData.data)
      } catch (error) {
        console.error(error.message)
      }
    }

    fetchSpecializations()
  }, [])

  useEffect(() => {
    async function fetchSkills() {
      try {
        const skillsData = await getSkills()

        setSkills(skillsData.data)
      } catch (err) {
        console.error(err.message)
      }
    }

    fetchSkills()
  }, [])

  const onClickSkillItem = (skillId) => {
    setSelectedSkills((prev) =>
      prev.includes(skillId)
        ? prev.filter((prevSkillId) => prevSkillId !== skillId)
        : [...prev, skillId]
    )
  }

  return (
    <FilterLayout>
      <label htmlFor="filter-input" className={styles['filter__search']}>
        <img
          className={styles['filter__search-icon']}
          src={SearchIcon}
          alt="search"
        />
        <input
          className={styles['filter__search-input']}
          id="filter-input"
          type="text"
          placeholder="Введите запрос…"
        />
      </label>

      <div className={styles['filter__specialization']}>
        Специализация
        <FilterList items={specializations} />
      </div>
      <div>
        Навыки
        <FilterList items={skills} type="icon" onClickItem={onClickSkillItem} />
      </div>
      <div>Уровень сложности</div>
      <div>Рейтинг</div>
    </FilterLayout>
  )
}
