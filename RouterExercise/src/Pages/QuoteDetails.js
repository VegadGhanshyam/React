import { Fragment } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Comments from "../Component/Comments";
import HighLightingQuote from "../Quote/HighlightedQuote";



const Dummy = [
  { id: 'w1', author: "Vegad", text: "hey whats happning" },
  { id: 'w2', author: "Ghanshyam", text: "Having ful!!!" },
];


const QuoteDetails = () => {
  const params = useParams("");
  
  const quote=Dummy.find(quote=>quote.id===params.quoteId)

  if(!quote){
    <p>No Quote Found</p>
  }
  return (
    <Fragment>
      <HighLightingQuote text={quote.text} author={quote.author}/>
      <Routes>
        <Route
          path={`/quotes/${params.quoteId}/comments`}
          element={<Comments/>}
        />
      </Routes>
    </Fragment>
  );
};
export default QuoteDetails;
