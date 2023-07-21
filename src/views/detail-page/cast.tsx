import React from "react";
import { CastDetails } from "../../utils/type";
import "./styles.css";

interface CastProps {
  cast: CastDetails;
}

export const Cast: React.FC<CastProps> = ({ cast }) => {
  return (
    <div className="card horizontal-scroll-card">
      <img
        src={
          cast?.profile_path
            ? `https://image.tmdb.org/t/p/w500${cast?.profile_path}`
            : "../empty.jpg"
        }
        className="card-img-top"
        alt="Image 1"
      />
      <div className="card-body">
        <h5 className="card-title">{cast?.name}</h5>
        <p className="card-text">{cast?.character}</p>
      </div>
    </div>
  );
};
