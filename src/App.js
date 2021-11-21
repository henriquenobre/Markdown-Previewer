import './App.css';
import { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'


function App() {

  const [input, setInput] = useState("# Welcome to my React Markdown Previewer! \n ## This is a sub-heading... \n Heres some code, `<div></div>`, between 2 backticks. \n There's also [links](https://www.freecodecamp.org) \n ``` \n // this is multi-line code: \n function anotherExample(firstLine, lastLine) { \n   if (firstLine == '```' && lastLine == '```') { \n     return multiLineCode; \n   } \n } \n ``` \n 1. And there are numbered lists too. \n > Block Quotes! \n You can also make text **bold**... whoa! \n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)")
  


  return (
    <div className="App">
      <textarea
        autoFocus
        id="editor"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div id="preview">
        <ReactMarkdown id="preview" children={input} remarkPlugins={[remarkGfm]} />
      </div>
    </div>
  );
}

export default App;
