import { Fragment, useRef } from 'react';
// import { useState } from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import './QuoteForm.css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  // const [isEnter,setIsEnter]=useState(true);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
// const FocusHandler= ()=>{
// setIsEnter(true);
// }
  return (
    <Fragment>
{/* <NavigateProps when={isEnter} message={(location)=>'Are yoour sure to leave page'}/> */}
    
    <Card>
      <form  className='form' onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className='loading'>
            <LoadingSpinner />
          </div>
        )}

        <div className='control'>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className='control'>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className='actions'>
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card></Fragment>
  );
};

export default QuoteForm;