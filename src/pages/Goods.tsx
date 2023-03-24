import { useEffect } from "react";
import { goodsFetch } from "../store/goods-slice/goods-action";
import { GoodsList } from "../components/goods-list/GoodsList";
import { SearchInputs } from "../components/search/SearchInputs";

import { useAppDispatch } from "../hooks/redux";

export const Goods = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(goodsFetch());
  }, []);

  return (
    <>
      <div className="flex items-center gap-8">
        <SearchInputs />
      </div>
      <GoodsList />
    </>
  );
};
