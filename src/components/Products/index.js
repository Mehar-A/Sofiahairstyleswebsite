import React from 'react'
//import React ,{useState}from 'react'
import {ProductContainers,ProductWarpper, ProductH1} from './ProdcutsElements'
/*
import Icon1 from '../../images/products/png/1.png'
import {ProductCard, ProductIcon,ProductH2,ProductP} from './ProdcutsElements'

import {BtnWrap} from '../Services/ServicesElements';
import { Button3 } from '../ButtomElements';
import './ProductsElements.css'


import Icon2 from '../../images/products/png/2.png'
import Icon3 from '../../images/products/png/3.png'
import Icon4 from '../../images/products/png/4.png'
import Icon5 from '../../images/products/png/5.png'
import Icon6 from '../../images/products/png/6.png'


import {CardContainer,CardInner,CardFront, CardBack} from './ProdcutsElements'
import './style.css'
//import {Cardmiddle,Card,Front} from './ProdcutsElements'

import './ProductsElements.css'


import {BtnWrap} from '../Services/ServicesElements';
import { Button3 } from '../ButtomElements';


<ProductContainers id="products">
            <BtnWrap>
                <Button3 onClick={Addnew}>Back</Button3>
            </BtnWrap>
            <ProductWarpper id="div-container">
            </ProductWarpper>
            
        </ProductContainers>

*/
const Products = () => {
    //const BtnAdd = document.querySelector("div");
    //const DivContainer = document.getElementById("div-container");
    /*
        const Addnew = () => {
            
            const newDiv = document.createElement("div");
            const newH2 = document.createElement("h2");
            const newImage = document.createElement("img");
            const newP = document.createElement("p");
            //console.log("add");
            newDiv.classList.add('ProductCard');
            newH2.classList.add('ProductH2');
            newH2.textContent = 'CBD Moisturize Conditioner';
            newImage.src = Icon1;
            newP.textContent = 'Moisturize, strengthen and repair your hair with our CBD Conditioner.'
            //console.log(newDiv);
            //console.log(ProductCard);
            newDiv.appendChild(newH2);
            newDiv.appendChild(newImage);
            newDiv.appendChild(newP);
            document.getElementById("div-container").appendChild(newDiv);
            
        
        };
        
    
        //const[flipped] = useState(false);

        //BtnAdd.addEventListener("click", Addnew);

        <div class="card middle">
                        <div class="front">
                            <img src={Icon1} alt=""/>
                        </div>
                        <div class="back">
                            <div class="back-content middle">
                                <h2>DarkCode</h2>
                                <span>Youtube Channel</span>
                            </div> 
                        </div>
                    </div> 
        */
    
    return (
        <ProductContainers id="products">
            <ProductH1>Products</ProductH1>
            <ProductWarpper></ProductWarpper>
            
        </ProductContainers>
    )
}
export default Products




/*
<ProductH1>Products</ProductH1>
            <ProductWarpper>
                <ProductCard>
                    <ProductH2>CBD Moisturize Conditioner</ProductH2>   
                    <ProductIcon src={Icon1}/> 
                    <ProductP>Moisturize, strengthen and repair your hair with our CBD Conditioner.</ProductP>                
                </ProductCard>
                <ProductCard>
                    <ProductH2>REDKEN Extreme Bleach Recovery</ProductH2>   
                    <ProductIcon src={Icon2}/> 
                    <ProductP>The extreme bleach recovery, helps your blonde hair stay healthy and beautiful.</ProductP>                
                </ProductCard>
                <ProductCard>
                    <ProductH2>MATRIX Sulfate-Free Shampoo</ProductH2> 
                    <ProductIcon src={Icon3}/>  
                    <ProductP>Our color-locking system keeps color looking vibrant for up to 65 DAYS and protects hair from harmful, UV rays that contribute to fading.</ProductP>                
                </ProductCard>
                <ProductCard>
                    <ProductH2>OLAPLEX Bond Maintenance Conditioner</ProductH2>  
                    <ProductIcon src={Icon4}/>  
                    <ProductP>The OLAPLEX Bond Maintenance System consists of essential go-tos for strong, resilient, healthy hair.</ProductP>                
                </ProductCard>
                <ProductCard>
                    <ProductH2>PAUL MITCHELL Super Skinny Serum</ProductH2>  
                    <ProductIcon src={Icon5}/>  
                    <ProductP>Helps smooth hair fast with reduced drying times.</ProductP>                
                </ProductCard>
                <ProductCard>
                    <ProductH2>REDKEN Shampoo & Conditioner</ProductH2>  
                    <ProductIcon src={Icon6}/>  
                    <ProductP>Shampoo and conditioner are the first line of defense for your hair.</ProductP>                
                </ProductCard>
            </ProductWarpper>



*/