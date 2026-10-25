import { QuestionAccordion } from '@ui/QuestionAccordion/QuestionAccordion'
import { useState } from 'react'
import styles from './QuestionsItem.module.css'

export function QuestionsItem({title, shortAnswer, complexity, rating}) {
	const [isOpen, setIsOpen] = useState(false)

	const onClickAccordion = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<li className={styles["questions__list-item"]}>
			<QuestionAccordion 
				title={title}  
				isOpen={isOpen} 
				onClickAccordion={onClickAccordion} 
			>
				<div className={styles["question__badges"]}>
					<div>Рейтинг: <span>{rating}</span></div>
					<div>Сложность: <span>{complexity}</span></div>
				</div>
				<div dangerouslySetInnerHTML={{__html: shortAnswer}} />
			</QuestionAccordion>
		</li>
	)
}
