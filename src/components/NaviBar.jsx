import React from 'react'

const NaviBar = () => {
  return (
    <div>
        
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Boat Management</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
         <a class="nav-link" href="/">Add boat</a>
        <a class="nav-link" href="/search">search Boat</a>
        <a class="nav-link" href="/delete">delete boat</a>
        <a class="nav-link" href="/view">view boat</a>
       
      </div>
    </div>
  </div>
</nav>


    </div>
  )
}

export default NaviBar