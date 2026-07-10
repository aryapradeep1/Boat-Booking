import React, { useEffect, useState } from 'react'
import NaviBar from './NaviBar'
import axios from 'axios'

const ViewBoat = () => {

        const[data,changedata]=useState([])
        const fetchdata= ()=>{
            axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/houseboat.json").then(

                (response)=>{
                    changedata(response.data)
                }

            ).catch()
        }
        useEffect(
            ()=>{
                fetchdata()
            },[]
        )

  return (
    <div>
        <NaviBar/>
    <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            
                    <center><u><h2 style={{color:"#77DD77"}}>⚓ Our Boats</h2></u></center>
                    <br></br>
            <div className="row g-3">
               {data.map(
                (value,index)=>{
                    return(
                         <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                            <div class="card">
                        <div class="card-header">
                        Places
                                            </div>
                             <ul class="list-group list-group-flush">
                                <li class="list-group-item"><img src={value.image} class="card-img-top" alt="..." height={400}/></li>
                                     <li class="list-group-item">{value.boatId}</li>
                                <li class="list-group-item">{value.boatName}</li>
                             <li class="list-group-item">{value.category}</li>
                             <li class="list-group-item">{value.bedrooms}</li>
                             <li class="list-group-item">{value.capacity}</li>
                             <li class="list-group-item">{value.acType}</li>
                             <li class="list-group-item">{value.route}</li>
                             <li class="list-group-item">{value.builtYear}</li>
                             <li class="list-group-item">{value.description}</li>
                             
                             </ul>
                        </div>


                </div>
                    )
                }
               )}
            </div>

            </div>
        </div>
    </div>

    </div>
  )
}

export default ViewBoat