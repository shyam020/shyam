import React from "react";

function Education() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Education</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Bachelor of Engineering <span className="h6">from Silver Oak University</span></h5>
                                    <p className="mb-0"> 2020 - 2024</p>
                                    <small> </small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">HSC<span className="h6">Shajanad school of achiever</span></h5>
                                    <p className="mb-0"> 2019 - 2020</p>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">SSC<span className="h6">arpan international school</span></h5>
                                    <p className="mb-0"> 2019 - 2020</p>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Education;