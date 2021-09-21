import React from "react";
import blackShirt from "../img/product/black-shirt.png";
import kemeja from "../img/product/kemeja.png";
import jacketCoklat from "../img/product/jacket-Coklat.jpg";
const collections = [
  {
    id: 1,
    nama: "t-shirt",
    src: blackShirt,
    kategori: "t-shirt",
    harga: 79000,
    qty: 1,
    size: ["XL", "L", "M", "S"],
  },
  {
    id: 2,
    nama: "Kemeja",
    src: kemeja,
    kategori: "kemeja",
    harga: 105000,
    qty: 1,
    size: ["XL", "L", "S"],
  },
  {
    id: 3,
    nama: "Jacket coklat",
    src: jacketCoklat,
    kategori: "jacket",
    harga: 199000,
    qty: 1,
    size: ["XL", "M", "S"],
  },
];

export default collections;
