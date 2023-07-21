import { useEffect, useState } from "react";
import { Genres } from "../utils/type";

interface GenreProps {
  genres: Genres[] | undefined;
  setGenreId: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const GenresUI: React.FC<GenreProps> = ({ genres, setGenreId }) => {
  const [id, setId] = useState<string>();

  useEffect(() => {
    if (!genres?.length) return;
    if (!id) {
      setId(String(genres[0]?.id));
    }
  }, [genres, id]);

  return (
    <div className="text-center">
      {genres?.map((data) => (
        <button
          type="button"
          value={String(data?.id)}
          name={String(data?.id)}
          key={data?.id}
          onClick={(e) => {
            setGenreId(e.currentTarget.value);
            setId(e.currentTarget.value);
          }}
          className={
            id === String(data?.id)
              ? "btn btn-dark rounded-pill m-1"
              : "btn btn-primary rounded-pill m-1"
          }
        >
          {data?.name}
        </button>
      ))}
    </div>
  );
};
