import { useState } from 'react'
import styles from './Header.module.css'

export function HeaderNav({navItems}) {
	const [isOpen, setIsOpen] = useState(false)

	const onClick = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<nav className={styles["header__nav"]}>
			<div className={styles['header__nav-accordion']}>
				<button className={styles['header__nav-button']} onClick={onClick}>
					Подготовка
				</button>
				<ul className={`${styles['header__nav-list']} ${isOpen ? styles.open : ''}`}>
					{navItems.map(item => (
						<li key={item}>
							<a className={styles['header__nav-link']} href="#">
								{item}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}
