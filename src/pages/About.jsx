import { usePageTitle } from '../hooks/usePageTitle'
import './Subpage.css'

export default function About() {
  usePageTitle('about', 'lightseagreen')
  return (
    <>
      <h1>about me</h1>
      <div className="container">
        <div className="container-text">
          I grew up in Cupertino, graduated from UC Berkeley, and now live in San Francisco, so you could definitely say I'm a Bay Area girl.
          <br /><br />
          I love cooking, reading, knitting, crocheting, yoga, math, trivia, crosswords, climbing, and biking! I'm hoping this space will be a fun way for me to share some of the things I'm passionate about with the world.
          <br /><br />
          While I am a full time software engineer, I have minimal front end experience and am putting together this website as a way to learn more about web development as well as exercise my creativity. We'll see how this goes!
        </div>
        <div style={{ marginTop: '15px' }}>
          <img className="container-image" src="/assets/images/cynthia_about.jpg" alt="Cynthia" />
        </div>
      </div>
    </>
  )
}
