import ArrowRight from '@assets/icons/arrows/ArrowRight.svg'
import EllipsesVertical from '@assets/icons/EllipsesVertical.svg'
import { QuestionAccordion } from '@ui/QuestionAccordion/QuestionAccordion'
import { useState } from 'react'
import styles from './QuestionsItem.module.css'

export function QuestionsItem({ title, shortAnswer, complexity, rating }) {
  const [isOpen, setIsOpen] = useState(false)

  const onClickAccordion = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <li className={styles['questions__list-item']}>
      <QuestionAccordion
        title={title}
        isOpen={isOpen}
        onClickAccordion={onClickAccordion}
      >
        <div className={styles['question__badges']}>
          <div>
            Рейтинг: <span>{rating}</span>
          </div>
          <div>
            Сложность: <span>{complexity}</span>
          </div>
          <img
            className={styles['ellipses-vertical']}
            src={EllipsesVertical}
            alt="more"
          />
        </div>
        <div
          className={styles['question__short-answer']}
          dangerouslySetInnerHTML={{ __html: shortAnswer }}
        />
        <div className={styles['question__details-link-wrapper']}>
          <a href="#" className={styles['question__details-link']}>
            <span>Подробнее</span>
            <img src={ArrowRight} alt=">" />
          </a>
        </div>
      </QuestionAccordion>
    </li>
  )
}
