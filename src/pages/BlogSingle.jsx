import img1 from '../assets/images/img9.jpg';
import img2 from '../assets/images/img5.jpg';
import { BlogCard } from '../components';
export const BlogSingle = () => {

  return (
    <div className="blog-single-container">
        <div className="blog-content">
            <div className="blog-image">
                <img src={img1} alt="" />
            </div>
            <div className="blog-content">
                <div className="categories">
                    <div className="primary-btn">Glasses</div>
                    <div className="primary-btn">Glasses</div>
                    <div className="primary-btn">Glasses</div>
                </div>
                <div className="title">Easy Fixes For Home Decor</div>
                <div className="p-content soft-text">By Wpbingo onSeptember 30, 2022</div>
                <div className="underline"></div>

                <div className="content">
                    <p className="p-header">Our goal has always been to motivate, encourage and release our fellow creatives to do their thing</p>
                    <p className="p-content">Sed a libero. Mauris sollicitudin fermentum libero. Phasellus volutpat, metus eget egestas mollis, lacus lacus blandit dui id egestas quam mauris ut lacus. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Cras ultricies mi eu turpis hendrerit fringilla.In auctor lobortis lacus. Praesent turpis. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                </div>

                <div className="image-content">
                    <img src={img2} alt="" />
                    <img src={img2} alt="" />
                </div>

                <div className="quot">
                    <p className='p-content'>“The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.”</p>
                </div>
                <div className="content">
                    <p className='p-content'>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p>
                    <p className='p-content'>Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Aenean commodo ligula eget dolor. Nulla facilisi. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum.</p>
                </div>
            </div>
            <div className="blog-comments"></div>
        </div>

        <div className="recent-blogs">
            <div className="latestProduct">
                <div className="carouselContainer">
                    <p className="title">Other Blogs</p>
                    <div className="blogCards">
                        <BlogCard/>
                        <BlogCard/>
                        <BlogCard/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
