import React from 'react'
import NaviBar from './NaviBar'

const AddBoat = () => {
  return (
    <div>
        <NaviBar/>
        <div className="conatiner">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label htmlFor="" className="form-label">Boat Id:</label>
                                    <input type="text" className="form-control" />



                        </div>
                        <div className="col col-12 col sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                             <label htmlFor="" className="form-label">Boat Name:</label>
                                    <input type="text" className="form-control" />



                        </div>
                        <div className="col col-12 col sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                 <label htmlFor="" className="form-label">Category:</label>
                                <select name="" id="" className="form-control">
                                    <option className="option">AC Boat</option>
                                    <option className="option">House Boat</option>
                                     <option className="option">Motor Boat</option>
                                </select>



                        </div>
                        <div className="col col-12 col sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                     <label htmlFor="" className="form-label">Bedroom:</label>
                                    <input type="text" className="form-control" />



                        </div>
                        <div className="col col-12 col sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Boat capsity:</label>
                                    <input type="text" className="form-control" />




                        </div>
                        <div className="col col-12 col sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">AC Type:</label>
                                    <input type="text" className="form-control" />




                        </div>
                        <div className="col col-12 col sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                        <label htmlFor="" className="form-label">Price per Night:</label>
                                    <input type="text" className="form-control" />




                        </div>
                        <div className="col col-12 col sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Boat Route:</label>
                                    <input type="text" className="form-control" />




                        </div>
                        <div className="col col-12 col sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                                <label htmlFor="" className="form-label">Built year:</label>
                                    <input type="date" className="form-control" />




                        </div>
                        <div className="col col-12 col sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                    <label htmlFor="" className="form-label">Image url:</label>
                                    <input type="text" className="form-control" />




                        </div>
                        <div className="col col-12 col sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                               <textarea name="" id="" className="form-control" placeholder='Description'></textarea>


                        </div>
                        <div className="col col-12 col sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <button className="btn btn-success">Submit</button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBoat