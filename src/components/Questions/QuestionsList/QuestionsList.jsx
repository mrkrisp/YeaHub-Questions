import { QuestionsItem } from './QuestionsItem/QuestionsItem'
import styles from './QuestionsList.module.css'

export function QuestionsList({questions}) {
	return (
		<>
			<h2 className={styles["question__list-heading"]}>Вопросы React, JavaScript</h2>
			<ul className={styles["questions__list"]}>
				{questions.map(question => (
					<QuestionsItem 
						key={question.id} 
						title={question.title} 
						shortAnswer={question.shortAnswer} 
						complexity={question.complexity}
						rating={question.rate}
					/>
				))}
			</ul>
		</>
	)
}
