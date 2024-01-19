import { IconSearch } from "@tabler/icons-react";

const SearchBar = () => {
  return (
    <div className="relative block">
      <input
        className="outline-0.5 font-sf-pro-rounded-regular h-10 w-full rounded-xl border-none bg-zinc-900 pe-10 ps-4 text-sm text-gray-100 outline-zinc-800 focus:outline sm:w-44"
        id="search"
        type="search"
        placeholder="Search..."
      />

      <button
        type="button"
        className="absolute end-1 top-1/2 -translate-y-1/2 rounded-xl p-2 text-gray-100 transition hover:text-gray-100/75"
      >
        <IconSearch size={16} />
      </button>
    </div>
  );
};

export default SearchBar;
