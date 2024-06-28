import React from 'react'
import Layout from '../../../Component/Layout/Agent/AgentLayout'


export default function ManageMarkup() {
  return (
    <>
      <Layout />
      <div className="main-content app-content">
            <div className="container-fluid">
                <div className='row'>
                     <div class="col-xl-12">
                     <div className='card mt-5'>
                        <div class="card-body">
                           <div className='header-title'>
                            <h4 className='fw-bold'>Manage Markup</h4>
                           </div>
                           <div className='row  mt-5'>
                              <div className="col-lg-12 col-md-12 col-xl-10 col-sm-12">
                                 <div className="row">
                                 <div className='c  col-lg-4 col-md-4 col-sm-4'>
                                  <p className='fs-15' style={{ fontSize: "14px" }}>Domestic Flight Markup</p>
                                </div>
                                <div className=' col-lg-5 col-md-5 col-sm-4 mb-3'>
                                  <input type='text' className='form-control' />
                                </div>
                                <div className='  col-lg-1 col-md-1 col-sm-2'>
                                  <p className='fs-15'  style={{ fontSize: "12px" }} >Type</p>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-2'>
                                  <select className='form-select'  style={{ fontSize: "12px" }}>
                                      <option>RS</option>
                                      <option>%</option>
                                  </select>
                                </div>
                                <hr className='mt-3'/>

                                <div className='col-lg-4 col-md-4 col-sm-4'>
                                <p className='fs-15' style={{ fontSize: "14px" }}>International Flight Markup</p>
                                </div>
                                <div className='col-lg-5 col-md-5 col-sm-4'>
                                  <input type='text' className='form-control' />
                                </div>
                                <div className='col-lg-1 col-md-1 col-sm-2'>
                                  <p className='fs-15'  style={{ fontSize: "12px" }} >Type</p>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-2'>
                                  <select className='form-select'  style={{ fontSize: "12px" }}>
                                      <option>RS</option>
                                      <option>%</option>
                                  </select>
                                </div>
                                <hr className='mt-3'/>

                                <div className='col-lg-4 col-md-4 col-sm-4'>
                                <p className='fs-15' style={{ fontSize: "14px" }}>Domestic Flight Markup</p>
                                </div>
                                <div className='col-lg-5 col-md-5 col-sm-4'>
                                  <input type='text' className='form-control' />
                                </div>
                                <div className='col-lg-1 col-md-1 col-sm-2'>
                                  <p className='fs-15'  style={{ fontSize: "12px" }} >Type</p>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-2'>
                                  <select className='form-select'  style={{ fontSize: "12px" }}>
                                      <option>RS</option>
                                      <option>%</option>
                                  </select>
                                </div>
                                <hr className='mt-3'/>

                                <div className='col-lg-4 col-md-4 col-sm-4'>
                                <p className='fs-15' style={{ fontSize: "12px" }}>Domestic Flight Markup</p>
                                </div>
                                <div className='col-lg-5 col-md-5 col-sm-4'>
                                  <input type='text' className='form-control' />
                                </div>
                                <div className='col-lg-1 col-md-1 col-sm-2'>
                                  <p className='fs-15'  style={{ fontSize: "12px" }} >Type</p>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-2'>
                                  <select className='form-select'  style={{ fontSize: "12px" }}>
                                      <option>RS</option>
                                      <option>%</option>
                                  </select>
                                </div>
                                <hr className='mt-3'/>
                                  </div>                                
                              </div>
                              
                           </div>
                           {/* <hr className='w-75'></hr>
                           <div className='row w-75'>
                              <div className='col-4'>
                                <p className='fs-15'>International Flight Markup</p>
                              </div>
                              <div className='col-5'>
                                <input type='text' className='form-control' />
                              </div>
                              <div className='col-1'>
                                <p className='fs-15'>Type</p>
                              </div>
                              <div className='col-2'>
                                <select className='form-select'>
                                    <option>RS</option>
                                    <option>%</option>
                                </select>
                              </div>
                           </div>
                           <hr className='w-75'></hr>
                           <div className='row w-75'>
                              <div className='col-4'>
                                <p className='fs-15'>Domestic Hotel Markup</p>
                              </div>
                              <div className='col-5'>
                                <input type='text' className='form-control' />
                              </div>
                              <div className='col-1'>
                                <p className='fs-15'>Type</p>
                              </div>
                              <div className='col-2'>
                                <select className='form-select'>
                                    <option>RS</option>
                                    <option>%</option>
                                </select>
                              </div>
                           </div>
                           <hr className='w-75'></hr>
                           <div className='row w-75'>
                              <div className='col-4'>
                                <p className='fs-15'>International Hotel Markup</p>
                              </div>
                              <div className='col-5'>
                                <input type='text' className='form-control' />
                              </div>
                              <div className='col-1'>
                                <p className='fs-15'>Type</p>
                              </div>
                              <div className='col-2'>
                                <select className='form-select'>
                                    <option>RS</option>
                                    <option>%</option>
                                </select>
                              </div>
                           </div>
                           <hr className='w-75'></hr>
                           <div className='row w-75'>
                              <div className='col-4'>
                                <p className='fs-15'>Package Markup</p>
                              </div>
                              <div className='col-5'>
                                <input type='text' className='form-control' />
                              </div>
                              <div className='col-1'>
                                <p className='fs-15'>Type</p>
                              </div>
                              <div className='col-2'>
                                <select className='form-select'>
                                    <option>RS</option>
                                    <option>%</option>
                                </select>
                              </div>
                           </div>
                           <hr className='w-75'></hr>
                            <div className='row w-75 '>
                              <p className='text-center'><button className='btn btn-primary'>Update Markup</button></p>
                            </div>
                          <hr className='w-75'></hr>  */}
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
