import { useEffect, useState } from 'react'
import { Pagination } from '../Pagination/Pagination'
import { QuestionsList } from './QuestionsList/QuestionsList'

export function Questions() {
	const [questions, setQuestions] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState("")

	const [page, setPage] = useState(1)

	useEffect(() => {
		async function fetchData() {
			setIsLoading(true)
			setError("")
			try {
				const res = await fetch(`https://api.yeatwork.ru/questions/public-questions?page=${page}&limit=10&order=ASC`)

				if(!res.ok) {
					throw new Error(`Error: ${res.status}`)
				}

				const questionsData = await res.json()

				setQuestions(questionsData)
			} catch (err) {
				setError(err.message)
			} finally {
				setIsLoading(false)
			}
		}

		fetchData()
	}, [page])

	if(isLoading) {
		return <div>Loading...</div>
	}

	if(error) {
		return <h2 style={{color: "red"}}>Error...</h2>
	}

	return <>
		<QuestionsList questions={questions.data} />
		<Pagination currentPage={page} total={questions.total} onClickPage={setPage} />
	</>
}
