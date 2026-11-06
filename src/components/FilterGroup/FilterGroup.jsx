import FigmaIcon from '@assets/icons/FigmaIcon.svg'
import { useLayoutEffect, useRef, useState } from 'react'
import { FilterItem } from '../FilterItem/FilterItem'
import styles from './FilterGroup.module.css'

export function FilterGroup({
  items,
  selectedItems,
  title,
  itemKey = 'id',
  withIcon = false,
  isSingle = false,
  onSelectFilterItem,
}) {
  const [expanded, setExpanded] = useState(false)
  const [hasOverflow, setHasOverflow] = useState(false)
  const filterGroupRef = useRef(null)

  useLayoutEffect(() => {
    if (!filterGroupRef.current) return

    setHasOverflow(filterGroupRef.current.scrollHeight > 192)
  }, [items])

  const onClickFilterItem = (item) => {
    if (isSingle) {
      onSelectFilterItem(selectedItems === item[itemKey] ? null : item[itemKey])
      return
    }
    const isSelected = selectedItems.includes(item[itemKey])

    onSelectFilterItem(
      isSelected
        ? selectedItems.filter((selectedItem) => selectedItem !== item[itemKey])
        : [...selectedItems, item[itemKey]]
    )
  }

  return (
    <div>
      <h4 className={styles['filter__group-title']}>{title}</h4>
      <ul
        className={`${styles['filter__list']} ${
          expanded ? styles.expanded : ''
        }`}
        ref={filterGroupRef}
      >
        {items.map((item) => (
          <FilterItem
            key={item[itemKey] ?? item}
            onClickItem={() => onClickFilterItem(item)}
            text={item.title}
            isActive={
              isSingle
                ? item[itemKey] === selectedItems
                : selectedItems.includes(item[itemKey])
            }
            icon={withIcon ? FigmaIcon : ''}
          />
        ))}
      </ul>

      {hasOverflow && (
        <button
          className={styles['expanded-btn']}
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? 'Скрыть' : 'Посмотреть все'}
        </button>
      )}
    </div>
  )
}
