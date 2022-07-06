import { LoadingQuote } from "../03-examples/LoadingQuote";
import { Quote } from "../03-examples/Quote";
import { useCounter } from "../Hook/useCounter";
import { useFetch } from "../Hook/useFetch";

export const Layout = () => {

    const { counter, onSumar } = useCounter();

    var url = 'https://breakingbadapi.com/api/quotes/' + counter;
    const {
        data,
        isLoading,
        hasError
    } = useFetch(url);


    const { quote, author } = !!data && data.length > 0 && data[0];

    return (
        <>
            <h1>BrakingBad Quotes</h1>
            <hr />
            {
                isLoading ?

                    <LoadingQuote />

                    :
                    <Quote quote={quote} author={author} />
            }

            <button className="btn btn-primary" disabled={isLoading} onClick={onSumar}>
                Next Quote
            </button>


        </>
    )
}
