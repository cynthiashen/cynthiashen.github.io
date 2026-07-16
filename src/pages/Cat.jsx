import { usePageTitle } from '../hooks/usePageTitle'
import './Subpage.css'

export default function Cat() {
  usePageTitle('cat', 'goldenrod')
  return (
    <>
      <h1>cat</h1>
      <div className="container">
        <div className="container-text">
          this is a picture of pancake
          <br />
          ♥ december 16, 2020 ♥
          <br />
        </div>
        <div style={{ marginTop: '15px' }}>
          <img className="container-image" src="/assets/images/pancake_1.jpg" alt="Pancake the cat" />
        </div>
      </div>
    </>
  )
}
