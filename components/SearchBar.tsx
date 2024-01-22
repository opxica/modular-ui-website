import { IconSearch } from "@tabler/icons-react";

const SearchBar = () => {
  return (
    <div className="block">
      <button
        type="button"
        className="rounded-full bg-neutral-800/50 p-2 text-neutral-100 hover:text-neutral-100/85"
      >
        <IconSearch size={16} />
      </button>
    </div>
  );
};

export default SearchBar;
