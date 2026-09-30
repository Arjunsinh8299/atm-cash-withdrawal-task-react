
function RemaingCash({ remainingCash, withdrawAmount }) {
  return (
    <div className="row mt-3">

      <div className="col-md-6">
        <div className="card bg-white border">
          <div className="card-body">

            <h6 className="text-muted">
              Remaining Cash in ATM
            </h6>

            <h3
              id="remainingCash"
              className="text-success"
            >
              ₹{remainingCash || 0}
            </h3>

          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card bg-white border">
          <div className="card-body">

            <h6 className="text-muted">
              Withdrawal Amount
            </h6>

            <h3
              id="displayWithdrawal"
              className="text-primary"
            >
              ₹{withdrawAmount || 0}
            </h3>

          </div>
        </div>
      </div>

    </div>
  );
}

export default RemaingCash;
