import styled from "styled-components";
import "./Product.css";
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setItemAction,} from "../../redux/action/itemAction";









const Container = styled.div`
    
`
const Wrapper = styled.div`
    padding: 30px;
    display: flex;
`

const ImgeContainer = styled.div`
    flex: 0.155;
    border: 1px solid lightgray;
    overflow: scroll;
    height: 400px;
    
`
const Img1 = styled.img`
    width: 100%;
    height: 10vh;
    object-fit: contain;
    border-bottom: 1px solid lightgray;
    cursor: pointer;

    &:hover{
        border: 1px solid red;
    }
`

const ImgContainer = styled.div`
    flex: 0.8;
    
    
`
const Image = styled.img`
    width: 98%;
    height: 50vh;
    object-fit: contain;
`

const InfoContainer = styled.div`
    flex: 1;
    position: relative;
    
`
const Title = styled.h3`
    font-weight: 700;
    font-size: 25px;
    line-height: 1;
`
const Title1 = styled.p`
    color: #FF6F61;
`
const Uses = styled.p`
    color: #FF6F61;
`

const Button1 = styled.button`
    width: 230px;
    padding: 10px;
    margin: 5px;
    border-radius: 7px;
    background-color: #fff;
    line-height: 1.5;
    color: #913D36;
    border: 0.5px solid gray;
    
`
const Button2 = styled.button`
    width: 210px;
    padding: 10px;
    margin: 5px;
    border-radius: 7px;
    background-color: #fff;
    line-height: 1.5;
    color: #913D36;
    border: 0.5px solid gray;
`
const Ul = styled.ul`
    position: absolute;
    
    
`
const Li = styled.li`
    line-height: 1.5;
    text-align: justify;
    
`


const PriceContainer = styled.div`
    flex: 0.8;
    border: 1px solid gray;
    border-radius: 10px;
    width: 250px;
    height: 300px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`
const Tile = styled.h5`
    text-align: left;
    margin-left: 7px;
    border-bottom: 1px solid lightgrey;
    color: black;
    font-size: 12px;
    
`
const Select = styled.select`
    width: 120px;
    padding: 7px;
    border: 0.5px solid lightgray;
    margin: 10px;
`
const Option = styled.option``
const Button = styled.button`
    width: 90%;
    padding: 10px;
    background-color: #FF6F61;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 17px;
    font-weight: 700;
    margin-left: 5%;

`
const Img2 = styled.img`
    width: 100%;
    margin-top: 20px;

`
const Add = styled.p`
    font-size: 14px;
    border: 1px dashed black;
    margin-top:10px;
`
const Span = styled.span`
    font-weight: 900;
    font-size: 15px;
`
const Rating = styled.span`
    margin: 5px;
    color: #FF6F61;
`
const Star = styled.span`
    margin: 5px;
    background-color:#1AAB2A;
    font-size: 15px;
    padding: 5px 8px;
    color: #fff;
    cursor: pointer;
    border-radius:2px;
    position: relative;
    margin-right: 5px;
    font-weight: 500;
    
`

const Product = () => {

   const {id} = useParams()
//    console.log(id)
   const [product,setProduct] = useState([]);
   const [showimg , setShowimg] = useState('');
   const dispatch = useDispatch()
  

   useEffect(()=>{
        getData()
   },[id])

   const getData = async ()=>{
       try{
            const {data} = await axios.get(`http://localhost:5000/zandu/${id}`)
            console.log(data)
            // console.log(product.image)

            setProduct({...product,...data})
            console.log(product)
       }
       catch(err){}
   }

 



  return (
    <Container>
        <Wrapper>
            <ImgeContainer>
                <Img1 onClick={()=>{setShowimg(product.img)}}  src={product.img}></Img1>
                <Img1 onClick={()=>{setShowimg(product.img1)}} src={product.img1}></Img1>
                <Img1 onClick={()=>{setShowimg(product.img2)}} src={product.img2}></Img1>
                <Img1 onClick={()=>{setShowimg(product.img3)}} src={product.img3}></Img1>
                <Img1 onClick={()=>{setShowimg(product.img4)}} src={product.img4}></Img1>
                <Img1 onClick={()=>{setShowimg(product.img5)}} src={product.img5}></Img1>
            </ImgeContainer>
            <ImgContainer>
                {showimg===""?<img className="imag" src={product.img}></img>:<Image src={showimg}></Image>}
            </ImgContainer>
            <InfoContainer>
                <Title>{product.title}</Title>
                <Title1>{product.Subtitle}</Title1>
                <Star>{product.star}</Star><Rating>{product.rating} </Rating> <br/><br/>
                Pack Size ({product.pack}) <br/>
                <Button1>225gm {product.type}..... ₹ {product.payment}</Button1>
                <Button2>400gm {product.type}..... ₹ {product.mrp}</Button2>
                <Uses>{product.uses}</Uses>
                
                Product highlights
                <Ul>
                    <Li>{product.line1}</Li>
                    <Li>{product.line2}</Li>
                    <Li>{product.line3}</Li>
                    
                </Ul>
            </InfoContainer>

            <PriceContainer>
                <Tile>{product.people} people bought this recently</Tile>
                <input type="radio" name="status"/> 
                <span className="price">₹ {product.payment} <span className="cross">₹ {product.mrp}</span>  <span className="off">{product.discount}% off</span></span>
                <br/>
                <br/>
                <input type="radio" name="status"/>
                <span className="price">₹ {product.payment} +<span className="free">free shipping and 5% Extra cashback with</span></span>
                <br/>
               
                <p className="all">Inclusive of all taxes</p>
                <Select>
                    <Option>1 {product.form}</Option>
                    <Option>2 {product.form}</Option>
                    <Option>3 {product.form}</Option>
                    <Option>4 {product.form}</Option>
                    <Option>5 {product.form}</Option>
                    <Option>6 {product.form}</Option>
                    <Option>7 {product.form}</Option>
                    
                </Select>
                of {product.quintity}{product.unit} {product.type}
                <br/>
               <a href="https://www.1mg.com/cart"><Button>Continue</Button></a> 

                <Img2 src="https://tpc.googlesyndication.com/simgad/9410805786234861386"></Img2>
                <Add><Span>Mobikwik</Span>: Pay with Mobikwik and get up to ₹500 cashback on allopathy medicines. 
                     Get assured cashback of ₹100. Minimum cart value for the offer is ₹800. Offer ends 5th May 2022.</Add>
            </PriceContainer>
        </Wrapper>
    </Container>

  )
}

export default Product



//()=>{dispatch(setItemAction(product))}