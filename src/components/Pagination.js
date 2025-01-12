const buttonStyle = {
  margin: "5px",
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export function Pagination({ pageNumber, setPageNumber }) {
  const prevButtonDisabled = pageNumber === 0 ? true : false;
  const nextButtonDisabled = pageNumber === 20 ? true : false;
  
  const disabledButtonStyle = {
    ...buttonStyle,
    opacity: 0.5,
    cursor: "not-allowed",
  };

  return (
    <div>
      <button
        style={prevButtonDisabled ? disabledButtonStyle : buttonStyle}
        onClick={() => setPageNumber(pageNumber > 0 ? pageNumber - 1 : 0)}
        disabled={prevButtonDisabled}
        aria-label="Previous page"
        aria-disabled={prevButtonDisabled}
      >
        Previous
      </button>
      <button
        style={nextButtonDisabled ? disabledButtonStyle : buttonStyle}
        onClick={() => setPageNumber(pageNumber + 1)}
        disabled={nextButtonDisabled}
        aria-label="Next page"
        aria-disabled={nextButtonDisabled}
      >
        Next
      </button>
    </div>
  );
}