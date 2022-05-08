import Link from 'next/link'

export default function Navigation() {
  return (
    <nav>
      <div className="container">
        <Link href="/"><a>Music</a></Link>
        <Link href="/designs"><a>Designs</a></Link>
        <Link href="/contact"><a>Book</a></Link>
      </div>
    </nav>
  )
}
