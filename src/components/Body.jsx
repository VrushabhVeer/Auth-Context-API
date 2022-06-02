import React from 'react';


const Body = () => {
    return (
        <div>
            <form className='form'>
                <div className="mb-3">
                    <label for="exampleInputName1" className="form-label">Name</label>
                    <input type="Name" className="form-control" id="exampleInputName1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputMobile1" className="form-label">Mobile no</label>
                    <input type="Mobile" className="form-control" id="exampleInputMobile1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div className="d-grid gap-2 col-6">
                    <button className="btn btn-primary" type="button">Button</button>
                </div>
            </form>
        </div>
    );
};

export default Body;