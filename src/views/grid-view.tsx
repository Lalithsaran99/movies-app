import { Loader } from "../loader/normal-loader";
import { Movies } from "../utils/type";
import { Card } from "./card";

interface GridViewProps {
  data: Movies[];
  loading: boolean;
  isFavorite?: boolean;
}
export const GridView: React.FC<GridViewProps> = ({
  data,
  isFavorite,
  loading,
}) => {
  return (
    <div className="row g-5 m-0">
      {data?.map((movie, index) => (
        <div className="col-sm-2 col-md-4 col-lg-2" key={index}>
          <Card isFavorite={isFavorite} movie={movie} />
        </div>
      ))}
      {loading && (
        <div className="p-2">
          <Loader />
        </div>
      )}
      <div className="end-of-page-marker h-25" />
    </div>
  );
};
