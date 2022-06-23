import React from "react";
import avtar from "../images/shyam.jpeg";

function Home() {
    return (
        <div className="min-h-screen">
            <div className="container pt-5 d-flex flex-column align-items-center">
                <img id="self_img" src={avtar} width={150} alt="Shyam patel" />
                <h1>Shyam patel</h1>
                <h4>(Software Engineer)</h4>
                <p className="text-center border-bottom pb-3">Hey there!, I am shyam patel student of a silver oak university currently pursuing B.Tech in computer Engineering </p>
                <p className="text-center">
                    <span className="d-mobile-block">Email: sp5982859@gmail.com</span>
                    <span className="d-none d-web-contents"> | </span>
                    <span className="d-mobile-block">Phone: +91-9974631469</span>
                </p>
                <p className="text-center">Address:- c/31 swaminarayan park, part2, vastral-382418, ahamedabad </p>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Skills</h5>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">HTML</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }}>80%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">CSS</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "75%" }} >75%</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div>
                                            <p className="mb-0">Python</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "73%" }}>73%</div>
                                            </div>
                                        </div>
                                        <div className="pt-3">
                                            <p className="mb-0">REACTJS</p>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" style={{ width: "50%" }} >50%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title fw-bold pb-3">Hobbies</h5>
                                 <span className="badge bg-primary me-3 mb-3 p-2">Cricket</span>
                                <span className="badge bg-secondary me-3 mb-3 p-2">Gaming</span>
                                <span className="badge bg-success me-3 mb-3 p-2">Music</span>
                                <span className="badge bg-danger me-3 mb-3 p-2">Travel</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;