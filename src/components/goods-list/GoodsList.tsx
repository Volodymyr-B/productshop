import { useAppSelector } from "../../hooks/redux";
import { Error } from "../error/Error";
import { GoodsItem } from "../goods-item/GoodsItem";

export const GoodsList = () => {
  const { goods, isLoading, error } = useAppSelector((state) => state.goods);

  if (isLoading) return <div>Loading</div>;
  if (error) return <Error />;
  if (goods?.length === 0) return <div>Sorry, no matches :(</div>;
  if (!goods) return <div>Unfortunately the list of products is empty</div>;

  return (
    <div className="flex gap-6 mb-8 flex-wrap justify-center">
      {goods.map((goodsItem) => (
        <GoodsItem key={goodsItem.id} goodsItem={goodsItem} />
      ))}
    </div>
  );
};
