import React from "react";
import Link from "next/link";
import Styles from "../styles/Nav.module.scss";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <div className="col-md-8">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item px-2">
                  <Link href="/" class="text-white">
                    Home
                  </Link>
                </li>
                <li class="nav-item px-2">
                  <Link href="/about" class="text-white">
                    About
                  </Link>
                </li>
                <li class="nav-item px-2">
                  <Link href="/courses" class="text-white">
                    Courses
                  </Link>
                </li>
                <li class="nav-item px-2">
                  <Link href="/facilities" class="text-white">
                    Facilities
                  </Link>
                </li>
                <li class="nav-item px-2">
                  <Link href="/contact" class="text-white">
                    Contact
                  </Link>
                </li>
                <li class="nav-item px-2">
                  <Link href="/batches" class="text-white">
                    Batches
                  </Link>
                </li>
                <li class="nav-item px-2">
                  <Link href="/products" class="text-white">
                    Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
          <button type="button" class="btn btn-dark m-1"><Link href="/login" class="text-white">
          Login
          </Link></button>
          <button type="button" class="btn btn-dark m-1"><Link href="/" class="text-white">
          Logout
          </Link></button>
          <button type="button" class="btn btn-dark m-1"><Link href="/registration" class="text-white">
          Registration
          </Link></button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
