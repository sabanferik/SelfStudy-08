import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductModal from "../components/Modals/ProductModal";
import useStockCall from "../hooks/useStockCall";

const Products = () => {
  const { getStockData } = useStockCall();
  const { products } = useSelector((state) => state.stock);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInitialState({
      categoryId: "",
      brandId: "",
      name: "",
    });
  };
  const [initialState, setInitialState] = useState({
    categoryId: "",
    brandId: "",
    name: "",
  });
  console.log("products:", products);
  console.log("products:", initialState);
  useEffect(() => {
    getStockData("products");
  }, []);

  return (
    <Container maxWidth={"xl"}>
      <Typography
        align="center"
        variant="h4"
        component="h1"
        color="secondary.second"
      >
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        New Product
      </Button>
      {open && (
        <ProductModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}
    </Container>
  );
};

export default Products;
