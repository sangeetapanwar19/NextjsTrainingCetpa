import React from "react";
import Image from "next/image";

const Header = () => {
    return (
            <div class="row">
                <div class="col-md-3">
                    <Image src="/cart.png" width={100} height={100}/>
                </div>
                <div class="col-md-6 d-flex align-items-center">
                   <input type="text" class="form-control" placeholder="Search Here"/>
                </div>
                <div class="col-md-3 d-flex align-items-center justify-content-end">
                    <ul class="d-flex">
                        <li class="px-1">
                         <Image src="/facebook.png" width={40} height={40}/>
                        </li>
                        <li class="px-1">
                         <Image src="/linkedin.png" width={40} height={40}/>
                        </li>
                        <li class="px-1">
                         <Image src="/googleplus.png" width={40} height={40}/>
                        </li>
                        <li class="px-1">
                         <Image src="/twitter.png" width={40} height={40}/>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Header;