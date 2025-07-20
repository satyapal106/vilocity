import img from '../../assets/shop/products-5.jpg';
export const SingleProduct = () => {
  return (
    <>
    <div className="product-body">
        <div className="theProduct">
            <div className="product-images">
            <img src={img} alt=""/>
            </div>
            <div className="product-details">
            <h1 className="product-name">BMW m5</h1>
            <p className="product-category soft-text">Sport&apos;s Car</p>
            <div className="product-price">
                <p>MRP:</p>
                <p className="original-price ">Rs. <span className="soft-text">1.73 Cr</span></p>
                <p className="discount-price">1.21 Cr <span className="discount">30% off</span></p>
            </div>
            <p className="soft-text">Including all taxes.</p>
            <div className="product-options">
                
            </div>
            <div className="action-buttons">
                <a href="#">Add to Bag</a>
                <a href="#">Wishlist</a>
            </div>
            <div className="product-description">
                <h3>Product Details</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            
            <p className="product-quantity">Net Quantity: 1</p>
            </div>
        </div>
    </div>
    </>
  )
}
