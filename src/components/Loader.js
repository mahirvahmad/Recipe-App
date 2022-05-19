const Loader = () => {
  return (
    <div className="loader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100px"
        height="100px"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="16" fill="#424242"></circle>
      </svg>

      <h1>Loading....</h1>
    </div>
  );
};

export default Loader;
