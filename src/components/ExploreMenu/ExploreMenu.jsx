import React from 'react'
import './ExploreMenu.css'
import {menu_list} from  '../../assets/assets'

const ExploreMenu = ({category, setCategory})=> {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-test'> Explore our diverse menu, crafted to satisfy every craving! From mouthwatering appetizers and hearty mains to delightful desserts and refreshing beverages, we offer a wide variety of options to suit every taste. </p>
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
          return(
            <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
               <img className={category=== item.menu_name?"active":""} src={item.menu_image} alt=""/>
               <p>{item.resturant_name}</p>
            </div>
          )})}
      </div>
      <hr/>
    </div>
  )}
export default ExploreMenu;