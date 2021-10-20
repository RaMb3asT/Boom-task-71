import { useState } from "react";

export default function Document(props) {
    const { title, content } = props;
    const [enabled, setEnabled] = useState(true);

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - Math.ceil(e.target.scrollTop) === e.target.clientHeight;
        if (bottom) { 
            setEnabled(false);
            console.log(bottom);
         }
    }

    return (
        <div style={{overflowY: "scroll", height: "300px"}} onScroll={handleScroll}>
            <h2 className="title">{title}</h2>
            <div className="content">{content}</div>
            <button disabled={enabled}>I Agree</button>
        </div>
    );
}