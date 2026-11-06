import { getSkills } from '@/api/apiSkills.js'
import { getSpecializations } from '@/api/apiSpecializations.js'
import { FilterGroup } from '@/components/FilterGroup/FilterGroup'
import { FilterLayout } from '@/ui/FilterLayout/FilterLayout'
import { useEffect, useMemo, useState } from 'react'
import { FilterSearch } from '../FilterSearch/FilterSearch'

const rating = [
  { title: '1', value: 1 },
  { title: '2', value: 2 },
  { title: '3', value: 3 },
  { title: '4', value: 4 },
  { title: '5', value: 5 },
]

const complexities = [
  { title: '1-3', value: '1,2,3' },
  { title: '4-6', value: '4,5,6' },
  { title: '7-8', value: '7,8' },
  { title: '9-10', value: '9,10' },
]

export function FilterQuestions({ filters, setFilters, onSearch, setPage }) {
  const [specializations, setSpecializations] = useState([])
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

  const filtersData = useMemo(
    () => [
      {
        filterKey: 'specialization',
        title: 'Специализация',
        itemKey: 'id',
        single: true,
        items: specializations,
      },
      {
        filterKey: 'skills',
        title: 'Навыки',
        itemKey: 'id',
        withIcon: true,
        items: skills,
      },
      {
        filterKey: 'complexity',
        title: 'Уровень сложности',
        itemKey: 'value',
        items: complexities,
      },
      {
        filterKey: 'rating',
        title: 'Рейтинг',
        itemKey: 'value',
        items: rating,
      },
    ],
    [specializations, skills]
  )

  const onSelectFilterItem = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }))
    setPage(1)
  }

  return (
    <FilterLayout>
      <FilterSearch onSearch={onSearch} />

      {filtersData.map((filterData) => (
        <FilterGroup
          key={filterData.filterKey}
          items={filterData.items}
          selectedItems={filters[filterData.filterKey]}
          title={filterData.title}
          itemKey={filterData.itemKey}
          withIcon={filterData.withIcon}
          isSingle={filterData.single}
          onSelectFilterItem={(value) =>
            onSelectFilterItem(filterData.filterKey, value)
          }
        />
      ))}
    </FilterLayout>
  )
}
