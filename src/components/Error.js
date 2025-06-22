import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-container">
      <div className="error-box">
        <h1>😵 Oops! Something went wrong.</h1>
        <p className="error-status">
          <strong>{err.status}</strong> — {err.statusText}
        </p>
        <p className="error-message">
          Please check the URL or try again later.
        </p>
      </div>
    </div>
  );
};

export default Error;
