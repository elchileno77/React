import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react"


export const Quote = ({ quote, author }) => {
    const pRef = useRef();

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {

        const { width, height } = pRef.current.getBoundingClientRect();

        setBoxSize({ width, height })

        return () => {
        };
    }, [quote])

    return (
        <>
            <blockquote className="blockQuote text-end"
                style={{ display: 'flex' }}
            >
                <p ref={pRef} className="mb-1">{quote}</p>
                <footer className="blockQuote-footer">{author}</footer>
            </blockquote>
            <code>{ JSON.stringify(boxSize)}</code>
        </>

    )
}
