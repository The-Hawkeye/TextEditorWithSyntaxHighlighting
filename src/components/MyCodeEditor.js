import React, { useState, useRef, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import './MyCodeEditor.css';

function MyCodeEditor() {
  const [code, setCode] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleButtonClick = () => {
    window.open('https://github.com/your-repo-link', '_blank');
  };

  const handleScroll = () => {
    const textarea = textareaRef.current;
    const highlighter = textarea.nextSibling;
    highlighter.scrollTop = textarea.scrollTop;
    highlighter.scrollLeft = textarea.scrollLeft;
  };

  return (
    <div>
      <h1>MyCodeEditor</h1>
      <p>A simple JavaScript text editor with syntax highlighting.</p>
      <p>It uses the default theme of Prism.js.</p>
      <button onClick={handleButtonClick}>GitHub Repo Link</button>
      <div className="editor-container">
        <textarea
          ref={textareaRef}
          className="code-input"
          value={code}
          onChange={handleChange}
          onScroll={handleScroll}
          spellCheck="false"
          rows="30"
          cols="120"
          placeholder="Enter your code here..."
        />
        <pre className="code-highlight" aria-hidden="true">
          <code className="language-js">{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default MyCodeEditor;
