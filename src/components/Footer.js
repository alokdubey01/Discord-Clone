import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { BsTwitter, BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs';
import Flag from '../assets/usa_flag.png'
import Logo from '../assets/discord_logo.svg'

export default function Footer() {
    return (
        <>
            <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
                <section className=''>
                    <div className='container text-center text-md-start mt-5'>
                        <div className='row mt-3'>
                            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                                <h1 className='text-uppercase fw-bold mb-4 footer_discort'>
                                    IMAGINE A PLACE
                                </h1>
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={Flag} alt="flag" height='15px' width='20px' /> English, USA
                                    </button>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <a href="#">
                                    <BsTwitter style={{ marginLeft: '10px',color:'white',fontSize:'20px' }} />
                                </a>
                                <a href="#">
                                    <BsInstagram style={{ marginLeft: '10px',color:'white',fontSize:'20px' }} />
                                </a>
                                <a href="#">
                                    <BsFacebook style={{ marginLeft: '10px',color:'white',fontSize:'20px' }} />
                                </a>
                                <a href="#">
                                    <BsYoutube style={{ marginLeft: '10px',color:'white',fontSize:'20px' }} />
                                </a>
                            </div>

                            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                                <h6 className='ul mb-4'>Products</h6>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Download
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Nitro
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Status
                                    </a>
                                </p>
                            </div>

                            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                                <h6 className='ul mb-4'>Company</h6>
                                <p>
                                    <a href='#' className='text-reset'>
                                        About
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Jobs
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Branding
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Newsroom
                                    </a>
                                </p>
                            </div>

                            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                                <h6 className='ul mb-4'>Resources</h6>
                                <p>
                                    <a href='#' className='text-reset'>
                                        College
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Support
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Safety
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Blog
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Feedback
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Developers
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        StreamKit
                                    </a>
                                </p>
                            </div>

                            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                                <h6 className='ul mb-4'>Policies</h6>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Terms
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Privacy
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Cookie Settings
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Guidelines
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Acknowledgements
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Licenses
                                    </a>
                                </p>
                                <p>
                                    <a href='#' className='text-reset'>
                                        Moderation
                                    </a>
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                <div className='footer border-top'>
                    <a class="navbar-brand" href="#">
                        <img src={Logo} alt="logo" />
                        Discord
                    </a>
                    <div className="btn">
                        <button className='signup'><a href="/">Sign Up</a></button>
                    </div>
                </div>
            </MDBFooter>
        </>
    );
}
