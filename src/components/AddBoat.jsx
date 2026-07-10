import React from 'react'
import NaviBar from './NaviBar'

const AddBoat = () => {
  return (
    <div>
      <NaviBar />

      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-12 col-md-10 col-lg-8 col-xl-8 col-xxl-8">

            <div className="card shadow-lg border-0">
              <div className="card-header bg-primary text-white text-center">
                <h3>🚤 Add House Boat</h3>
              </div>

              <div className="card-body">

                <div className="row g-3">

                  <div className="col-12 col-sm-12 col-md-6">
                    <label className="form-label">Boat Id:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-12 col-sm-12 col-md-6">
                    <label className="form-label">Boat Name:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-12 col-sm-12 col-md-6">
                    <label className="form-label">Category:</label>
                    <select className="form-select">
                      <option>AC Boat</option>
                      <option>House Boat</option>
                      <option>Motor Boat</option>
                    </select>
                  </div>

                  <div className="col-12 col-sm-12 col-md-6">
                    <label className="form-label">Bedroom:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-12 col-sm-12 col-md-6">
                    <label className="form-label">Boat Capacity:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-12 col-sm-12 col-md-6">
                    <label className="form-label">AC Type:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-12 col-sm-12 col-md-6">
                    <label className="form-label">Price per Night:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-12 col-sm-12 col-md-6">
                    <label className="form-label">Boat Route:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-12 col-sm-12 col-md-6">
                    <label className="form-label">Built Year:</label>
                    <input type="date" className="form-control" />
                  </div>

                  <div className="col-12 col-sm-12 col-md-6">
                    <label className="form-label">Image URL:</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-12">
                    <label className="form-label">Description:</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Description"
                    ></textarea>
                  </div>

                  <div className="col-12 text-center mt-3">
                    <button className="btn btn-success px-5">
                      🚤 Add House Boat
                    </button>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AddBoat