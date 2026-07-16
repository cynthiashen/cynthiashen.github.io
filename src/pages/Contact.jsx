import { usePageTitle } from '../hooks/usePageTitle'
import './Subpage.css'

export default function Contact() {
  usePageTitle('contact', 'palevioletred')
  return (
    <>
      <h1>contact</h1>
      <div className="container-text">
        find me elsewhere on the internet:
        <br />
        <ul>
          <li><a href="https://www.instagram.com/cynthiashenn/" target="_blank" rel="noopener noreferrer">instagram</a></li>
          <li><a href="https://www.linkedin.com/in/cynthiashen18/" target="_blank" rel="noopener noreferrer">linkedin</a></li>
          <li><a href="https://github.com/cynthiashen" target="_blank" rel="noopener noreferrer">github</a></li>
        </ul>
      </div>
    </>
  )
}
