import { debounce } from "../utils/debounce";

interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const Search: React.FC<SearchProps> = ({ setSearch }) => {
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };
  const debouncedInputChange = debounce(onSearchChange, 500);
  return (
    <div className="w-5">
      <input
        type="text"
        className="form-control"
        placeholder="Search movie"
        aria-label="Search movie"
        onChange={debouncedInputChange}
        aria-describedby="button-addon2"
      />
    </div>
  );
};
