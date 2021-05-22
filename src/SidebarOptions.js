import React from 'react'
import './SidebarOptions.css'

function SidebarOption({ active, Icon, text }) {
    return (
        <div className={active ? 'sidebarOptions active' : 'sidebarOptions'}>
            <Icon className='sidebarOptions__icon' />
            <h2>{text} </h2>
        </div>
    )
}

export default SidebarOption
