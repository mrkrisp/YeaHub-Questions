import { useDebounce } from '@/hooks/useDebounce'
import SearchIcon from '@assets/icons/SearchIcon.svg'
import { useEffect, useState } from 'react'
import styles from './FilterSearch.module.css'

export function FilterSearch({ onSearch }) {
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 500)

  useEffect(() => {
    onSearch(debouncedSearch)
  }, [debouncedSearch, onSearch])

  return (
    <label htmlFor="filter-input" className={styles['filter__search']}>
      <img
        className={styles['filter__search-icon']}
        src={SearchIcon}
        alt="search"
      />
      <input
        className={styles['filter__search-input']}
        id="filter-input"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Введите запрос…"
      />
    </label>
  )
}
