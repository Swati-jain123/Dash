import React from 'react'
import "./Cards.css"
import "react-bootstrap"

export default function Cards() {
  return (
    
<div className="container">
    <div className="row " >
        <div className="col">
            <div className="card l-bg-cherry">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-small"><i className="fas fa-shopping-cart"></i></div>

                    <div className="mb-4">
                        <h5 className="card-title mb-0">Total Reviews</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                            <h2 className="d-flex align-items-center mb-0">
                                $2,129,230
                            </h2>
                        </div>
                        <div className="col-4 text-right">
                            <span>+2.5<i className="fa fa-arrow-up"></i></span>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        
        <div className="col">
            <div className="card l-bg-blue-dark">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-users"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Total Transactions</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                            <h2 className="d-flex align-items-center mb-0">
                                1,520
                            </h2>
                        </div>
                        <div className="col-4 text-right">
                            <span>+1.7% <i className="fa fa-arrow-up"></i></span>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card l-bg-green-dark">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-ticket-alt"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Total Likes</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                            <h2 className="d-flex align-items-center mb-0">
                                9,751
                            </h2>
                        </div>
                        <div className="col-4 text-right">
                            <span>+1.4% <i className="fa fa-arrow-up"></i></span>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card l-bg-orange-dark">
                <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large"><i className="fas fa-dollar-sign"></i></div>
                    <div className="mb-4">
                        <h5 className="card-title mb-0">Total Users</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                        <div className="col-8">
                            <h2 className="d-flex align-items-center mb-0">
                                9,751
                            </h2>
                        </div>
                        <div className="col-4 text-right">
                            <span>+2.4 <i className="fa fa-arrow-up"></i></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
  )
}
