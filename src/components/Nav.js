import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/discord_logo.svg';

export default function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src={Logo} alt="logo" class="d-inline-block align-text-top" />
            Discord
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Download</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Nitro</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Safety</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Support</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Careers</a>
                </li>
              </ul>
              <form class="d-flex">
                <button className='login'><Link to="/login">Login</Link></button>
              </form>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}
