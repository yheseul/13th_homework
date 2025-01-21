"use client";

import { ChangeEvent, useState } from "react";

export default function useSearchBar() {
  const [searchBar, setSearchBar] = useState("");

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const searchWord = event.target.value;
    setSearchBar(searchWord);
  };

  return { onChangeSearch, searchBar };
}
