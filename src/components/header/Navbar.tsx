import { Link } from "react-router-dom";

import { Button, Typography } from "@mui/material";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <Typography className="ml-8">Goods shop</Typography>
      <div className="text-end mr-8">
        <Button color="inherit" component={Link} to="/">
          Products
        </Button>
        <Button color="inherit" component={Link} to="/creategoods">
          Create new
        </Button>
      </div>
    </div>
  );
};
