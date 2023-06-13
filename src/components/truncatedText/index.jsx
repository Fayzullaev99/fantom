import { useEffect } from "react";
import { useRef } from "react";

const TruncatedText = ({ text, max, className }) => {
    const divRef = useRef(null);

    useEffect(() => {
        const element = divRef.current;
        const lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
        const maxLines = max;
        const maxHeight = lineHeight * maxLines;

        if (element.clientHeight > maxHeight) {
            element.style.overflow = 'hidden';
            element.style.textOverflow = 'ellipsis';
            element.style.display = '-webkit-box';
            element.style.webkitBoxOrient = 'vertical';
            element.style.webkitLineClamp = maxLines;
        }
    }, [text,max]);
    return (
        <p ref={divRef} className={className}>{text}</p>
    );
};

export default TruncatedText