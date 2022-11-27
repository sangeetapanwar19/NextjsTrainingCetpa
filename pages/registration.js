import React from "react";

const Registration = () => {
  return (
    <div>
      <section>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center">
            <div class="col-lg-12 col-xl-11">
                <div class="p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form class="mx-1 mx-md-4">
                        <div class="d-flex flex-row align-items-center mb-4">
                          <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="name">
                              Your Name
                            </label>
                            <input
                              type="text"
                              id="name"
                              class="form-control"
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <div class="form-outline flex-fill mb-0">
                           <label class="form-label" for="email">
                              Your Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              class="form-control"
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="password">
                              Password
                            </label>
                            <input
                              type="password"
                              id="password"
                              class="form-control"
                            />
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="repassword">
                              Repeat your password
                            </label>
                            <input
                              type="password"
                              id="repassword"
                              class="form-control"
                            />
                          </div>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input
                            class="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id=""
                          />
                          <label class="form-check-label">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" class="btn btn-primary btn-lg">
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="/draw1.webp"
                        class="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
