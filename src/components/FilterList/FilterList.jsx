import { FilterButton } from '@/ui/FilterButton/FilterButton'
import { FilterButtonWithIcon } from '@/ui/FilterButtonWithIcon/FilterButtonWithIcon'
import FigmaIcon from '@assets/icons/FigmaIcon.svg'
import styles from './FilterList.module.css'
export function FilterList({ items, type = 'default', onClickItem }) {
  return (
    <ul className={styles['filter__list']}>
      {items.map((item) => (
        <li key={item.id ?? item}>
          {type === 'default' ? (
            <FilterButton
              id={item.id ?? null}
              text={item.title}
              onClickItem={onClickItem}
            />
          ) : (
            <FilterButtonWithIcon
              id={item.id ?? null}
              text={item.title}
              iconSrc={FigmaIcon}
              onClickItem={onClickItem}
            />
          )}
        </li>
      ))}
    </ul>
  )
}
