import './Footer.css'

const socialLinks = [
  { href: 'https://www.instagram.com/cynthiashenn/', img: '/assets/images/logos/instagram.svg', alt: 'Instagram' },
  { href: 'https://www.linkedin.com/in/cynthiashen18/', img: '/assets/images/logos/linkedin.svg', alt: 'LinkedIn' },
  { href: 'https://github.com/cynthiashen', img: '/assets/images/logos/github.svg', alt: 'GitHub' },
  { href: 'mailto:cynthiashen18@gmail.com', img: '/assets/images/logos/mail.svg', alt: 'Email' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="nav-footer">
        {socialLinks.map(({ href, img, alt }) => (
          <li key={alt} className="footer-li">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <img src={img} alt={alt} style={{ width: 25 }} />
            </a>
          </li>
        ))}
      </nav>
    </footer>
  )
}
