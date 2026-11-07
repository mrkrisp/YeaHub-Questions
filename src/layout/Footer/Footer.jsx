import styles from './Footer.module.css'
import { FooterSocials } from './FooterSocials/FooterSocials'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container footer__inner">
        <div className={styles['footer__logo']}>Yeahub</div>
        <p className={styles['footer__slogan']}>
          Выбери, каким будет IT завтра, вместе с нами
        </p>
        <p className={styles['footer__description']}>
          YeaHub — это полностью открытый проект, призванный объединить и
          улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub.
          Дизайн проекта также открыт для ознакомления в Figma.
        </p>

        <div className={styles['footer__info']}>
          <div className={styles['footer__copyright']}>
            <p>©&nbsp;2024&nbsp;YeaHub</p>
            <a href="#" className={styles['footer__document-link']}>
              Документы
            </a>
          </div>

          <p className={styles['footer__social-text']}>
            Ищите нас и в других соцсетях @yeahub_it
          </p>
          <FooterSocials />
        </div>
      </div>
    </footer>
  )
}
