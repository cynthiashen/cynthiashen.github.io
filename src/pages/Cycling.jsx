import { usePageTitle } from '../hooks/usePageTitle'
import './Subpage.css'

export default function Cycling() {
  usePageTitle('cycling', 'lightseagreen')
  return (
    <>
      <h1>cycling</h1>
      <div className="container">
        <div className="container-text">
          I didn't learn how to ride a bike until I was sixteen, but have come a long way since then. I started out in college biking around with a cheap used mountain bike I got from Craigslist. At the time, it was mostly a way of getting around without a car.
          <br /><br />
          Then in 2020, while living in San Francisco, I got a nice shiny red single speed bike as a hand me down and fell in love with biking in SF. In 2022 I bit the bullet and bought a fancy new gravel bike, and since then have dabbled in longer rides in North Bay, and have even experimented with a little bit of bike touring with some ultra-light camping gear.
          <br /><br />
          Cycling has really become an amazing way for me to feel more connected with my community. I've used it as a means of exploring different neighborhoods on weekends and mornings before work, and have found pockets of the city I never would've discovered otherwise. All this without having to worry about the pollution / environmental impact, AND while squeezing in a bit of exercise at the same time! I honestly can't imagine living in SF without my bike anymore.
          <br /><br />
          If you want to follow more of my cycling adventures (most of which is just me exploring random parts of the city), check out my <a href="https://www.strava.com/athletes/25619535" target="_blank" rel="noopener noreferrer">strava!</a>
        </div>
        <div className="container-images">
          <img className="container-image" src="/assets/images/interests/cycling.jpg" alt="Cycling" />
          <img className="container-image" src="/assets/images/interests/cycling_5.jpg" alt="Cycling" />
          <img className="container-image" src="/assets/images/interests/cycling_4.jpg" alt="Cycling" />
          <iframe
            title="Strava activity"
            height="600"
            width="500"
            style={{ border: 'none' }}
            allowTransparency="true"
            src="https://strava-embeds.com/activity/8783378349"
          />
        </div>
      </div>
    </>
  )
}
