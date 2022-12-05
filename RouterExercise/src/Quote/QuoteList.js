import { Fragment } from 'react';

import './QuoteList.css';
import QuoteItem from './QuoteItem';
import { useLocation, useNavigate } from 'react-router-dom';

const sortlist=(quotes,ascending)=>{
  return quotes.sort((quoteA,quoteB)=>{
    if(ascending){
      return quoteA.id>quoteB.id ? 1:-1;
    }else{
      return quoteA.id<quoteB.id ? 1: -1
    }
  })
}

const QuoteList = (props) => {
  debugger
  const navi=useNavigate('');
  const location=useLocation('');

  const queryparam= new URLSearchParams(location.search)

  const isshortr=queryparam.get('sort')==='asc'

  const sortlis=sortlist(props.quotes, isshortr)

  const changeShortingOrder=()=>{
    navi('/quotes?sort='+ (isshortr ? 'desc':'asc') )
  }
    return (
      <Fragment>
        <div className='sorting'>
          <button onClick={changeShortingOrder}>sort {isshortr ? 'descending':'Ascending'}</button>
        </div>
        <ul>
          {sortlis.map((quote)=>(
            <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}/>
          ))}
        </ul>
      </Fragment>
     
    ) ;
  };
  export default QuoteList;