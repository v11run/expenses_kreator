import { useFormik } from 'formik';

import axios from 'axios'

import { useState } from 'react';
// import {useState} from 'react'

const expenditureType=["A1-Electronics","A1-Mechanical","B1-Electronics","B1-Mechanical","Salary","Project Expenditure","Office Utilities","Food",""]
const amountType=["UPI","Cash","Debit"]
const gstType=["GST","NON-GST"]
export default function Expenditure(){
  //initialising formik values
    const formik = useFormik({
        initialValues: {
          date: '',
          expenditureType: expenditureType[0],
          productDetails: '',
          amountType: amountType[0],
          vendor:'',
          quantity:'',
          gstType:gstType[0],
          totalAmount:''
        },

        


        //on submit function
        onSubmit: function (values) {
            alert(`You are registered! date: ${values.date}. Expenditure: ${values.expenditureType}.  
            totalAmount: ${values.amount}`);
            console.log(values);
            const data={
              Date: values.date,
              expenditureType:values.expenditureType,
              productDetails:values.productDetails,
              amountType:values.amountType,
              vendor:values.vendor,
              quantity:values.quantity,
              gstType:values.gstType,
              totalAmount:values.totalAmount 
            }
            axios.post('https://sheet.best/api/sheets/6576816a-43cb-403f-888b-7bccb4fe2b70',data).then((response)=>{
              console.log(response);
              
            })
        }
      })


    return(
        <div className="bg-white-300 min-w-screen min-h-screen overflow-x-hidden">
      <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto  rounded shadow-lg mt-7 p-3">
      <h1 className='text-3xl mb-3 text-center'>Expenditure</h1>
        <div className='mb-4'>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" 
            className={`block w-full rounded border py-1 px-2 ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.date} />
          {formik.touched.date && formik.errors.date && (
            <span className='text-red-400'>{formik.errors.date}</span>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor="expenditureType">Expenditure Type</label>
          <select name="expenditureType" id="expenditureType"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.expenditureType && formik.errors.expenditureType ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.expenditureType} >
            {expenditureType.map((expenditureType, index) => (
              <option value={expenditureType} key={index}>{expenditureType}</option>
            ))}
          </select>
          {formik.touched.expenditureType && formik.errors.expenditureType && (
            <span className='text-red-400'>{formik.errors.expenditureType}</span>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor="productDetails">Expenditure Details</label>
          <input type="text" name="productDetails" id="productDetails" 
            className={`block w-full rounded border py-1 px-2 ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.productDetails} />
          {formik.touched.productDetails && formik.errors.productDetails && (
            <span className='text-red-400'>{formik.errors.productDetails}</span>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor="amountType">Payment Method</label>
          <select name="amountType" id="amountType"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.amountType && formik.errors.amountType ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.amountType} >
            {amountType.map((amountType, index) => (
              <option value={amountType} key={index}>{amountType}</option>
            ))}
          </select>
          {formik.touched.expenditureType && formik.errors.expenditureType && (
            <span className='text-red-400'>{formik.errors.expenditureType}</span>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor="vendor">Vendor Details</label>
          <input type="text" name="vendor" id="vendor" 
            className={`block w-full rounded border py-1 px-2 ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.vendor} />
          {formik.touched.vendor && formik.errors.vendor && (
            <span className='text-red-400'>{formik.errors.vendor}</span>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor="quantity">Quantity</label>
          <input type="number" name="quantity" id="quantity" 
            className={`block w-full rounded border py-1 px-2 ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.quantity} />
          {formik.touched.quantity && formik.errors.quantity && (
            <span className='text-red-400'>{formik.errors.quantity}</span>
          )}
        </div>
        <div className='mb-4'>
          <label htmlFor="gstType">GST Status</label>
          <select name="gstType" id="gstType"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.gstType && formik.errors.gstType ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.gstType} >
            {gstType.map((gstType, index) => (
              <option value={gstType} key={index}>{gstType}</option>
            ))}
          </select>
          {formik.touched.gstType && formik.errors.gstType && (
            <span className='text-red-400'>{formik.errors.gstType}</span>
          )}
        </div>

        
        
        <div className='mb-4'>
          <label htmlFor="totalAmount">Amount Paid</label>
          <input type="number" name="totalAmount" id="totalAmount"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.totalAmount && formik.errors.totalAmount ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.totalAmount} />
          {formik.touched.totalAmount && formik.errors.totalAmount && (
            <span className='text-red-400'>{formik.errors.totalAmount}</span>
          )}
        </div>
        <div className='text-center'>
          <button className='bg-blue-500 rounded p-3 text-white' type='submit'>Submit</button>
        </div>
      </form>
    </div>
    )
}