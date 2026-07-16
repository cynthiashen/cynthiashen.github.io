import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <>
      <div className="banner banner-hero">
        <img className="banner-full-image" src="/assets/images/home/sf.jpg" alt="San Francisco" />
        <div className="banner-welcome">welcome!</div>
      </div>

      <div className="banner banner-intro">
        <div className="banner-text">
          I'm Cynthia, a bay area native currently residing in New York City.
          <br />
          <Link to="/about">
            <button className="banner-button">read more</button>
          </Link>
        </div>
        <img className="banner-image" src="/assets/images/home/cynthia.jpg" alt="Cynthia" />
      </div>

      <div className="banner banner-light">
        <div className="banner-section">
          <img className="banner-section-image" src="/assets/images/home/baking.jpg" alt="Baking" />
          <br />I like to cook!
          <br />
          <Link to="/interests/food">
            <div className="banner-button">read more</div>
          </Link>
          <a href="https://www.instagram.com/cynthskitchen" target="_blank" rel="noopener noreferrer">
            <div className="banner-button">check out my food instagram</div>
          </a>
        </div>

        <div className="banner-section">
          <img className="banner-section-image" src="/assets/images/home/cynthia_bike.jpg" alt="Cycling" />
          <br />I like to bike!
          <br />
          <Link to="/interests/cycling">
            <div className="banner-button">read more</div>
          </Link>
          <a href="https://www.strava.com/athletes/25619535" target="_blank" rel="noopener noreferrer">
            <div className="banner-button">check out my strava</div>
          </a>
        </div>

        <div className="banner-section">
          <img className="banner-section-image" src="/assets/images/home/cynthia_run.jpg" alt="Running" />
          <br />I like to run!
          <br />
          <Link to="/interests/running">
            <div className="banner-button">read more</div>
          </Link>
          <a href="https://www.strava.com/athletes/25619535" target="_blank" rel="noopener noreferrer">
            <div className="banner-button">check out my strava</div>
          </a>
        </div>

        <div className="banner-section">
          <img className="banner-section-image" src="/assets/images/home/books.png" alt="Books" />
          <br />I like to read!
          <br />
          <Link to="/interests/books">
            <div className="banner-button">read more</div>
          </Link>
          <a href="https://www.goodreads.com/user/show/1077640-cynthia-shen" target="_blank" rel="noopener noreferrer">
            <div className="banner-button">check out my goodreads</div>
          </a>
        </div>

        <div className="banner-section">
          <img className="banner-section-image" src="/assets/images/home/knitting.jpg" alt="Yarn" />
          <br />I like to craft!
          <br />
          <Link to="/interests/knitting">
            <div className="banner-button">read more</div>
          </Link>
          <a href="https://www.ravelry.com/people/cynthiashen18" target="_blank" rel="noopener noreferrer">
            <div className="banner-button">check out my ravelry</div>
          </a>
        </div>
      </div>
    </>
  )
}
