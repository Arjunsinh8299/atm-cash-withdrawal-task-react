import Header from "./Header";

function AtmCashAvaliabilty({ notes, onChange }) {
  return (
    <>
      <Header />

      <div className="card-body p-4">
        <h5 className="mb-3">ATM Cash Availability</h5>

        <div className="row g-3">
          {/* ₹2000 */}
          <div className="col-md-6">
            <div className="denomination-box">
              <label htmlFor="notes2000" className="form-label denomination">
                ₹2,000 Notes
              </label>

              <input
                type="number"
                className="form-control"
                id="notes2000"
                placeholder="Enter number of ₹2,000 notes"
                min="0"
                value={notes[2000]}
                onChange={(e) => {
                  const value = e.target.value;

                  if (value === "" || /^\d+$/.test(value)) {
                    onChange(2000, value);
                  }
                }}
              />
            </div>
          </div>

          {/* ₹500 */}
          <div className="col-md-6">
            <div className="denomination-box">
              <label htmlFor="notes500" className="form-label denomination">
                ₹500 Notes
              </label>

              <input
                type="number"
                className="form-control"
                id="notes500"
                placeholder="Enter number of ₹500 notes"
                min="0"
                value={notes[500]}
                onChange={(e) => {
                  const value = e.target.value;

                  if (value === "" || /^\d+$/.test(value)) {
                    onChange(500, value);
                  }
                }}
              />
            </div>
          </div>

          {/* ₹200 */}
          <div className="col-md-6">
            <div className="denomination-box">
              <label htmlFor="notes200" className="form-label denomination">
                ₹200 Notes
              </label>

              <input
                type="number"
                className="form-control"
                id="notes200"
                placeholder="Enter number of ₹200 notes"
                min="0"
                value={notes[200]}
                onChange={(e) => {
                  const value = e.target.value;

                  if (value === "" || /^\d+$/.test(value)) {
                    onChange(200, value);
                  }
                }}
              />
            </div>
          </div>

          {/* ₹100 */}
          <div className="col-md-6">
            <div className="denomination-box">
              <label htmlFor="notes100" className="form-label denomination">
                ₹100 Notes
              </label>

              <input
                type="number"
                className="form-control"
                id="notes100"
                placeholder="Enter number of ₹100 notes"
                min="0"
                value={notes[100]}
                onChange={(e) => {
                  const value = e.target.value;

                  if (value === "" || /^\d+$/.test(value)) {
                    onChange(100, value);
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AtmCashAvaliabilty;
