import { useEffect } from 'react'
import { usePageTitle } from '../hooks/usePageTitle'
import './Subpage.css'
import './Books.css'

export default function Books() {
  usePageTitle('books', 'lightseagreen')
  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://www.goodreads.com/review/grid_widget/1077640.Cynthia's%20bookshelf:%20read?cover_size=small&hide_link=true&hide_title=true&num_books=32&order=d&shelf=read&sort=date_read&widget_id=1622258817"
    script.type = 'text/javascript'
    script.charset = 'utf-8'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <>
      <h1>books</h1>
      <div className="container">
        <div className="container-text">
          At the start of 2021, I made it a goal to read 25 books the whole year. I ended up finishing that goal by the end of May.
          <br /><br />
          It turns out that reading a lot is really easy, once you find the things you're actually interested in reading and just pick up a book.
          <br /><br />
          These days, I haven't been very picky about what I read. Whether it's historical fiction, sci-fi, fantasy, classics, non-fiction, memoirs, self help, cookbooks, or anything else: I've been trying to find space on my bookshelf for it. The only real filter that I've been using to pick books comes from my personal goal to diversify the kind of authors I read from. I want to make sure I'm hearing stories from voices that are not normally heard from (women, people of color, lgbtq+, etc.)
          <br /><br />
          I've since extended my goal to reading 52 books in 2021 -- one book every week. If you have any reading suggestions (or want to hear any of my own book recs), feel free to check out my <a href="https://www.goodreads.com/user/show/1077640-cynthia-shen" target="_blank" rel="noopener noreferrer">goodreads!</a>
        </div>
        <div className="books-widgets">
          <div id="gr_grid_widget_1622258817">
            <div className="gr_grid_container">
              <div className="gr_grid_book_container"><a title="Interior Chinatown" rel="nofollow" href="https://www.goodreads.com/book/show/44436221-interior-chinatown"><img alt="Interior Chinatown" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1558394042l/44436221._SX50_.jpg" /></a></div>
              <div className="gr_grid_book_container"><a title="The Soul of a Woman" rel="nofollow" href="https://www.goodreads.com/book/show/54075385-the-soul-of-a-woman"><img alt="The Soul of a Woman" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1607320425l/54075385._SY75_.jpg" /></a></div>
              <div className="gr_grid_book_container"><a title="The Rose Code" rel="nofollow" href="https://www.goodreads.com/book/show/53914937-the-rose-code"><img alt="The Rose Code" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1596548551l/53914937._SY75_.jpg" /></a></div>
              <div className="gr_grid_book_container"><a title="Mrs. Dalloway" rel="nofollow" href="https://www.goodreads.com/book/show/14942.Mrs_Dalloway"><img alt="Mrs. Dalloway" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1479336522l/14942._SY75_.jpg" /></a></div>
              <div className="gr_grid_book_container"><a title="One to Watch" rel="nofollow" href="https://www.goodreads.com/book/show/53103895-one-to-watch"><img alt="One to Watch" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1584401917l/53103895._SX50_.jpg" /></a></div>
              <div className="gr_grid_book_container"><a title="Homegoing" rel="nofollow" href="https://www.goodreads.com/book/show/27071490-homegoing"><img alt="Homegoing" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1448108591l/27071490._SY75_.jpg" /></a></div>
              <div className="gr_grid_book_container"><a title="The Vanishing Half" rel="nofollow" href="https://www.goodreads.com/book/show/51791252-the-vanishing-half"><img alt="The Vanishing Half" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1577090827l/51791252._SX50_SY75_.jpg" /></a></div>
              <div className="gr_grid_book_container"><a title="Circe" rel="nofollow" href="https://www.goodreads.com/book/show/35959740-circe"><img alt="Circe" border="0" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565909496l/35959740._SY75_.jpg" /></a></div>
              <noscript>Share <a rel="nofollow" href="/">book reviews</a> and ratings with Cynthia on Goodreads.</noscript>
            </div>
          </div>
          <a href="https://www.goodreads.com/user/show/1077640-cynthia-shen" target="_blank" rel="noopener noreferrer" className="goodreads-link">View full bookshelf on Goodreads</a>
        </div>
      </div>
    </>
  )
}
