import React from 'react'
import './Edit.css'
import food from '../Assets/food.png';
import sub from '../Assets/sub.png';
import shop from '../Assets/shop.png';
import car from '../Assets/car.png';
import trash from '../Assets/trash.png';

export default function DList() {
  return (
    <div className='list'>
        <div className="expense">
            <div className='icon'>
                <img src={food} alt='food' className='expen'/>
            </div>
            <div className='reason'>
                <p className='thing'>Foods</p>
                <p className='reas'>Buy a lunch</p>
            </div>
            <div className="detail1">
                <p className="price">-Rs.500.00</p>
                <p className="time">10:00 PM</p>
            </div>
            <div className="trash">
                <img src={trash} alt='delete' className='delete1'/>
            </div>
        </div>

        <div className="expense">
            <div className='icon'>
                <img src={sub} alt='subscription' className='expen'/>
            </div>
            <div className='reason'>
                <p className='thing'>Subscription</p>
                <p className='reas'>Desney + Annual...</p>
            </div>
            <div className="detail2">
                <p className="price">-Rs.1500.00</p>
                <p className="time">11:30 AM</p>
            </div>
            <div className="trash">
                <img src={trash} alt='delete' className='delete2'/>
            </div> 
        </div>

        <div className="expense">
            <div className='icon'>
                <img src={shop} alt='shopping' className='expen'/>
            </div>
            <div className='reason'>
                <p className='thing'>Shopping</p>
                <p className='reas'>Buy some grocery</p>
            </div>
            <div className="detail3">
                <p className="price">-Rs.1500.00</p>
                <p className="time">11:30 AM</p>
            </div>
            <div className="trash">
                <img src={trash} alt='delete' className='delete3'/>
            </div>  
        </div>

        <div className="expense">
            <div className='icon'>
                <img src={car} alt='tranportation' className='expen'/>
            </div>
            <div className='reason'>
                <p className='thing'>Transportation</p>
                <p className='reas'>Colombo to Bording Room</p>
            </div>
            <div className="detail4">
                <p className="price">-Rs.500.00</p>
                <p className="time">05:00 PM</p>
            </div>
            <div className="trash">
                <img src={trash} alt='delete' className='delete4'/>
            </div>   
        </div>
      
    </div>
  )
}
