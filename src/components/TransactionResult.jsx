function TransactionResult({
  transactionStatus,
  withdrawAmount,
  dispanseAmount
}) {
  return (
    <div className="result-section">

      <h5 className="mb-3">
        Transaction Result
      </h5>

      <div
        id="transactionStatus"
        className={`alert ${
          transactionStatus === "Transaction Successful"
            ? "alert-success"
            : transactionStatus === "Transaction Failed"
            ? "alert-danger"
            : "alert-secondary"
        }`}
      >
        {transactionStatus || "Transaction details will appear here."}
      </div>

      <p>
        Withdrawal Amount: ₹{withdrawAmount || 0}
      </p>

      <h6 className="mt-4 mb-3">
        Notes Dispensed
      </h6>

      <div className="table-responsive">

        <table className="table table-bordered table-hover">

          <thead className="table-dark">
            <tr>
              <th>Denomination</th>
              <th>Notes Dispensed</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>₹2,000</td>
              <td>{dispanseAmount[2000]}</td>
              <td>₹{dispanseAmount[2000] * 2000}</td>
            </tr>

            <tr>
              <td>₹500</td>
              <td>{dispanseAmount[500]}</td>
              <td>₹{dispanseAmount[500] * 500}</td>
            </tr>

            <tr>
              <td>₹200</td>
              <td>{dispanseAmount[200]}</td>
              <td>₹{dispanseAmount[200] * 200}</td>
            </tr>

            <tr>
              <td>₹100</td>
              <td>{dispanseAmount[100]}</td>
              <td>₹{dispanseAmount[100] * 100}</td>
            </tr>

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default TransactionResult;
