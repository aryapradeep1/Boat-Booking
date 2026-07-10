import React from 'react'

const NaviBar = () => {
  return (
    <div>
        
            <nav class="navbar bg-body-tertiary">
        <form class="container-fluid justify-content-start">
    <button class="btn btn-outline-success me-2" type="button">Add Boat</button>
    <button class="btn btn-sm btn-outline-secondary" type="button">Search Boat</button>
     <button class="btn btn-outline-success me-2" type="button">Delete boat Boat</button>
     <button class="btn btn-sm btn-outline-secondary" type="button">View Boat</button>
  </form>
</nav>


    </div>
  )
}

export default NaviBar