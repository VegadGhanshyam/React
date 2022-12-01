import { NavLink } from 'react-router-dom';

import './QuoteItem.css';

const QuoteItem = (props) => {
  return (
    <li className='item'>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <NavLink className='btn' to={`/quotes/${props.id}`}>
        View Fullscreen
      </NavLink>
    </li>
  );
};

export default QuoteItem;