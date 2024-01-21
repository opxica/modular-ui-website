import { IconSearch } from "@tabler/icons-react";

const SearchBar = () => {
  return (
    <div className="block">
      <button
        type="button"
        className="rounded-full bg-neutral-900 p-2.5 text-neutral-100 transition hover:text-neutral-100/75"
      >
        <IconSearch size={16} />
      </button>
    </div>
  );
};

export default SearchBar;
