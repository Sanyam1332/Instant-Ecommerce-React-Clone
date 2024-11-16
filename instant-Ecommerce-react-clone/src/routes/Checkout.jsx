const Checkout = () => {
  return (
    <div className="items-container">
      <div className="row ">
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          <form action="/redirect" className="needs-validation" novalidate="">
            <div className="row g-3">
              <div className="col-sm-6">
                <label for="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  fdprocessedid="kgdtmk"
                />
                <div className="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div className="col-sm-6">
                <label for="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  fdprocessedid="z5cpiv"
                />
                <div className="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>

              <div className="col-12">
                <label for="username" className="form-label">
                  Username
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    required=""
                    fdprocessedid="b0gy7k"
                  />
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>

              <div className="col-12">
                <label for="email" className="form-label">
                  Email <span className="text-body-secondary">(Optional)</span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  fdprocessedid="pu0t3"
                />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label for="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main "
                  required=""
                  fdprocessedid="qs4m5m"
                />
                <div className="invalid-feedback">
                  Please enter your shipping address.
                </div>
              </div>

              <div className="col-12">
                <label for="address2" className="form-label">
                  Address 2{" "}
                  <span className="text-body-secondary">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                  fdprocessedid="xfp9xo"
                />
              </div>

              <div className="col-md-5">
                <label for="country" className="form-label">
                  Country
                </label>
                <select
                  className="form-select"
                  id="country"
                  required=""
                  fdprocessedid="so4bw"
                >
                  <option value="">Choose...</option>
                  <option>India</option>
                  <option>United States</option>
                </select>
                <div className="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div className="col-md-4">
                <label for="state" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  id="state"
                  required=""
                  fdprocessedid="fv6u97"
                >
                  <option value="">Choose...</option>
                  <option>New Delhi</option>
                  <option>California</option>
                </select>
                <div className="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
            </div>
            <hr className="my-4" />
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="same-address"
              />
              <label className="form-check-label" for="same-address">
                Shipping address is the same as my billing address
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="save-info"
              />
              <label className="form-check-label" for="save-info">
                Save this information for next time
              </label>
            </div>
            <hr className="my-4" />
            <h4 className="mb-3">Payment</h4>
            <div className="my-3">
              <div className="form-check">
                <input
                  id="credit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  checked=""
                  required=""
                />
                <label className="form-check-label" for="credit">
                  Credit card
                </label>
              </div>
              <div className="form-check">
                <input
                  id="debit"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required=""
                />
                <label className="form-check-label" for="debit">
                  Debit card
                </label>
              </div>
              <div className="form-check">
                <input
                  id="paypal"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required=""
                />
                <label className="form-check-label" for="paypal">
                  PayPal
                </label>
              </div>
              <div className="form-check">
                <input
                  id="cash on delivery"
                  name="paymentMethod"
                  type="radio"
                  className="form-check-input"
                  required=""
                />
                <label className="form-check-label" for="cash on delivery">
                  Cash on Delivery
                </label>
              </div>
            </div>
            <hr className="my-4" />{" "}
            <button
              className="w-100 btn btn-lg btn-outline-success"
              type="submit"
              fdprocessedid="e0k26"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
