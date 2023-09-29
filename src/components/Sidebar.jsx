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
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span className='{}'>Dashboard</span></a>
</li>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseTwo"
        aria-expanded="true" aria-controls="collapseTwo">
       <i class="fa-thin fa-memo-pad"></i>
        <span>Lab Test</span>
    </a>
</li>

{/* <!-- Nav Item - Utilities Collapse Menu --> */}
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
        
        <span>Appointment</span>
    </a>
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
       
        <span>Medical Order</span>
    </a>
</li>
<li className="nav-item">
    <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseUtilities"
        aria-expanded="true" aria-controls="collapseUtilities">
          <i class="fa-thin fa-memo-pad"></i>
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