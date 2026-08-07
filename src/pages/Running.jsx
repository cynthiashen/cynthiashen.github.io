import { usePageTitle } from '../hooks/usePageTitle'
import './Subpage.css'

export default function Running() {
  usePageTitle('running', 'lightseagreen')
  return (
    <>
      <h1>running</h1>
      <div className="container">
        <div className="container-text">
          Coming soon — more about my running adventures here.
        </div>
      </div>
    </>
  )
}
