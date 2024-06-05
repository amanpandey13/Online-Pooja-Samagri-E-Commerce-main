// @flow strict
import React from 'react'
import { useState,useContext } from 'react';
import { GlobalState } from './Global';
import axios from 'axios'

import Button from 'react-bootstrap/Button';
function Home() {
  const state = useContext(GlobalState)
  const [order,setorder]  = state.userAPI.order
  const [token] = state.token
  const done   = async (val) =>{



    try{
      console.log("err")
      alert("")
      await axios.post('/shopowner/done',{val},{   headers: {Authorization: token}});
      window.location.href ="/"


    }catch(err)
    {
        //alert(err.response.data.msg)
        alert(err)
        window.location.href ="/"

    }
  }



  const notdone   = async (val) =>{



    try{
      console.log("err")
      alert("Are You sure to cancel this pooja")
      await axios.post('/shopowner/notdone',{val},{   headers: {Authorization: token}});
      window.location.href ="/"


    }catch(err)
    {
        //alert(err.response.data.msg)
        alert(err)
        window.location.href ="/"

    }
  }




if(order.length !== 0)
{
  return (
<>
  
<div className='row     p-3  m-2 text-center  '>
{
  order.map(val=>
      
    <div key={val.product._id}  className='  hover_box container-fluid   border  row  p-1 mt-5  text-center' >
    <div className=' row container-fluid bg-secondary'>
        <div className='col-sm-10 col-md-5 col-lg-5 '>
            <img src={val.product.url} width="250px" height="250px"/>
            <br/>
            <h1>Product : 
        {
          val.product.name
        }
      </h1>
      <h1>
        Units :
        {
          val.product.size
        }
      </h1>
        </div>
        <div className='col-sm-10 col-md-5 col-lg-5 '>
        <h1>
        customer  : 
        {
          val.customer.name
        }
      </h1>
      <h3>
       address :
         {
          val.customer.add
        }
      </h3>
      <h3>
        zip code :
         {
          val.customer.zip
        } 
      </h3>
      <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button"  class="btn btn-secondary bg-primary" onClick={()=>{done(val)}}> <h1> Done</h1></button>
        <button type="button"  class="btn btn-secondary bg-danger" onClick={()=>{notdone(val)}} > <h1>Reject </h1></button>
      </div>
    
          </div>
    </div>
    <div>
      </div>
</div>
    
   
  )
}


</div>


 </>)
}
else{
  return (
    <>
     <div>
      <h1 className='bg-primary p-5 text-center'>
       No Iteam in the order
      </h1>
    </div>


    


    </>
  )
}
}
export default Home;