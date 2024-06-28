import React from 'react'
import Header from '../../../../Component/Layout/Agent/Header/SearchHeader';
import Sidebar from '../../../../Component/Layout/Agent/Sidebar/Sidebar'
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import hodliday5 from '../../../../assets/images/holiday5.jpg'
import icon1 from '../../../../assets/images/holidayicon1.png'
import icon2 from '../../../../assets/images/holidayicon2.png'
import icon3 from '../../../../assets/images/holidayicon3.png'
import icon4 from '../../../../assets/images/holidayicon4.png'
import { useState } from 'react';
import './Holidaystates.css'
export default function Holidaystates() {
    // Here we have create state and dunction to show side navbar 
    const [showSidebar, setShowSidebar] = useState(false);
    const handleToggleButton = () => {
        setShowSidebar(!showSidebar);
    };
  return (
    <>
      <Header onToggleSidebar={handleToggleButton} />
       <div class="d-block d-lg-none">    <Sidebar showSidebar={showSidebar} onToggleSidebar={handleToggleButton} />  </div>
        {/* ---------------------------------------------------- */}

        <div className="container-fluid holdiaybanner">
            <div className="container">
                   <div className="col-lg-8 mx-auto ">
                        <div className="card shadow p-3 ">
                        <div className="row">
                        <div className="col-lg-8 col-md-8 mb-3">
                        <select class="form-select form-control p-3" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                        </div>
                        <div className="col-lg-4 col-md-4">
                            <button className='holidaybtn w-100'>Search</button>
                        </div>
                      </div>
                      </div>
                   </div>
            </div>
        </div>


        <div className="container holidaystate mt-5">
            <div className="row">
            <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}>
                <div class="card card-stbox border-0 shadow  rounded-3" >
                    <div  class="card-img-top">
                       <div className='state-image'>
                           <div className='hlstdn'>
                              6 Night / 7 Days
                           </div>
                        </div>
                    </div>
                    <div class="card-body    p-2 pt-3 pb-3 ">
                        <h6 className='statename m-0'>Munnar</h6>
                        <div className="col-lg-12 holitexticon">
                            <div className="row mt-3">
                              <div className="col-3 d-flex justify-content-center flex-column">
                                <img src={icon1} alt="" width="40px" className='mx-auto' />  
                                <p className='hlstoviewdt m-0 text-center'> Hotel</p> 
                              </div>
                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon2} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'>Sightseeing</p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon3} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Transfer </p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon4} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Activity </p> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0' style={{ fontSize: "11px" }}>Starting From:</p>  
                            <h4 className='hostateprice m-0 mt-1' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='btn btn-danger mt-1'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                    </Link>
              </div>
              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}>
                <div class="card card-stbox border-0 shadow  rounded-3" >
                    <div  class="card-img-top">
                       <div className='state-image'>
                           <div className='hlstdn'>
                              6 Night / 7 Days
                           </div>
                        </div>
                    </div>
                    <div class="card-body    p-2 pt-3 pb-3 ">
                        <h6 className='statename m-0'>Munnar</h6>
                        <div className="col-lg-12 holitexticon">
                            <div className="row mt-3">
                              <div className="col-3 d-flex justify-content-center flex-column">
                                <img src={icon1} alt="" width="40px" className='mx-auto' />  
                                <p className='hlstoviewdt m-0 text-center'> Hotel</p> 
                              </div>
                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon2} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'>Sightseeing</p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon3} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Transfer </p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon4} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Activity </p> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0' style={{ fontSize: "11px" }}>Starting From:</p>  
                            <h4 className='hostateprice m-0 mt-1' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='btn btn-danger mt-1'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                    </Link>
              </div>
              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}>
                <div class="card card-stbox border-0 shadow  rounded-3" >
                    <div  class="card-img-top">
                       <div className='state-image'>
                           <div className='hlstdn'>
                              6 Night / 7 Days
                           </div>
                        </div>
                    </div>
                    <div class="card-body    p-2 pt-3 pb-3 ">
                        <h6 className='statename m-0'>Munnar</h6>
                        <div className="col-lg-12 holitexticon">
                            <div className="row mt-3">
                              <div className="col-3 d-flex justify-content-center flex-column">
                                <img src={icon1} alt="" width="40px" className='mx-auto' />  
                                <p className='hlstoviewdt m-0 text-center'> Hotel</p> 
                              </div>
                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon2} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'>Sightseeing</p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon3} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Transfer </p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon4} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Activity </p> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0' style={{ fontSize: "11px" }}>Starting From:</p>  
                            <h4 className='hostateprice m-0 mt-1' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='btn btn-danger mt-1'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                    </Link>
              </div>

              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}>
                <div class="card card-stbox border-0 shadow  rounded-3" >
                    <div  class="card-img-top">
                       <div className='state-image'>
                           <div className='hlstdn'>
                              6 Night / 7 Days
                           </div>
                        </div>
                    </div>
                    <div class="card-body    p-2 pt-3 pb-3 ">
                        <h6 className='statename m-0'>Munnar</h6>
                        <div className="col-lg-12 holitexticon">
                            <div className="row mt-3">
                              <div className="col-3 d-flex justify-content-center flex-column">
                                <img src={icon1} alt="" width="40px" className='mx-auto' />  
                                <p className='hlstoviewdt m-0 text-center'> Hotel</p> 
                              </div>
                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon2} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'>Sightseeing</p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon3} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Transfer </p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon4} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Activity </p> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0' style={{ fontSize: "11px" }}>Starting From:</p>  
                            <h4 className='hostateprice m-0 mt-1' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='btn btn-danger mt-1'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                    </Link>
              </div>

              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}>
                <div class="card card-stbox border-0 shadow  rounded-3" >
                    <div  class="card-img-top">
                       <div className='state-image'>
                           <div className='hlstdn'>
                              6 Night / 7 Days
                           </div>
                        </div>
                    </div>
                    <div class="card-body    p-2 pt-3 pb-3 ">
                        <h6 className='statename m-0'>Munnar</h6>
                        <div className="col-lg-12 holitexticon">
                            <div className="row mt-3">
                              <div className="col-3 d-flex justify-content-center flex-column">
                                <img src={icon1} alt="" width="40px" className='mx-auto' />  
                                <p className='hlstoviewdt m-0 text-center'> Hotel</p> 
                              </div>
                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon2} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'>Sightseeing</p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon3} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Transfer </p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon4} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Activity </p> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0' style={{ fontSize: "11px" }}>Starting From:</p>  
                            <h4 className='hostateprice m-0 mt-1' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='btn btn-danger mt-1'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                    </Link>
              </div>

              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}>
                <div class="card card-stbox border-0 shadow  rounded-3" >
                    <div  class="card-img-top">
                       <div className='state-image'>
                           <div className='hlstdn'>
                              6 Night / 7 Days
                           </div>
                        </div>
                    </div>
                    <div class="card-body    p-2 pt-3 pb-3 ">
                        <h6 className='statename m-0'>Munnar</h6>
                        <div className="col-lg-12 holitexticon">
                            <div className="row mt-3">
                              <div className="col-3 d-flex justify-content-center flex-column">
                                <img src={icon1} alt="" width="40px" className='mx-auto' />  
                                <p className='hlstoviewdt m-0 text-center'> Hotel</p> 
                              </div>
                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon2} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'>Sightseeing</p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon3} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Transfer </p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon4} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Activity </p> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0' style={{ fontSize: "11px" }}>Starting From:</p>  
                            <h4 className='hostateprice m-0 mt-1' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='btn btn-danger mt-1'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                    </Link>
              </div>

              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}>
                <div class="card card-stbox border-0 shadow  rounded-3" >
                    <div  class="card-img-top">
                       <div className='state-image'>
                           <div className='hlstdn'>
                              6 Night / 7 Days
                           </div>
                        </div>
                    </div>
                    <div class="card-body    p-2 pt-3 pb-3 ">
                        <h6 className='statename m-0'>Munnar</h6>
                        <div className="col-lg-12 holitexticon">
                            <div className="row mt-3">
                              <div className="col-3 d-flex justify-content-center flex-column">
                                <img src={icon1} alt="" width="40px" className='mx-auto' />  
                                <p className='hlstoviewdt m-0 text-center'> Hotel</p> 
                              </div>
                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon2} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'>Sightseeing</p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon3} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Transfer </p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon4} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Activity </p> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0' style={{ fontSize: "11px" }}>Starting From:</p>  
                            <h4 className='hostateprice m-0 mt-1' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='btn btn-danger mt-1'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                    </Link>
              </div>
              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}>
                <div class="card card-stbox border-0 shadow  rounded-3" >
                    <div  class="card-img-top">
                       <div className='state-image'>
                           <div className='hlstdn'>
                              6 Night / 7 Days
                           </div>
                        </div>
                    </div>
                    <div class="card-body    p-2 pt-3 pb-3 ">
                        <h6 className='statename m-0'>Munnar</h6>
                        <div className="col-lg-12 holitexticon">
                            <div className="row mt-3">
                              <div className="col-3 d-flex justify-content-center flex-column">
                                <img src={icon1} alt="" width="40px" className='mx-auto' />  
                                <p className='hlstoviewdt m-0 text-center'> Hotel</p> 
                              </div>
                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon2} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'>Sightseeing</p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon3} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Transfer </p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon4} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Activity </p> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0' style={{ fontSize: "11px" }}>Starting From:</p>  
                            <h4 className='hostateprice m-0 mt-1' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='btn btn-danger mt-1'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                    </Link>
              </div>
              <div className="col-lg-4 col-md-6 mx-auto mb-3">
               <Link to={"/agent/holidaybooking/holidetails"}>
                <div class="card card-stbox border-0 shadow  rounded-3" >
                    <div  class="card-img-top">
                       <div className='state-image'>
                           <div className='hlstdn'>
                              6 Night / 7 Days
                           </div>
                        </div>
                    </div>
                    <div class="card-body    p-2 pt-3 pb-3 ">
                        <h6 className='statename m-0'>Munnar</h6>
                        <div className="col-lg-12 holitexticon">
                            <div className="row mt-3">
                              <div className="col-3 d-flex justify-content-center flex-column">
                                <img src={icon1} alt="" width="40px" className='mx-auto' />  
                                <p className='hlstoviewdt m-0 text-center'> Hotel</p> 
                              </div>
                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon2} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'>Sightseeing</p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon3} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Transfer </p> 
                              </div>

                              <div className="col-3 -flex justify-content-center flex-column">
                                <img src={icon4} alt="" width="40px" className='mx-auto'  />  
                                <p className='hlstoviewdt m-0'> Activity </p> 
                              </div>
                            </div>                        
                        </div>
              
                        <div className='row border-top mt-2 pt-2'>
                            <div className="col-6">
                            <p className='m-0' style={{ fontSize: "11px" }}>Starting From:</p>  
                            <h4 className='hostateprice m-0 mt-1' >₹ 1580/-</h4>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                              <button className='btn btn-danger mt-1'>View Details</button>
                            </div> 
                        </div>
                     </div>
                    </div>
                    </Link>
              </div>
            </div>
        </div>
    </>
  )
}
