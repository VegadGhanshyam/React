
import QuoteForm from "../Quote/QuoteForm";
import {  useNavigate } from "react-router-dom";



const NewQuote = () => {
  const history=useNavigate('');
const addQuoteHAndler= quoteData=>{
  console.log(quoteData);
  
  history('/quotes')
}

    return <QuoteForm onAddQuote={addQuoteHAndler}/>
  };
  export default NewQuote;
  