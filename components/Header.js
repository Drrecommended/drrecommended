import styles from '../styles/header.module.css'
import Image from 'next/image'
import myLogo from '../public/logo.png'

export default function Header() {
  return (
    <header className={styles.headerSection}>
      <Image src={myLogo} />
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
