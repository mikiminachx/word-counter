import React, { useState } from 'react';
import './index.css';

function WordCounter() {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [characterCount, setCharacterCount] = useState(0);
    const [sentenceCount, setSentenceCount] = useState(0);
    const [paragraphCount, setParagraphCount] = useState(0);

    const CountWord = () => {
        const countWord = text.trim();

        setWordCount(countWord ? countWord.split(/\s+/).length : 0);
        setCharacterCount(countWord.length);
        setSentenceCount(countWord ? countWord.split(/[.!?]+/).length: 0);
        setParagraphCount(countWord ? countWord.split(/\n+/).length : 0);
    };

    const handleInputChange = (event) => {
        setText(event.target.value);
        CountWord();
    };

    const handleReset = () => {
        setText('');
        setWordCount(0);
        setCharacterCount(0);
        setSentenceCount(0);
        setParagraphCount(0);
    };

    return (
        <section>
            <h2>Word Counter</h2>
            <div className="container">
                <div className="textField">
                    <div className="textFieldDisplay">
                        <p>Words: <span className="words">{wordCount}</span></p>
                        <p>Characters: <span className="characters">{characterCount}</span></p>
                        <button className="reset" onClick={handleReset}>Reset</button>
                    </div>
                    <div className="textFieldArea">
                        <textarea 
                            id="textInput" 
                            required 
                            spellCheck="false" 
                            value={text} 
                            onChange={handleInputChange}
                        ></textarea>
                        <span>Start Typing...</span>
                    </div>
                </div>
                <div className="wordCount">
                    <h4>Details</h4>
                    <p>Words: <span id="words">{wordCount}</span></p>
                    <p>Characters: <span id="characters">{characterCount}</span></p>
                    <p>Sentences: <span id="sentences">{sentenceCount}</span></p>
                    <p>Paragraphs: <span id="paragraphs">{paragraphCount}</span></p>
                </div>
            </div>
        </section>
    );
}

export default WordCounter;