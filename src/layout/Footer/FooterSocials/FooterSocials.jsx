import FigmaIcon from '@assets/icons/socials/FigmaIcon.svg'
import GitHubIcon from '@assets/icons/socials/GitHubIcon.svg'
import TelegramIcon from '@assets/icons/socials/TelegramIcon.svg'
import TikTokIcon from '@assets/icons/socials/TikTokIcon.svg'
import YouTubeIcon from '@assets/icons/socials/YouTubeIcon.svg'
import styles from './FooterSocials.module.css'

const icons = [
  { url: FigmaIcon, alt: 'figma' },
  { url: GitHubIcon, alt: 'github' },
  { url: TelegramIcon, alt: 'tg' },
  { url: TikTokIcon, alt: 'tiktok' },
  { url: YouTubeIcon, alt: 'youtube' },
]

export function FooterSocials() {
  return (
    <ul className={styles['footer__social-list']}>
      {icons.map((icon) => (
        <li key={icon.url}>
          <a href="#">
            <img
              src={icon.url}
              className={styles['footer__social-img']}
              alt={icon.alt}
            />
          </a>
        </li>
      ))}
    </ul>
  )
}
