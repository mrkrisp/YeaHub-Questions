import { useEffect, useState } from 'react'
import styles from './Main.module.css'

export function Main() {
	const [questions, setQuestions] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch("https://api.yeatwork.ru/questions/public-questions?page=1&limit=10&order=ASC")
			.then(res => {
				setIsLoading(true)
				if(!res.ok) {
					throw new Error("Error: ", res.status, res.statusText)
				}
				return res.json()
			})
			.then(data => {
				setQuestions(data.data)
			})
			.catch(err => {
				console.log(err.message)
			})
			.finally(() => setIsLoading(false))
	}, [])


	return <main className={styles.main}>
		{isLoading ? 
			<h2>Загрузка вопросов...</h2> 
			: 
			(
				<ul>
					{questions.map(question => (
						<li key={question.id}>
							<h2>{question.title}</h2>
							<div dangerouslySetInnerHTML={{__html: question.shortAnswer}} />
						</li>
					))}
				</ul>
			)
		}
		
	</main>
}
