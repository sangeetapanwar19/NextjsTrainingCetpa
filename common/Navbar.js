import React from "react";
import Link from "next/link";
const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item px-2">
                                <Link href="/" class="text-white">Home</Link>
                            </li>
                            <li class="nav-item px-2">
                                <Link href="/about" class="text-white">About</Link>
                            </li>
                            <li class="nav-item px-2">
                                <Link href="/courses" class="text-white">Courses</Link>
                            </li>
                            <li class="nav-item px-2">
                                <Link href="/facilities" class="text-white">Facilities</Link>
                            </li>
                            <li class="nav-item px-2">
                                <Link href="/contact" class="text-white">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;