import { useQuery } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import { FetchBoardsDocument } from "../graphql/graphql";
import _ from "lodash";

export default function useBoardListMenu() {
  const [searchBar, setSearchBar] = useState("");
  const [keyword, setKeyword] = useState("");
  const [isClick, setIsClick] = useState(true);
  const { data, refetch } = useQuery(FetchBoardsDocument);

  const getDebounce = _.debounce((value) => {
    refetch({ search: value, page: 1 });
    setKeyword(value);
  }, 500);

  const onFocusSearchBar = () => {
    setIsClick(false);
  };

  const onBlurSearchBar = () => {
    // setIsClick((prev) => !prev)
    return searchBar === "" ? setIsClick(true) : setIsClick(false);
  };

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchBar = event.target.value;
    setSearchBar(searchBar);
    getDebounce(searchBar);
  };
  return {
    onFocusSearchBar,
    onBlurSearchBar,
    onChangeSearch,
    isClick,
    keyword,
  };
}
