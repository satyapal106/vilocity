import { Post } from "./Components/Blogs/Post";
import { Latest } from "./Components/Blogs/Latest";
import '../style/Blogs.scss';

export const Blogs = () => {
  return (
    <div className="blogs-container">
      <header>
        <h1 className="App-header">Blogs</h1>
      </header>

      <main>
        <Post />
        <Post />
        <Post />
      </main>

      <aside>
        <div className="blog-categories">
          <div className='headcontainer'>
            <h3 className="widget-title">Categories</h3>
          </div>
          <div className='bodycontainer'>
            <a href="">
              <h5 className="widget-cate">Dining & Kitchen</h5>
            </a>
          </div>
          <div className='bodycontainer'>
            <a href="">
              <h5 className="widget-cate">Dining & Kitchen</h5>
            </a>
          </div>
          <div className='bodycontainer'>
            <a href="">
              <h5 className="widget-cate">Dining & Kitchen</h5>
            </a>
          </div>
          <div className='bodycontainer'>
            <a href="">
              <h5 className="widget-cate">Dining & Kitchen</h5>
            </a>
          </div>
          <div className='bodycontainer'>
            <a href="">
              <h5 className="widget-cate">Dining & Kitchen</h5>
            </a>
          </div>
          <div className='bodycontainer'>
            <a href="">
              <h5 className="widget-cate">Dining & Kitchen</h5>
            </a>
          </div>
        </div>

        <div className="blog-categories">
          <div className='headcontainer'>
            <h3 className="widget-title">Latest Posts</h3>
          </div>
          <Latest />
          <Latest />
          <Latest />
        </div>

        <div className="blog-categories">
          <div className='headcontainer'>
            <h3 className="widget-title">Socials</h3>
          </div>
          <div className="bodycontainer mt-7 mb-5">
            <ul className='social'>
              <li>
                <a className="icons me-3" href=''>
                  {/* <FontAwesomeIcon icon={faTwitter} /> */}
                </a>
              </li>
              <li>
                <a className="icons me-3" href=''>
                  {/* <FontAwesomeIcon icon={faInstagram} /> */}
                </a>
              </li>
              <li>
                <a className="icons me-3" href=''>
                  {/* <FontAwesomeIcon icon={faFacebook} /> */}
                </a>
              </li>
              <li>
                <a className="icons me-3" href=''>
                  {/* <FontAwesomeIcon icon={faDribbble} /> */}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="blog-categories">
          <div className='headcontainer'>
            <h3 className="widget-title">Tags</h3>
          </div>

          <div className="tagscontain">
            <a className="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but">Secondary</button>{' '}
            </a>
            <a className="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but">Secondary</button>{' '}
            </a>
          </div>

          <div className="tagscontain">
            <a className="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but">Secondary</button>{' '}
            </a>
            <a className="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but">Secondary</button>{' '}
            </a>
          </div>

          <div className="tagscontain">
            <a className="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but">Secondary</button>{' '}
            </a>
            <a className="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but">Secondary</button>{' '}
            </a>
          </div>

          <div className="tagscontain">
            <a className="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but">Secondary</button>{' '}
            </a>
            <a className="post-thumbnail" href="" title="Easy Fixes For Home Decor">
              <button className="but">Secondary</button>{' '}
            </a>
          </div>

        </div>
      </aside>
    </div>
  )
}
