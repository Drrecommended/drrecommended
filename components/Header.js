import styles from '../styles/header.module.css'
import Image from 'next/image'

export default function Header() {
  return (
    <header className={styles.headerSection}>
      <Image src="/public/DR RECOMMENDED LOGO OUTLINE 01.png" layout='fill'/>
      <div className="marquee-w">
        <div className="marquee">
          <span>
            Welcome to my DJ site. Check out some of my MIXES and DESIGNS.
          </span>
        </div>
        <div className="marquee">
          <span>
            Welcome to my DJ site. Check out some of my MIXES and DESIGNS.
          </span>
        </div>
      </div>
    </header>
  )
}
