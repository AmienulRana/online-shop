import React from "react";
import axios from "axios";
const api = "http://localhost:4000/";
const AddToCart = (dataOrder, qty) => {
  const aToken = localStorage.getItem("aToken");

  axios({
    url: api + "orders",
    method: "post",
    headers: {
      "Bearer Token": aToken,
    },
    data: {
      nama_product: dataOrder.nama_product,
      gambar: dataOrder.photo,
      harga: dataOrder.harga,
      qty: qty,
    },
  }).then((response) => {
    console.log(response);
  });
};

export default AddToCart;
