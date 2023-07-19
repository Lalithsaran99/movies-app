import "./styles.css";
export const Card = () => {
  return (
    <div className="card-style card bg-light text-dark w-100 h-100">
      <img src="logo512.png" className="w-100 h-100 card-img" alt="..." />
      <div className="card-img-overlay w-100 h-100">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">Card title</h5>

          <button type="button" className="btn btn-dark rounded-circle">
            4.3
            <i className="bi bi-star-fill star-icon"></i>
          </button>
        </div>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">Last updated 3 mins ago</p>
      </div>
    </div>
  );
};
