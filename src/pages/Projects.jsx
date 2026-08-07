import { usePageTitle } from '../hooks/usePageTitle'
import posthog from '../posthog'
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
          <li><a href="/games/breakout.html" target="_blank" rel="noopener noreferrer" onClick={() => posthog.capture('game_opened', { game: 'breakout' })}>breakout</a></li>
          <li><a href="/games/pong1.html" target="_blank" rel="noopener noreferrer" onClick={() => posthog.capture('game_opened', { game: 'pong_single_player' })}>pong 1 player</a></li>
          <li><a href="/games/pong2.html" target="_blank" rel="noopener noreferrer" onClick={() => posthog.capture('game_opened', { game: 'pong_two_player' })}>pong 2 player</a></li>
          <li><a href="/games/switch.html" target="_blank" rel="noopener noreferrer" onClick={() => posthog.capture('game_opened', { game: 'switch' })}>switch</a></li>
        </ul>
      </div>
    </>
  )
}
