// Write your JS code here
import Header from '../Header'
import './index.css'

const Products = () => (
  <div>
    <Header />
    <div className="cart-div">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        className="cart-img"
        alt="products"
      />
    </div>
  </div>
)

export default Products
