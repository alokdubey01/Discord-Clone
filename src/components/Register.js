import React from 'react';
import { Link } from 'react-router-dom';

const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const years = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]

export default function Register() {
    return (
        <>
            <div className="login_container">
                <div className="card" style={{ margin: "5% 33% 0% 33%", color: 'white' }}>
                    <div className="d-flex align-items-center" style={{ padding: "30px" }}>
                        <div className="flex-grow-1">
                            <form action="/" method='get'>
                                <div style={{ textAlign: 'center' }}>
                                    <h4>Create an account</h4>
                                </div>
                                <label htmlFor="name" style={{ fontSize: '12px', color: '#8e9297' }}>EMAIL</label><br />
                                <input type="email" style={{ background: '#2f3136', border: '1px solid #111111', outline: 'none', color: 'white', height: '40px', width: '100%', padding: '10px' }} /><br />
                                <label htmlFor="name" style={{ fontSize: '12px', color: '#8e9297', marginTop: '10px' }}>USERNAME</label><br />
                                <input type="text" style={{ background: '#2f3136', border: '1px solid #111111', outline: 'none', color: 'white', height: '40px', width: '100%', padding: '10px' }} /><br />
                                <label htmlFor="name" style={{ fontSize: '12px', color: '#8e9297', marginTop: '10px' }}>PASSWORD</label><br />
                                <input type="text" style={{ background: '#2f3136', border: '1px solid #111111', outline: 'none', color: 'white', height: '40px', width: '100%', padding: '10px' }} /><br />
                                <label htmlFor="name" style={{ fontSize: '12px', color: '#8e9297', marginTop: '10px' }}>DATE OF BIRTH</label><br />
                                <div style={{ display: 'flex' }}>
                                    <select class="form-select" aria-label="Default select example" style={{ background: '#2f3136', color: '#8e9297', border: '1px solid #111111', outline: 'none', height: '40px', width: '30%', padding: '10px',fontSize:'14px' }}>
                                        <option selected hidden>SELECT</option>
                                        {dates.map(name => (
                                            <option>
                                                {name}
                                            </option>
                                        ))}
                                    </select><br />
                                    <select class="form-select" aria-label="Default select example" style={{ background: '#2f3136', color: '#8e9297', border: '1px solid #111111', outline: 'none', height: '40px', width: '30%', padding: '10px',fontSize:'14px', marginLeft: '10px' }}>
                                        <option selected hidden>SELECT</option>
                                        {months.map(name => (
                                            <option>
                                                {name}
                                            </option>
                                        ))}
                                    </select><br />
                                    <select class="form-select" aria-label="Default select example" style={{ background: '#2f3136', color: '#8e9297', border: '1px solid #111111', outline: 'none', height: '40px', width: '30%', padding: '10px',fontSize:'14px', marginLeft: '10px' }}>
                                        <option selected hidden>SELECT</option>
                                        {years.map(name =>(
                                            <option>
                                                {name}
                                            </option>
                                        ))}
                                    </select>
                                </div><br />
                                <button type="submit" style={{ width: '100%', height: '40px', border: 'none', background: '#5865f2', color: 'white', marginTop: '20px' }}>Login</button>
                                <Link to="/login" style={{ textDecoration: 'none', fontSize: '12px' }}>Already have an account ?</Link>
                                <p style={{fontSize: '12px',color:'#8e9297',marginTop:'10px'}}>By registering you are agree to Discord's <a href="#" style={{ textDecoration: 'none', fontSize: '12px' }}>Terms of Service</a> and <a href="#" style={{ textDecoration: 'none', fontSize: '12px' }}>Privacy Policy</a>.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
