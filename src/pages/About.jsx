import { usePageTitle } from '../hooks/usePageTitle'
import './Subpage.css'

export default function About() {
  usePageTitle('about', 'lightseagreen')
  return (
    <>
      <h1>about me</h1>
      <div className="container">
        <div className="container-text">
          I grew up in Cupertino, graduated from UC Berkeley, and lived in San Francisco for 7 years before moving to New York City in 2026, where I currently reside.
          <br /><br />
          I am a software engineer with 8+ years of experience at several different startups. Idecided to build this website in part to learn more about web development, but moreso to exercise my creativity.

          <br /><br />
          I sometimes joke with my friends that I'm a bit of a hobby collector. I love cooking, baking, reading, knitting, crocheting, math, trivia, crosswords, skiing, biking, and running! 
          Most recently, I've taken up an interest in photography, movies, and wine tasting. I'm hoping this space will be a fun way for me to share some of the things I'm passionate about with the world.

        </div>
        <div style={{ marginTop: '15px' }}>
          <img className="container-image" src="/assets/images/cynthia.jpg" alt="Cynthia" />
        </div>
      </div>
    </>
  )
}
