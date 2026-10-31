import { getPagination } from '@/utils/getPagination'
import PaginationArrowLeft from '@assets/icons/arrows/PaginationArrowLeft.svg'
import PaginationArrowRight from '@assets/icons/arrows/PaginationArrowRight.svg'
import styles from './Pagination.module.css'

export function Pagination({ currentPage, total, onClickPage }) {
  const { pages, canClickPrevious, canClickNext } = getPagination(
    currentPage,
    total
  )

  return (
    <ul className={styles['pagination-list']}>
      <li>
        <button
          onClick={() => onClickPage((prev) => prev - 1)}
          disabled={!canClickPrevious}
        >
          <img src={PaginationArrowLeft} width={28} height={28} alt="<" />
        </button>
      </li>
      {pages.map((page) => (
        <li
          key={page}
          className={`${styles['pagination-item']} ${
            currentPage === page ? styles.active : ''
          }`}
        >
          <button onClick={() => onClickPage(page)} disabled={page === '...'}>
            {page}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={() => onClickPage((prev) => prev + 1)}
          disabled={!canClickNext}
        >
          <img src={PaginationArrowRight} width={28} height={28} alt=">" />
        </button>
      </li>
    </ul>
  )
}
