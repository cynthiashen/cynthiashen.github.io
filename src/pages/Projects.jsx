import { usePageTitle } from '../hooks/usePageTitle'
import './Subpage.css'

export default function Projects() {
  usePageTitle('games', 'olivedrab')
  return (
    <>
      <h1>games</h1>
      <div className="container-text">
        here are some games that I made when I first learned Javascript in college:
        <br />
        <ul>
          <li><a href="/games/breakout.html" target="_blank" rel="noopener noreferrer">breakout</a></li>
          <li><a href="/games/pong1.html" target="_blank" rel="noopener noreferrer">pong 1 player</a></li>
          <li><a href="/games/pong2.html" target="_blank" rel="noopener noreferrer">pong 2 player</a></li>
          <li><a href="/games/switch.html" target="_blank" rel="noopener noreferrer">switch</a></li>
        </ul>
      </div>
    </>
  )
}
