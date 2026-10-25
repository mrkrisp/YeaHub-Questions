import { Questions } from '../Questions/Questions'
import styles from './Main.module.css'


export function Main() {
	
	

	return <main className={styles.main}>
		<div className='container main__inner'>
			<section className={styles["questions"]}>
				<Questions />
			</section>
		</div>
	</main>
}
