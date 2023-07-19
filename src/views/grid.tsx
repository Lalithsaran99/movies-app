import { useParams } from "react-router-dom";
import { Card } from "./card";
import { Search } from "./search";
export const Grid: React.FC = () => {
  const params = useParams<{ movieType: string }>();
  return (
    <>
      <div className="search-bg d-flex align-items-center justify-content-center">
        <Search />
      </div>
      <h1 className="text-center">
        {params?.movieType ? params?.movieType : "Home"}
      </h1>
      <div className="row gx-5 gy-5">
        <div className="col-lg-3">
          <Card />
        </div>
        <div className="col-lg-3">
          <Card />
        </div>
        <div className="col-lg-3">
          <Card />
        </div>
        <div className="col-lg-3">
          <Card />
        </div>
        <div className="col-lg-3">
          <Card />
        </div>
        <div className="col-lg-3">
          <Card />
        </div>
        <div className="col-lg-3">
          <Card />
        </div>
        <div className="col-lg-3">
          <Card />
        </div>
      </div>
    </>
  );
};
