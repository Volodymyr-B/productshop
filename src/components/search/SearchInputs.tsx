import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { useDebounce } from "../../hooks/useDebounce";
import {
  filteredGoodsFetch,
  goodsFetch,
  searchGoodsFetch,
} from "../../store/goods-slice/goods-action";
import { selectValues } from "../../constants/select-values";

import { MenuItem, TextField } from "@mui/material";

export const SearchInputs = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");
  const [sort, setSort] = useState("");
  const debouncedValue = useDebounce(inputValue);
  const productFindHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSort("");
    setInputValue(e.target.value);
  };
  const productFilterHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue("");
    setSort(e.target.value);
    const selectValue = e.target.value;
    if (selectValue === "all") {
      dispatch(goodsFetch());
    } else dispatch(filteredGoodsFetch(selectValue));
  };

  useEffect(() => {
    dispatch(searchGoodsFetch(inputValue));
  }, [debouncedValue]);

  return (
    <div className="flex items-center gap-8">
      <TextField
        className="w-56 my-6"
        select
        value={sort}
        label="Sort products"
        onChange={productFilterHandler}
      >
        {selectValues.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Search products"
        autoComplete="off"
        value={inputValue}
        onChange={productFindHandler}
      />
    </div>
  );
};
