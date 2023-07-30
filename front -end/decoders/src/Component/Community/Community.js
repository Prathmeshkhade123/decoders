import React from 'react'
import "./Community.css"
const Community = () => {
  return (
      <div>
          <div className="modal-popup">
              <div className="popup-header">
                  <h1>Join Our Community</h1>
              </div>
              <div className="popup-body">
                  <div className="popup-content">
                      <form action="#" className="popup-form">
                          <input type="email" className="popup-form-input" placeholder="Email Address" required/>
                              <button className="popup-form-submit"> Subscribe</button>
                      </form>



                  </div>
              </div>
          </div>
      </div>
     
  )
}

export default Community