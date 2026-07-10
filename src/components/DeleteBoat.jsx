import React from 'react'
import NaviBar from './NaviBar'

const DeleteBoat = () => {
  return (
    <div>
        <NaviBar/>
            <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                      <center><u><h2 style={{color:"#77DD77"}}>🛥️ 𝓓𝓮𝓵𝓮𝓽𝓮 𝓑𝓸𝓪𝓽𝓼</h2></u></center>
                    <br></br>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Boat Id</label>
                            <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                           <button className="btn btn-danger">Delete</button>

                    </div>
                </div>

                </div>
            </div>
        </div>


    </div>
  )
}

export default DeleteBoat