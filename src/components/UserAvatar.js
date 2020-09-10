import React from 'react'

export const UserAvatar = ({name, src = ''}) => (
    <div className="d-flex align-items-center">
        <h3>{name}</h3>
        <div className="text-center">
            <img src={src} className="rounded" alt="..."/>
        </div>
    </div> 
)