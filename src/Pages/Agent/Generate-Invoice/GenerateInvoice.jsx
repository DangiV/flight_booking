import React from 'react'
import Layout from '../../../Component/Layout/Agent/AgentLayout'

export default function GenerateInvoice() {
    const style = { marginLeft: '5%', marginRight: '5%' };
  return (
    <>
      <Layout />
      <div className="main-content app-content generateinvoice">
            <div className="container-fluid">
                <div className='row'>
                    <div class="col-xl-12">
                        <div className='card mt-4'>
                            <div class="card-body">
                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active border mb-3" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">CREATE INVOICE</button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link border" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">MY INVOICE</button>
                                    </li>
                                </ul>
                                <hr></hr>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active " id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div className='card-box' style={style}>
                                            <div className='row'>
                                                <div className='col-12 d-flex flex-wrap'>
                                                    <div class="form-check-lg me-5">
                                                        <input class="form-check-input" type="radio" value="" name='flexCheckChecked' id="flexCheckChecked1" />
                                                        <label class="form-check-label " for="flexCheckChecked1">
                                                            Tax Invoice
                                                        </label>
                                                    </div>
                                                    <div class="form-check-lg ">
                                                        <input class="form-check-input" type="radio" value="" name='flexCheckChecked' id="flexCheckChecked2" />
                                                        <label class="form-check-label " for="flexCheckChecked2">
                                                            Proforma Invoice
                                                        </label>
                                                    </div>
                                                   </div>
                                                
                                                <div className='col-lg-6 col-md-6 col-sm-6 mt-3'>
                                                    <label class="form-label">Customer Name</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                        </div>
                                                </div>
                                                <div className='col-lg-6 col-md-6 col-sm-6 mt-3'>
                                                    <label class="form-label">Phone Number</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                        </div>
                                                </div>
                                                <div className=' col-lg-4 col-md-4 col-sm-6   mt-3'>
                                                    <label class="form-label">Customer Address</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                        </div>
                                                </div>
                                                <div className='col-lg-3 col-md-3 col-sm-6 mt-3'>
                                                    <label class="form-label">GST NO.</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                        </div>
                                                </div>
                                                <div className='col-6 col-lg-3 col-md-2 col-sm-6 col-xl-2 mt-3'>
                                                    <label class="form-label">GST Type</label>
                                                        <select className='form-select'>
                                                            <option>GST</option>
                                                            <option>IGST</option>
                                                        </select>
                                                </div>
                                                <div className='col-6 col-lg-2 col-md-2 col-sm-6 col-xl-2 mt-3'>
                                                    <label class="form-label">GST %</label>
                                                        <select className='form-select'>
                                                            <option>0%</option>
                                                            <option>5%</option>
                                                            <option>10%</option>
                                                            <option>15%</option>
                                                        </select>
                                                </div>
                                                <div className='col-lg-6 col-md-6 col-sm-6 mt-3'>
                                                    <label class="form-label">Category</label>
                                                        <select className='form-select'>
                                                            <option>Accommodation (Hotel)</option>
                                                            <option>Flight-Inventory/Block</option>
                                                            <option>Package</option>
                                                            <option>Visa</option>
                                                            <option>Cabs/Bus/Transfers</option>
                                                            <option>Activities/Tours/Sightseeing</option>
                                                        </select>
                                                </div>
                                                <div className='col-lg-6 col-md-6 col-sm-6 mt-3'>
                                                    <label class="form-label">Description</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                        </div>
                                                </div>
                                                <div className='col-6 col-lg-2 col-md-2 col-sm-6 mt-3'>
                                                    <label class="form-label">Price</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                        </div>
                                                </div>
                                                <div className='col-6 col-lg-2 col-md-2 col-sm-6 mt-3'>
                                                    <label class="form-label">SAC</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                        </div>
                                                </div>
                                                <div className='mt-5 d-flex justify-content-start'>
                                                    <button className='btn btn-primary '>Add</button>
                                                </div>
                                                <div className='col-lg-6 col-md-6 col-sm-6 mt-3'>
                                                    <label class="form-label">Category</label>
                                                        <select className='form-select'>
                                                            <option>Accommodation (Hotel)</option>
                                                            <option>Flight-Inventory/Block</option>
                                                            <option>Package</option>
                                                            <option>Visa</option>
                                                            <option>Cabs/Bus/Transfers</option>
                                                            <option>Activities/Tours/Sightseeing</option>
                                                        </select>
                                                </div>
                                                <div className='col-lg-6 col-md-6 col-sm-6 mt-3'>
                                                    <label class="form-label">Description</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                        </div>
                                                </div>
                                                <div className='col-6 col-lg-3 col-md-3 col-sm-3 mt-3'>
                                                    <label class="form-label">Price</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                        </div>
                                                </div>
                                                <div className='col-6 col-lg-3 col-md-3 col-sm-3 mt-3'>
                                                    <label class="form-label">SAC</label>
                                                        <div class="input-group">
                                                            <input type="text" class="form-control" id="inlineFormInputGroupUsername"  />
                                                        </div>
                                                </div>
                                                <span className='fs-12 mt-1 text-danger'>Delete</span>
                                                <div className='d-flex'>
                                                    <h6 className='mt-1 me-5 fw-bold'>Total Price :</h6>
                                                    <h6 className='mt-1 fw-bold'>0</h6>
                                                </div>
                                                <div className='mt-3 d-flex justify-content-start'>
                                                    <button className='btn btn-primary'>Generate</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                     <div className='card-box' style={style}>
                                        <div className="table-responsive">
                                            <table className="table text-nowrap w-100">
                                                <thead>
                                                    <tr>
                                                        <th>Sr.No.</th>
                                                        <th>Invoice No.</th>
                                                        <th>Invoice ID</th>
                                                        <th>Customer Name</th>
                                                        <th>Price</th>
                                                        <th>Download</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>--</td>
                                                        <td>--</td>
                                                        <td>--</td>
                                                        <td>--</td>
                                                        <td>--</td>
                                                        <td>--</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
