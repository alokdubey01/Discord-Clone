import React from 'react';
import Qr from '../assets/qr_code.png';
import {Link} from 'react-router-dom';

export default function Login() {
    return (
        <>
            <div className="login_container">
                <div className="card" style={{ margin: "10% 20% 0% 20%",color:'white' }}>
                    <div className="d-flex align-items-center" style={{padding:"30px"}}>
                        <div className="flex-grow-1">
                           <form action="/" method='get'>
                               <div style={{textAlign:'center'}}>
                               <h4>Welcome Back!</h4>
                               <p style={{color:'#8e9297'}}>We're so excited to see you again!</p>
                               </div>
                               <label htmlFor="name" style={{fontSize:'12px',color:'#8e9297'}}>EMAIL OR PHONE NUMBER</label><br />
                            <input type="text" style={{background:'#2f3136',border:'1px solid #111111',outline:'none',color:'white',height:'40px',width:'90%',padding:'10px'}}/><br />
                               <label htmlFor="name" style={{fontSize:'12px',color:'#8e9297'}}>PASSWORD</label><br />
                            <input type="text" style={{background:'#2f3136',border:'1px solid #111111',outline:'none',color:'white',height:'40px',width:'90%',padding:'10px'}}/><br/>
                            <a href="#" style={{textDecoration:'none',fontSize:'12px'}}>Forgot Your Password ?</a>

                            <button type="submit" style={{width:'90%',height:'40px',border:'none',background:'#5865f2',color:'white',marginTop:'30px'}}>Login</button>
                            <p style={{fontSize:'12px',marginTop:'20px'}}>Need an account ? <Link to="/register" style={{textDecoration:'none',fontSize:'12px'}}>Register</Link></p>
                           </form>
                        </div>
                        <div className="flex-shrink-0 qr_dash" style={{width:'300px'}}>
                           <div className="qr">
                           <img src={Qr} alt="invite_only_icon" />
                           </div>
                            <h4>Log in with Qr Code</h4>
                            <p>Scan this with the <b>Discord mobile app</b> to log in instantly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
