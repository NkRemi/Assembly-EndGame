import React from 'react'

export default function Language({props}) {
   
    let styles = {
        backgroundColor: props.backgroundColor,
        color: props.color
    }
    
  return (
    <>
        <span className={'chip '+props.className} style={styles}>
            {props.name}
        </span>
    </>
  )
}
