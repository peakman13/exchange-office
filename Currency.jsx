import React, { useState } from 'react'
import '../css/currency.css'
import { MdCurrencyExchange } from "react-icons/md";
import axios from 'axios';

let base_url ="https://api.freecurrencyapi.com/v1/latest";
let api_key = "fca_live_G0LvKwF4402JMh8X4Beupd5zYsLQZfR8T8AkOo4m";

function Currency() {
  const[amount, setAmount] = useState();
  const[fromCurrency , setFromCurrency]= useState("USD");
  const[toCurrency, setToCurrency]= useState ("TRY");
  const[result, setResult]= useState (0);

  const exchange = async()=>{
    const response = await axios.get(`${base_url}?apikey=${api_key}&base_currency=${fromCurrency}`);
   const result = (response.data.data[toCurrency]*amount).toFixed(2);
   setResult(result);
   console.log(response);
  }

  return (
    <div className='wrapper'>
      <h1 className='office'>EXCHANGE OFFICE</h1>
      <div className='currency-div'>
        <input value={amount} onChange={(e)=>setAmount(e.target.value)} type="number"  className='amount'/>
            <select onChange={(e)=>setFromCurrency(e.target.value)} className="currency-option1" id="">
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
            </select>
            <MdCurrencyExchange />
            <select onChange={(e)=>setToCurrency(e.target.value)} className="currency-option2" id="">
                <option>USD</option>
                <option>EUR</option>
                <option>TRY</option>
            </select>
        <input value={result} onChange={(e)=>setResult(e.target.value)} type="number" className='result' />    
      </div>
      <button onClick={exchange} className='push'>PUSH</button>
    </div>
  )
}

export default Currency

