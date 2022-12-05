import "./HighlightedQuote.css";

const HighLightingQuote = (props) => {
  return (
    <figure className="quote">
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};
export default HighLightingQuote;
