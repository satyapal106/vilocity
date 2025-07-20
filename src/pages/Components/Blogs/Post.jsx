import { Link } from "react-router-dom"
export const Post = () => {
  return (
    <div className="blog-post">
      <main1>
        <Link to={'/blogs/single-blog/69'} className="post-thumbnail" title="Easy Fixes For Home Decor">
          <img className="pic" loading="lazy"  src="https://wpbingosite.com/wordpress/furnive/wp-content/uploads/2018/05/1.jpg" alt="" decoding="async" />
          <button className="button">
            <a ></a>
            Dining &amp; Kitchen
          </button>
        </Link>

      </main1>
      <aside1>

        <div className="text">

          <a className="text_input">
            <time className="date" >September 30, 2022</time>
          </a>

          <a className="text_input">
            <h3 className="head1">Easy Fixes For Home Decor</h3>
          </a>

          <a className="desc">
            <p className="desc">Our goal has always been to motivate, encourage and
              release our fellow creatives to do their thing  Sed a...</p>
          </a>

          <Link to={'/blogs/single-blog/96'} className="read_more">
            Read More
          </Link>

        </div>
      </aside1>
    </div>
  )
}
