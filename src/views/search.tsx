interface SearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const Search: React.FC<SearchProps> = ({ setSearch }) => {
  return (
    <div className="w-50">
      <input
        type="text"
        className="form-control"
        placeholder="Search movie"
        aria-label="Search movie"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        aria-describedby="button-addon2"
      />
    </div>
  );
};
