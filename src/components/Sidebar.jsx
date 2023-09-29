import React from 'react'


function sidebar() {
  return <>
    <ul className="navbar-nav bg-light sidebar sidebar-light accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}

 {/* <div className='brand  align-items-center'>
    medico sales
 </div> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="javascript(void)">
    
        
   
    <div className="sidebar-brand-text mx-3">Medico sales </div>
</a>




{/* 
<!-- Nav Item - Dashboard --> */}
<li className="nav-item active ">
    <a className="nav-link" href="javascript(void)">
    <i className="fa-solid fa-grid-horizontal" ></i>
    {/* <i className="fa-solid fa-grid-horizontal" style={{color: "#155fe0",}} /> */}
        <span>Dashboard</span></a>
</li>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)">
   
       <span>Lab Test</span>
    </a>
</li>

{/* <!-- Nav Item - Utilities Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" >
   
        <span>Appointment</span>
    </a>
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" >
       <span>Medical Order</span>
    </a>
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" >
       <span>Message</span>
    </a>
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" >
        <span>Payment</span>
    </a>
</li>
<li className="nav-item">
<a className="nav-link collapsed" href="javascript(void)" >
        <span>Setting</span>
    </a>
</li>

</ul>

  </>
}

export default sidebar