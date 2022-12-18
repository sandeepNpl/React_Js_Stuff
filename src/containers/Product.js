import React from "react";
import Card from "../components/Card";
import { useState } from "react";
import { FaPlus} from "react-icons/fa";
function Product() {
  const allItems = [
    {
      name: "nike air force",
      price: 123,
      cartCount: 0,
      favCount: 0,
      image:
        "https://images.unsplash.com/photo-1556814086-bd749c2ceabd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=439&q=80",
    },
    {
      name: "jordan 1 low",
      price: 123,
      cartCount: 0,
      favCount: 0,
      image:
        "https://images.unsplash.com/photo-1585083969600-495ee7e3604b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      name: "Travel Water Bottle ",
      price: 999,
      cartCount: 0,
      favCount: 0,
      image:
        "https://static-01.daraz.com.np/p/0fb9731ac5acf0ef9ccc54a443c36567.jpg",
    },
    {
      name: "vacuum cleaner",
      price: 12,
      cartCount: 0,
      favCount: 0,
      image:
        "https://static-01.daraz.com.np/p/20715c07edb2a32ace384718c7801f63.jpg",
    },
    {
      name: "vacuum cleaner",
      price: 12,
      cartCount: 0,
      favCount: 0,
      image:
        "https://static-01.daraz.com.np/p/20715c07edb2a32ace384718c7801f63.jpg",
    },
  ];

  const [favList, setFavLists] = useState([]);
  const [productList, setProductList] = useState(allItems);
  const newCount = (value) => {
    const newVal = favList.filter((item, id) => {
      return item.name === value.name;
    });
    console.log(newVal);
    if (newVal.length > 0) {
      const tempFavList = [...favList];
      const newVal = tempFavList.filter((item, id) => {
        return item.name !== value.name;
      });
      setFavLists(newVal);
    } else {
      const tempFavList = [...favList];
      tempFavList.push(value);
      setFavLists(tempFavList);
    }
  }


  const addCart=(id)=>{
    const tempProductList = [...productList]
    tempProductList[id]['cartCount']++
    setProductList(tempProductList)
  }

  const removeCart=(id)=>{
    const tempProductList = [...productList]
    tempProductList[id]['cartCount']--
    setProductList(tempProductList)
  }

  const calculateGrandTotal = () => {
    let  total=0;
    productList.map((item,id)=>{
      total = total +(item.price * item.cartCount);
    })
    return total;
  }

  return (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex" }}>
        {productList.map((item, id) => {
          return (
            <Card item={item} id={id} addCart={addCart} newCount={newCount} />
          );
        })}
      </div>


    <div className="Fav" style={{textAlign:"center", width:'20%',margin:"auto", border:'1px solid orange'}}>
      Favorites list: {favList.length}
      <br/>
      {favList.map((item,id)=> <li>{item.name}</li>)}
    </div>
    

    <div style={{margin:'40px 0'}}>
    <table  style ={{margin:'auto'}} border={1}>
      <tr>
        <th>Product Name</th>
        <th>Quantity</th>
        <th>Price</th>
      </tr>
      {productList.map((item,id)=>{
        if(item.cartCount === 0){
          return null
        }
      return(
        <tr>
           <th>{item.name}</th>
           <th><button  onClick={()=> addCart(id)} >+</button>{item.cartCount}<button onClick={()=> removeCart(id)}>-</button></th>
           <th>{item.price}</th>
        </tr> 
      )
      })}

    </table>

    <div style={{textAlign:'center', border:'1px solid orange', width:'17.6%',margin:"auto"}} >Total:{calculateGrandTotal()}</div>

    </div>

      </div>

  );
}
export default Product;
