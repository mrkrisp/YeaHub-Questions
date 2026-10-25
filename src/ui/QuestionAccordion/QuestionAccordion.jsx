import AccordionArrowIcon from '@assets/icons/AccordionArrowIcon.svg'
import styles from './QuestionAccordion.module.css'

export function QuestionAccordion({title, isOpen, onClickAccordion, children}) {
	return <div className={styles.accordion}>
		<button className={styles['accordion__button']} onClick={onClickAccordion}>
			<h3 className={styles['accordion__title']}>{title}</h3>
			<img className={`${styles["accordion__arrow"]} ${isOpen ? styles.open : ''}`} src={AccordionArrowIcon} alt="arrow" />
		</button>
		<div className={`${styles["accordion__panel"]} ${isOpen ? styles.open : ''}`}>
			<div className={styles["accordion__panel-content"]}>
				{children}
			</div>	
		</div>
	</div>
}
