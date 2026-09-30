function Withdraw({ withdrawAmount, setWithdrawAmount }) {
  return (
    <div className="mt-4">
      <label
        htmlFor="withdrawalAmount"
        className="form-label fw-semibold"
      >
        Withdrawal Amount
      </label>

      <div className="input-group input-group-lg">
        <span className="input-group-text">₹</span>

        <input
          type="number"
          className="form-control"
          id="withdrawalAmount"
          placeholder="Enter withdrawal amount"
          min="100"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Withdraw;
