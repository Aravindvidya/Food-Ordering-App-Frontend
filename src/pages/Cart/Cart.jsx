// import React, { useContext, useState, useEffect } from 'react'
// import './MyOrders.css'
// import axios from 'axios'
// import { StoreContext } from '../../context/StoreContext';
// import { assets } from '../../assets/assets';
// const MyOrders = () => {
  
//     const{url,token}= useContext(StoreContext);
//   const [data, setData] = useState([]);
  
//   const fetchOrders= async()=>{
//     const response = await axios.post(url+"/api/order/userOrders",{},{headers:{token}});
//     setData(response.data.data);
//     console.log(response.data.data);
//   }


//   useEffect(()=>{
//     if(token){
//         fetchOrders();
//     }
//   },[token])

//   return (
//     <div className='my-orders'>
//         <h2>My Orders</h2>
//         <div className='container'>
//             {data.map((order,index)=>{
//                 return(
//                     <div key={index} className='my-orders-order'>
//                         <img src={assets} alt=""/>
//                         <p>{order.items.map((item, index)=>{
//                            if(index ===order.items.length-1){
//                             return item.name+" X " + item.quantity
//                            }else{
//                             return item.name+" x "+ item.quantity + ","
//                            }
//                         })}</p>

//                         <p>${order.amount}.00</p>
//                         <p>Items:{order.items.length}</p>
//                         <p><span>&#x25cf;</span><b>{order.status}</b></p>
//                         <button onClick={fetchOrders}>Track Order</button>
//                      </div>
//                 )
//             })}
//         </div>
      
//     </div>
//   )
// }

// export default MyOrders

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



