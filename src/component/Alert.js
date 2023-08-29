import React from 'react'

function Alert(props) {
    const capitalize = (word) =>
    {
        const l = word.toLowerCase();
        return l.charAt(0).toUpperCase() + l.slice(1) ;
    }
  return (
    props.alert && <div>
        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
             <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
    </div>
  )
}

export default Alert