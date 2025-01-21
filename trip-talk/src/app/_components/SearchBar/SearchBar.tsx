import { SearchOutlined } from "@ant-design/icons";
import Input from "../Input/Input";
import useSearchBar from "../../../commons/hooks/useSearchBar";

export default function SearchBar() {
  const { onChangeSearch, searchBar } = useSearchBar();
  return (
    <div className="relative gap-3 h-14 w-full">
      {!searchBar && <SearchOutlined className="absolute z-30 top-4 left-4" />}
      <Input
        id="text"
        required={false}
        onChange={onChangeSearch}
        value={searchBar}
      />
    </div>
  );
}
