import { usePageTitle } from '../hooks/usePageTitle'
import './Subpage.css'

export default function Yarn() {
  usePageTitle('knitting & crocheting', 'lightseagreen')
  return (
    <>
      <h1>knitting & crocheting</h1>
      <div className="container">
        <div className="container-text">
          In 2021, my friend taught me how to crochet. It's a hobby that I picked up really quickly, as I've always been drawn to different creative outlets.
          <br /><br />
          Since then, I've also taught myself how to knit through various youtube videos (shoutout to Norman from Nimble Needles for having the best comprehensive guides) and have made various beanies, cardigans, scarves, sweaters, tank tops, and even blankets.
          <br /><br />
          If you're interested in seeing more of my fiber projects, check out my <a href="https://www.ravelry.com/people/cynthiashen18" target="_blank" rel="noopener noreferrer">ravelry!</a>
        </div>
        <div className="container-images">
          <img className="container-image" src="/assets/images/interests/yarn_1.jpg" alt="Yarn project" />
          <img className="container-image" src="/assets/images/interests/yarn_3.jpg" alt="Yarn project" />
          <img className="container-image" src="/assets/images/interests/yarn_2.jpg" alt="Yarn project" />
          <img className="container-image" src="/assets/images/interests/yarn_4.jpg" alt="Yarn project" />
        </div>
      </div>
    </>
  )
}
