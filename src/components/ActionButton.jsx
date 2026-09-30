

function ActionButton({ onClick }) {
  return (
    <div className="d-grid mt-4">
      <button
        type="button"
        className="btn btn-primary btn-lg"
        onClick={() => {
          console.log("Dispense button clicked");
          onClick();
        }}
      >
        Dispense Cash
      </button>
    </div>
  );
}

export default ActionButton;
