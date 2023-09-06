// import React, { useState } from 'react'

export default function About(props) {
  return (
    <>
      <div className={`accordion container  `} id="accordionExample">
        <div className=" bg-white accordion-item" >
          <h2 className=" bg-white accordion-header">
            <button
              className=" bg-white accordion-button"
              
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className=" bg-white accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className=" bg-white accordion-body"
              
            >
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className=" bg-white accordion-item" >
          <h2 className=" bg-white accordion-header">
            <button
              
              className="accordion-button collapsed bg-white"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className=" bg-white accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body bg-white"
              
            >
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className=" bg-white accordion-item" >
          <h2 className=" bg-white accordion-header">
            <button
              
              className=" bg-white accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className=" bg-white accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className=" bg-white accordion-body"
              
            >
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white container"></div>
    </>
  );
}
