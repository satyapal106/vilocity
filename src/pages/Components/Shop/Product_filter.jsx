
import img10 from "../../../assets/shop/1-600x600.jpg";
import img22 from "../../../assets/shop/products-9-1-600x600.jpg";
import img23 from "../../../assets/shop/products-35-2-600x600.jpg";

export const Product_filter = () => {
  return (
    <div className="col-md-4 product-filter">
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse show categories Category-section"
            aria-labelledby="headingTwo"
          >
            <h4>Categories</h4>
            <div className="accordion-body">
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked1"
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked1">
                    All Glasses
                  </label>
                  <span className="badge badge-secondary float-end">(8)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked2"
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked2">
                    Eco-Friendly
                  </label>
                  <span className="badge badge-secondary float-end">(7)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked3"
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked3">
                    Glitter Glasses
                  </label>
                  <span className="badge badge-secondary float-end">(9)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckChecked4"
                  />
                  <label className="form-check-label" htmlFor="flexCheckChecked4">
                    Kid&apos;s Glasses
                  </label>
                  <span className="badge badge-secondary float-end">(6)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Men&apos;s Glasses
                  </label>
                  <span className="badge badge-secondary float-end">(3)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Street Style
                  </label>
                  <span className="badge badge-secondary float-end">(6)</span>
                </div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Women&apos;s Glasses
                  </label>
                  <span className="badge badge-secondary float-end">(9)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="underline"></div>
          <div>
            <div className="feature-product-title text-center">
              <h4>Feature Products</h4>
            </div>
            <div className="feature-product">
              <span>
                <img src={img10} alt="" />
              </span>
              <span>
                <h4>Red Printed T-shirt</h4>
              </span>
            </div>
            <div className="feature-product">
              <span>
                <img src={img22} alt="" />
              </span>
              <span>
                <h4>Red Printed T-shirt</h4>
              </span>
            </div>
            <div className="feature-product">
              <span>
                <img src={img23} alt="" />
              </span>
              <span>
                <h4>Red Printed T-shirt</h4>
              </span>
            </div>
          </div>
        </div>
  )
}
