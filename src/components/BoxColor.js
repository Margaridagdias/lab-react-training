import React from 'react'

function BoxColor(props) {
    return(
        <div style={{backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`, width: `300px`}}>

        <div>
            <h4>{`RGB(${props.r},${props.g},${props.b} )`} </h4>
        </div>

        </div>
        )
}


export default BoxColor