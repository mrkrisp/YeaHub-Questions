import { QuestionsItem } from './QuestionsItem/QuestionsItem'
import styles from './QuestionsList.module.css'

export function QuestionsList({questions}) {
	return (
		<>
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
