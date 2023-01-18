import React from "react";
import Backgroundform from "../assets/Background-Form.jpg";

const Register = () => {
    return (
        <section>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card card-registration my-4">
                            <div className="row g-0" style={{
                                backgroundImage: `url(${Backgroundform})`,
                                backgroundPosition: 'right',
                            }}>
                                <div className="col-xl-6">
                                    <div className="card-body p-md-5 text-black">
                                        <h3 className="mb-5 text-uppercase">Zarejestruj sie</h3>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1m"
                                                           className="form-control form-control-lg"/>
                                                    <label className="form-label" htmlFor="form3Example1m">Imię</label>
                                                    <label htmlFor="validationServer01" className="form-label">First
                                                        name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1n"
                                                           className="form-control form-control-lg"/>
                                                    <label className="form-label" htmlFor="form3Example1n">Nazwisko</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example8"
                                                   className="form-control form-control-lg"/>
                                            <label className="form-label" htmlFor="form3Example8">Adres</label>
                                        </div>

                                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <select className="select">
                                                    <option value="1">State</option>
                                                    <option value="2">Option 1</option>
                                                    <option value="3">Option 2</option>
                                                    <option value="4">Option 3</option>
                                                </select>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <select className="select">
                                                    <option value="1">City</option>
                                                    <option value="2">Option 1</option>
                                                    <option value="3">Option 2</option>
                                                    <option value="4">Option 3</option>
                                                </select>

                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example9"
                                                   className="form-control form-control-lg"/>
                                            <label className="form-label" htmlFor="form3Example9">DOB</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example90"
                                                   className="form-control form-control-lg"/>
                                            <label className="form-label" htmlFor="form3Example90">Pincode</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example99"
                                                   className="form-control form-control-lg"/>
                                            <label className="form-label" htmlFor="form3Example99">Course</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example97"
                                                   className="form-control form-control-lg"/>
                                            <label className="form-label" htmlFor="form3Example97">Email ID</label>
                                        </div>

                                        <div className="d-flex justify-content-end pt-3">
                                            <button type="button" className="btn btn-light btn-lg">Reset all</button>
                                            <button type="button" className="btn btn-warning btn-lg ms-2">Submit form
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Register;