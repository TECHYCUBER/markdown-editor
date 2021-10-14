import React, { useState } from 'react'
import './style.css';
import ReactMarkdown from 'react-markdown';


const Markdownreact = () => {
    const [markDown, setMarkDown] = useState("Welcome to markdown");
   
   
    return (
       <>
       <div className="center-div">
           <textarea className="left-side" value={markDown} onChange = {
           (e) => setMarkDown(e.target.value)
           }></textarea>
           <div className="right-side"><ReactMarkdown>{markDown}</ReactMarkdown> </div>
       </div>
       </>
    )
}

export default Markdownreact;
