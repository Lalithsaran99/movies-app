import "./styles.css";


interface ImageProps {
  imgUrl?: string;
}
export const Image: React.FC<ImageProps> = ({ imgUrl }) => (
  <img
    src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
    className="w-100 h-100 card-img"
    alt="..."
  />
);
