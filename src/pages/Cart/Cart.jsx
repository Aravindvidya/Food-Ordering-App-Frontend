import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {

// // Store quantity in a variable
// const itemQuantity = cartItems[item._id]; // New variable to hold the quantity

// // Check if the item quantity is greater than 0
// if (itemQuantity > 0) { 
//   return (
//     <div key={item._id} className='cart-items-item'> {/* Add key here */}
//       <img src={`${url}/images/${item.image}`} alt="" />
//       <p>{item.name}</p>
//       <p>&#8360;{item.price}</p>
//       <p>{itemQuantity}</p>
//       <p>&#8360; {item.price * itemQuantity}</p>
//       <p onClick={() => removeFromCart(item._id)} className='cross'>X</p>
//       <hr />
//     </div>
//   );
// }
// return null; // Return null for items not in the cart to avoid undefined errors
// })}
// </div>
// <div className='cart-bottom'>
// <div className='cart-total'>
// <h2>Cart Totals</h2>
// <div>
//   <div className="cart-total-details">
//     <p>Subtotal</p>
//     <p>&#8360; {getTotalCartAmount()}</p>
//   </div>
//   <hr />
//   <div className="cart-total-details">
//     <p>Delivery Fee</p>
//     <p>&#8360; {getTotalCartAmount() === 0 ? 0 : 50}</p>
//   </div>
//   <hr />
//   <div className="cart-total-details">
//     <p>Total</p>
//     <p>&#8360; {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 50}</p>
//   </div>
// </div>
// <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
// </div>
// </div>
// </div>
// );
// };

// export default Cart;

          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className='cart-items-title cart-items-item'>
                  <img src={url+"/images/"+item.image} alt="" />
                  <p>{item.name}</p>
                  <p>&#8360;{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>&#8360; {item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>X</p>
                </div>
                <hr />
              </div>
            )
          }
          return null;
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>&#8360; {getTotalCartAmount()}</p>
            </div>
              <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>&#8360; {getTotalCartAmount()===0?0:50}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Total</p>
              <p>&#8360; {getTotalCartAmount()===0?0:getTotalCartAmount()+50}</p>
            </div>
          </div>
            <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div >
        </div>
      </div>
    </div>
  )
}

export default Cart



