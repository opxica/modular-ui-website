import { IconSearch } from "@tabler/icons-react";
import { motion } from "framer-motion";

const SearchBar = () => {
  return (
    <div className="block">
      <motion.button
        type="button"
        className="rounded-full bg-neutral-800/50 p-2.5 text-neutral-100 hover:text-neutral-100/85"
        whileTap={{ scale: 0.9 }}
      >
        <IconSearch size={16} />
      </motion.button>
    </div>
  );
};

export default SearchBar;
