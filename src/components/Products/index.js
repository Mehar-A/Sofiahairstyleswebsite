import React from "react";
import {
  ProductContainers,
  ProductWarpper,
  ProductCard,
  ProductIcon,
  ProductH2,
  ProductP,
  ProductH1,
} from "./ProdcutsElements";
import Icon1 from "../../images/products/png/1.png";
import Icon2 from "../../images/products/png/2.png";
import Icon3 from "../../images/products/png/3.png";
import Icon4 from "../../images/products/png/4.png";
import Icon5 from "../../images/products/png/5.png";
import Icon6 from "../../images/products/png/6.png";

// <ProductH1>Products</ProductH1>
const Products = () => {
  return (
    <ProductContainers id="products">
      <ProductH1>Our Products</ProductH1>
      <ProductWarpper>
        <ProductCard>
          <ProductH2>CBD Moisturize Conditioner</ProductH2>
          <ProductIcon src={Icon1} />
          <ProductP>
            Moisturize, strengthen and repair your hair with our CBD
            Conditioner.
          </ProductP>
        </ProductCard>
        <ProductCard>
          <ProductH2>REDKEN Extreme Bleach Recovery</ProductH2>
          <ProductIcon src={Icon2} />
          <ProductP>
            The extreme bleach recovery, helps your blonde hair stay healthy and
            beautiful.
          </ProductP>
        </ProductCard>
        <ProductCard>
          <ProductH2>MATRIX Sulfate-Free Shampoo</ProductH2>
          <ProductIcon src={Icon3} />
          <ProductP>
            Our color-locking system keeps color looking vibrant for up to 65
            DAYS and protects hair from harmful, UV rays that contribute to
            fading.
          </ProductP>
        </ProductCard>
        <ProductCard>
          <ProductH2>OLAPLEX Bond Maintenance Conditioner</ProductH2>
          <ProductIcon src={Icon4} />
          <ProductP>
            The OLAPLEX Bond Maintenance System consists of essential go-tos for
            strong, resilient, healthy hair.
          </ProductP>
        </ProductCard>
        <ProductCard>
          <ProductH2>PAUL MITCHELL Super Skinny Serum</ProductH2>
          <ProductIcon src={Icon5} />
          <ProductP>Helps smooth hair fast with reduced drying times.</ProductP>
        </ProductCard>
        <ProductCard>
          <ProductH2>REDKEN Shampoo & Conditioner</ProductH2>
          <ProductIcon src={Icon6} />
          <ProductP>
            Shampoo and conditioner are the first line of defense for your hair.
          </ProductP>
        </ProductCard>
      </ProductWarpper>
    </ProductContainers>
  );
};

export default Products;
