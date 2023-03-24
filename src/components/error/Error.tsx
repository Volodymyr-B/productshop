import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { goodsFetch } from "../../store/goods-slice/goods-action";

import { Box, Button, Typography } from "@mui/material";

export const Error = () => {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.goods.error);
  const refreshHandler = () => {
    dispatch(goodsFetch());
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <Typography>{error}</Typography>
      <Button className="mb-5" variant="contained" onClick={refreshHandler}>
        refresh
      </Button>
    </Box>
  );
};
