// @flow strict
import * as React from 'react';
import { BrowserRouter, Link, Route, Router, Routes } from 'react-router-dom';
import logo from '../../img/logo.png'
import { useState,useContext } from 'react';
import axios  from 'axios';
import { GlobalState } from './Global';
function Edit_shop() {
    const state = useContext(GlobalState)
    const [name,setname] = state.userAPI.name
    const [phone,setphone] = state.userAPI.phone
  const [token] = state.token
  const [email,setemail]= state.userAPI.email
  const [shopname,setshopname] = state.userAPI.shopname
  const [shopadd] = state.userAPI.shopadd
  const [zip] =state.userAPI.zip
  const [lastname,setlastname] = state.userAPI.lastname
  const [age,setage] = state.userAPI.age
  const [ gst,setgst] = state.userAPI.gst
  const [bank ,setbank] = state.userAPI.bank
  const [ifsc,setifsc] = state.userAPI.ifsc
  const [add1,setadd1] = state.userAPI.add1
  const [add2,setadd2] = state.userAPI.add2

  const [add3,setadd3] = state.userAPI.add3

    const handleSubmit = async e => {
        console.log(name)

        e.preventDefault()
        try{
          console.log("err")
            await axios.patch('/shopowner/redata',{name,lastname,age,phone,gst,bank,ifsc,add1,add2,add3},{   headers: {Authorization: token}});
            window.location.href ="/"
            window.location.href ="/"


        }catch(err)
        {
            //alert(err.response.data.msg)
            alert(err)
            window.location.href ="/"

        }
    
    }
    return (
        // @flow strict

            <div className="container-fluid p-5  text-white text-center bg-primary bg-gradient p-5">
                <img className='rounded-circle' src={logo} />
                <div>
                <form className='row text-center align-center' onSubmit={handleSubmit} >
                    <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-4 mb-3 mt-3 '>
                             <input for="name" placeholder='Enter Name' type="text" className='form-control' id='Name' value={name} onChange={(e) =>setname(e.target.value)} />
                        </div>
                        <div className=' col-sm-12 col-md-4 mb-3 mt-3'>
                            <input for="lastname" placeholder='Enter Lastname' type="text" className='form-control' id='lastname' value={lastname} onChange={(e) =>setlastname(e.target.value)} />
                        </div>
                        <div className="col-md-2"/>


                        <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-4  mb-3 mt-3'>
                            <input for="age" placeholder='enter your age' type="number" value={age} onChange={(e) =>setage(e.target.value)} className='form-control' id='age' />
                        </div>
                        <div className='col-sm-12 col-md-4 mb-3 mt-3'>
                            <input for="Phone Number" placeholder='enter Phone Number' type="text" value={phone} onChange={(e) =>setphone(e.target.value)} className='form-control' id='phone' />
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-8 mb-3 mt-3'>
                            <input  placeholder='GST Number ' value={gst} onChange={(e) =>setgst(e.target.value)} type="text" className='form-control' id='email' />
                        </div>
                        <div className="col-md-2"/>
                        <div className="col-md-2"/>

<div className='col-sm-12 col-md-8 mb-3 mt-3'>
    <input  placeholder='  Bank Number' type="text" value={bank} onChange={(e) =>setbank(e.target.value)} className='form-control' id='email' />
</div>
<div className="col-md-2"/>
                        <div className="col-md-2"/>

<div className='col-sm-12 col-md-8 mb-3 mt-3'>
    <input  placeholder='  IFSC Code' value={ifsc} onChange={(e) =>setifsc(e.target.value)} type="text" className='form-control' id='email' />
</div>
<div className="col-md-2"/>
                        <div className="col-md-2"/>


<div className='col-sm-12 col-md-8 mb-3 mt-3'>
    <input  placeholder='Address 1  ' value={add1} onChange={(e) =>setadd1(e.target.value)} type="text" className='form-control' id='email' />
</div>
<div className="col-md-2"/>
                        <div className="col-md-2"/>

                        <div className='col-sm-12 col-md-4 mb-3 mt-3'>
                            <input for="address 2. ..." value={add2} onChange={(e) =>setadd2(e.target.value)} type="address 2. ..." placeholder='address 2. ...' className='form-control' id='address 2. ...' />
                        </div>
                        <div className='col-sm-12 col-md-4 mb-3 mt-3'>
                            <input for="address 3. ..." value={add3} onChange={(e) =>setadd3(e.target.value)} type="address 3. ..." placeholder='address 3. ...' className='form-control' id='address 3. ...' />
                        </div>
                        <div className="col-md-2"/>

                            <button  className='container col-sm-12 col-md-6 mb-3 mt-3 bg-success' >
                                Save

                            </button>

                    </form>
                    <p >
                        <Link className='text-white' to={'/Profile'} >No need</Link>
                    </p>
                    <p></p>
                </div>
            </div>


    );
};

export default Edit_shop;
