import { QuestionsPage } from '@/pages/QuestionsPage/QuestionsPage'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styles from './Layout.module.css'

export function Layout() {
	return <div className={styles.layout}>
		<Header />
		<QuestionsPage />
		<Footer />
	</div>
}
