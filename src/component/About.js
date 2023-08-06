import React, { useState } from 'react'

export default function About() {
    const [mode, setMode] = useState({
        color: 'black',
        border: '1px solid black',
        backgroundColor: 'white'
    });
    const [text, setText] = useState("Enable Dark Mode");
    let btnClicked = ()=>
    {
        if(mode.color === 'black')
        {
            setMode({
                color: 'white',
                border: '1x solid white',
                backgroundColor: 'black'
            });
            setText("Enable Light Mode");
        }
        else
        {
            setMode({
                color: 'black',
                border: '1px solid black',
                backgroundColor: 'white'
            });
            setText("Enable Dark Mode");
        }
    }
  return (
    <>
    <div className="accordion container" id="accordionExample">
  <div className="accordion-item" style={mode}>
    <h2 className="accordion-header">
      <button className="accordion-button" style={mode} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mode}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mode}>
    <h2 className="accordion-header">
      <button style={mode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mode}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={mode}>
    <h2 className="accordion-header">
      <button style={mode} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={mode}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className="container">
<button className="btn btn-primary" onClick={btnClicked}>{text}</button>
</div>
    </>
  )
}
