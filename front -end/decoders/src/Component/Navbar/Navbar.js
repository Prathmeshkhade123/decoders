import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='main'>
    <div className='navbar' >
        <div className='logo'>Logo</div>
        <div className='hammer'>X</div>
    </div>
    <div className='photo'>
        <div className='image'>
                  <img src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' className='image'/>
        </div>
        <div>
            <h3>Ritu's Art Classes</h3>
            <h4>Massa malesuada id potent<br/>
                Aenean etiam ipsum sed nis
            </h4>
        </div>
    </div>
      </div>
  )
}

export default Navbar