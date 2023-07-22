import React, { useEffect, useState } from 'react'


const Ui = () => {
    let[data,setData]=useState([])

    const getData = async () =>{
        let res=await fetch("https://dummyjson.com/products");
        let data= await res.json();
        setData(data.products)

        console.log(data.products)
    };
    useEffect(()=>{
      getData()


    })


  return (
    <div>
         {data.length > 0 && data.map((ele)=>{
          return(
            <div key={ele.id}>
              <img src={ele.thumbnail} alt="" />
              <h1>{ele.title}</h1>
              <h3>Price : {ele.price}</h3>
              <p>{ele.category}</p>
              <p>Stock : {ele.stock}</p>

            </div>

          )
         })} 


    </div>
  )
}

export default Ui