import React from 'react'
import { showNotification } from '../helpers/helper'

const Notification = ({ showNotification }) => {
    return (
        <div className={`notification-container ${showNotification ? 'show' : ''}`} >
            <p>You have already entered this letter</p>
        </div>
    )
}

export default Notification
