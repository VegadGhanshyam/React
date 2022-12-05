import QuoteList from "../Quote/QuoteList";

const Dummy = [
  { id: 'w1', author: "Vegad", text: "hey whats happning" },
  { id: 'w2', author: "Ghanshyam", text: "Having ful!!!" },
];

const AllQuote = () => {
  return <QuoteList quotes={Dummy}/>
};
export default AllQuote;
