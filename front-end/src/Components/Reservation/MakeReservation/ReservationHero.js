import React from 'react';
import './ReservationHero.css'
import { Button } from 'antd';
import { NavLink } from "react-router-dom";


export default function ReservationHero() {
    return (
        <div className="reservation-hero" id="reservation">
            <h2>Make A Reservation</h2>
            <p><strong>Our restaurant is open between:</strong> 12:00 - 01:00</p>
            <Button><NavLink to="/reservation">Make A Reservation</NavLink></Button>
        </div>
    )
}

