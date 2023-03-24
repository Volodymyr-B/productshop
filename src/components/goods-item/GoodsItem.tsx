import { FC } from "react";
import { IGoods } from "../../types/IGoods";

import { Button, Card, CardMedia, Typography } from "@mui/material";
import { deleteGoodsFetch } from "../../store/goods-slice/goods-action";
import { useAppDispatch } from "../../hooks/redux";

interface GoodsItemProps {
  goodsItem: IGoods;
}

export const GoodsItem: FC<GoodsItemProps> = ({ goodsItem }) => {
  const {
    id,
    title,
    description,
    price,
    rating,
    stock,
    brand,
    category,
    thumbnail,
  } = goodsItem;
  const dispatch = useAppDispatch();
  const deleteProductHandler = () => {
    dispatch(deleteGoodsFetch(id.toString()));
  };
  return (
    <>
      <Card elevation={4} className="w-80 flex flex-col">
        <div className="h-48 w-80">
          <CardMedia
            className="object-cover"
            height="192"
            component="img"
            image={thumbnail}
            alt={thumbnail}
          />
        </div>
        <div className="p-2 flex flex-col gap-4 h-full">
          <Typography variant="h5" className="h-14 font-bold text-center">
            {title}
          </Typography>
          <Typography variant="h6" className="font-bold text-center h-40">
            {description}
          </Typography>

          <div className="flex gap-2 flex-col">
            <div>
              <Typography>
                category: <strong>{category}</strong>
              </Typography>
              <Typography>
                brand: <strong>{brand}</strong>
              </Typography>
            </div>
            <div>
              <Typography>
                in stock: <strong>{stock}</strong>
              </Typography>
              <Typography>
                rating: <strong>{rating}</strong>
              </Typography>
            </div>
            <Typography>
              price: <strong>{price}</strong> $
            </Typography>
          </div>

          <Button onClick={deleteProductHandler} variant="contained">
            delete
          </Button>
        </div>
      </Card>
    </>
  );
};
