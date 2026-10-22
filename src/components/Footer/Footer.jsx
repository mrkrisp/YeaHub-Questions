import FigmaIcon from '../../assets/icons/socials/FigmaIcon.svg'
import GitHubIcon from '../../assets/icons/socials/GitHubIcon.svg'
import TelegramIcon from '../../assets/icons/socials/TelegramIcon.svg'
import TikTokIcon from '../../assets/icons/socials/TikTokIcon.svg'
import YouTubeIcon from '../../assets/icons/socials/YouTubeIcon.svg'
import styles from './Footer.module.css'


export function Footer() {
	return <footer className={styles.footer}>
		<div className='container footer__inner'>
			<div className={styles["footer__logo"]}>Yeahub</div>
			<p className={styles["footer__slogan"]}>Выбери, каким будет IT завтра, вместе с нами</p>
			<p className={styles["footer__description"]}>YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для ознакомления в Figma.</p>
			

			<div className={styles["footer__info"]}>
				<div className={styles["footer__copyright"]}>
					<p>© 2024 YeaHub</p>
					<a href="#" className={styles['footer__document-link']}>Документы</a>
				</div>

				<div className={styles["footer__social-info"]}>
					<p>Ищите нас и в других соцсетях @yeahub_it</p>
					<ul className={styles["footer__social-list"]}>
						<li className="footer__social-item">
							<a href="#">
								<img className={styles["footer__social-img"]} src={FigmaIcon} alt="figma" />
							</a>
						</li>
						<li className="footer__social-item">
							<a href="#">
								<img className={styles["footer__social-img"]} src={TelegramIcon} width="24" height={24} alt="tg" />
							</a>
						</li>
						<li className="footer__social-item">
							<a href="#">
								<img className={styles["footer__social-img"]} src={YouTubeIcon} alt="youtube" />
							</a>
						</li>
						<li className="footer__social-item">
							<a href="#">
								<img className={styles["footer__social-img"]} src={TikTokIcon} alt="tiktok" />
							</a>
						</li>
						<li className="footer__social-item">
							<a href="#">
								<img className={styles["footer__social-img"]} src={GitHubIcon} alt="github" />
							</a>
						</li>
					</ul>
				</div>	
			</div>
		</div>
	</footer>
}
