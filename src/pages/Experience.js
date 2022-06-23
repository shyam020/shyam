import React from "react";

function Experience() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <div className="container py-5">
                    <h1 className="text-center mb-5">Experience</h1>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-5">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Web development internship <span className="h6">at Coding Gujju</span></h5>
                                    <p className="mb-0">june-2022</p>
                                    <small>Completed web development internship at coding gujju and learned about web development tools.</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold"><span className="h6"></span></h5>
                                    <p className="mb-0"></p>
                                    <small></small>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Experience;