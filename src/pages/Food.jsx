import { useEffect } from 'react'
import { usePageTitle } from '../hooks/usePageTitle'
import './Subpage.css'

export default function Food() {
  usePageTitle("cynth's kitchen", 'lightseagreen')
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      if (script.parentNode) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <>
      <h1>cynth's kitchen</h1>
      <div className="container">
        <div className="container-text">
          Food has always been a big part of my life.
          <br /><br />
          As a kid, I loved watching cooking shows on Saturday mornings. I also spent a lot of time helping out with simple tasks in the kitchen like peeling potatoes, chopping vegetables, and scrambling eggs. Our family always ate dinner together, and it really made me appreciate the care that goes into a home cooked meal that you can share with your loved ones.
          <br /><br />
          From college onward, when I had to start feeding myself, I became a lot more adventurous with food. I stumbled upon the incredible food culture of the Bay Area, hearing about Alice Waters (and even trying her restaurant), and discovering the incredibly diverse cuisines of the Bay Area.
          <br /><br />
          Now I try to make the most of the fact that I have access to some of the most amazing ingredients around. I shop at the Farmers' Market and local grocery stores as much as I can and get a lot of inspiration from the amazing produce and spices available.
          <br /><br />
          On a whim, I started documenting my cooking and baking journey on Instagram. If you want to see more of my kitchen, check me out <a href="https://www.instagram.com/cynthskitchen" target="_blank" rel="noopener noreferrer">@cynthskitchen!</a>
        </div>
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/CE2TAi6lQA2/?utm_source=ig_embed"
          data-instgrm-version="13"
          style={{ background: '#FFF', border: 0, borderRadius: 3, boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: 1, maxWidth: 540, minWidth: 0, padding: 0, width: '100%', boxSizing: 'border-box' }}
        >
          <div style={{ padding: 16 }}>
            <a href="https://www.instagram.com/p/CE2TAi6lQA2/?utm_source=ig_embed" target="_blank" rel="noopener noreferrer" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: 14, lineHeight: 17, marginTop: 8, overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              A post shared by cynthia (@cynthskitchen)
            </a>
          </div>
        </blockquote>
      </div>
    </>
  )
}
