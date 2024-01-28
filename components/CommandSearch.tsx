import "react-cmdk/dist/cmdk.css";
import { useState } from "react";
import CommandPalette, { filterItems, getItemIndex } from "react-cmdk";
import { getMenuItems } from "@/data/commandSearch/menuItems";
import { getComponentsItems } from "@/data/commandSearch/componentsItems";

type CommandSearchProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CommandSearch = ({ open, setOpen }: CommandSearchProps) => {
  const [page, setPage] = useState<"root" | "components" | "faqs">("root");
  const [search, setSearch] = useState("");
  
  const menuItems = filterItems(
    getMenuItems(setPage),
    search,
  );

  const componentsItems = filterItems(
    getComponentsItems(setPage),
    search,
  );


  return (
    <CommandPalette
      onChangeSearch={setSearch}
      onChangeOpen={setOpen}
      search={search}
      isOpen={open}
      page={page}
    >
      <CommandPalette.Page id="root">
        {menuItems.length ? (
          menuItems.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem
                  key={id}
                  index={getItemIndex(menuItems, id)}
                  {...rest}
                />
              ))}
            </CommandPalette.List>
          ))
        ) : (
          <CommandPalette.FreeSearchAction />
        )}
      </CommandPalette.Page>
      <CommandPalette.Page id="components">
        <CommandPalette.List heading="Components">
          {componentsItems
            .find((list) => list.id === "components")
            ?.items.slice(0, 3)
            .map(({ id, ...rest }) => (
              <CommandPalette.ListItem
                key={id}
                index={getItemIndex(componentsItems, id)}
                {...rest}
              />
            ))}
        </CommandPalette.List>
      </CommandPalette.Page>
    </CommandPalette>
  );
};

export default CommandSearch;
