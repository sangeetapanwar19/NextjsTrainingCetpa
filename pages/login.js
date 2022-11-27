import React from "react";

const Login = () => {
  return (
    <>
      <section class="vh-100">
        <div class="container-fluid h-custom">
          <div class="row d-flex justify-content-center align-items-center mt-2">
            <div class="col-md-9 col-lg-6 col-xl-5">
              <img
                src="/draw2.webp"
                class="img-fluid"
                alt="Sample image"
              />
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form className="mt-5">
                <div class="form-outline mb-4">
                 <label class="form-label" for="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                </div>

                <div class="form-outline mb-3">
                 <label class="form-label" for="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    class="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>
                <div class="text-center text-lg-start mt-4 pt-2">
                  <button type="button" class="btn btn-primary btn-lg">
                    Login
                  </button>
                  <p class="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <a href="#" class="link-danger">
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
