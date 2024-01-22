import { IconSearch } from "@tabler/icons-react";

const SearchBar = () => {
  return (
    <div className="block">
      <button
        type="button"
        className="rounded-full bg-gray-100 p-2.5 text-neutral-900 hover:text-neutral-900/75 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:text-neutral-100/75"
      >
        <IconSearch size={16} />
      </button>
    </div>
  );
};

export default SearchBar;
