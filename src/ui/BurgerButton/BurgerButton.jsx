import { useState } from 'react'
import styles from './BurgerButton.module.css'

export function BurgerButton() {
	const [isOpen, setIsOpen] = useState(false)

	const onClick = () => {
		setIsOpen(prev => !prev)
	}

	return <button onClick={onClick} className={`${styles["burger__btn"]} ${isOpen ? styles.open : ''}`}>
		<span></span>
		<span></span>
		<span></span>
	</button>
}
