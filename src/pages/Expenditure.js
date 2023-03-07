import { useFormik } from 'formik';



const expenditureType=["Expenditure","Monthly salary"]
const amountType=["UPI","Cash","Credit/Debit"]
const gstType=["GST","NON-GST"]
export default function Expenditure(){
    const formik = useFormik({
        initialValues: {
          date: '',
          expenditureType: expenditureType[0],
          productDetails: '',
          amountType: amountType[0],
          vendor:'',
          quantity:'',
          gsttype:gstType[0],
          totalAmount:''
        },
        onSubmit: function (values) {
            alert(`You are registered! date: ${values.date}. Expenditure: ${values.expenditureType}.  
            totalAmount: ${values.amount}`);
        }
      })

    return(
        <div className="bg-blue-300 min-w-screen min-h-screen overflow-x-hidden">
      <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto bg-white rounded shadow-lg mt-7 p-3">
      <h1 className='text-3xl mb-3 text-center'>Expenditure</h1>
        <div className='mb-4'>
          <label for="date">Date</label>
          <input type="date" name="date" id="date" 
            className={`block w-full rounded border py-1 px-2 ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.date} />
          {formik.touched.date && formik.errors.date && (
            <span className='text-red-400'>{formik.errors.date}</span>
          )}
        </div>
        <div className='mb-4'>
          <label for="expenditureType">Expenditure Type</label>
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
          <label for="productDetails">Product Details</label>
          <input type="text" name="productDetails" id="productDetails" 
            className={`block w-full rounded border py-1 px-2 ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.productDetails} />
          {formik.touched.productDetails && formik.errors.productDetails && (
            <span className='text-red-400'>{formik.errors.productDetails}</span>
          )}
        </div>
        <div className='mb-4'>
          <label for="amountType">Amount Type</label>
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
          <label for="vendor">Vendor name</label>
          <input type="text" name="vendor" id="vendor" 
            className={`block w-full rounded border py-1 px-2 ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.vendor} />
          {formik.touched.vendor && formik.errors.vendor && (
            <span className='text-red-400'>{formik.errors.vendor}</span>
          )}
        </div>
        <div className='mb-4'>
          <label for="quantity">Quantity</label>
          <input type="number" name="quantity" id="quantity" 
            className={`block w-full rounded border py-1 px-2 ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.quantity} />
          {formik.touched.quantity && formik.errors.quantity && (
            <span className='text-red-400'>{formik.errors.quantity}</span>
          )}
        </div>
        <div className='mb-4'>
          <label for="gstType">GST Type</label>
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
          <label for="amount">Total amount</label>
          <input type="number" name="amount" id="amount"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.amount && formik.errors.amount ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.amount} />
          {formik.touched.amount && formik.errors.amount && (
            <span className='text-red-400'>{formik.errors.amount}</span>
          )}
        </div>
        <div className='text-center'>
          <button className='bg-blue-500 rounded p-3 text-white' type='submit'>Submit</button>
        </div>
      </form>
    </div>
    )
}