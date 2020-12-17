import React, { useState } from 'react';
import './App.css';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-json';
//import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-terminal';

import 'ace-builds/webpack-resolver';

import websvf from './api/websvf';

import prettyFormat from 'pretty-format';

function App() {
  const [response, setResponse] = useState('');
  const [code, setCode] = useState(`#include<stdio.h>
  int main() {
      int intType;
      float floatType;
      double doubleType;
      char charType;
  
      // sizeof evaluates the size of a variable
      printf("Size of int: %zu bytes\\n", sizeof(intType));
      printf("Size of float: %zu bytes\\n", sizeof(floatType));
      printf("Size of double: %zu bytes\\n", sizeof(doubleType));
      printf("Size of char: %zu byte\\n", sizeof(charType));
      
      return 0;
  }`);

  const onChange = (newValue) => {
    console.log('change', newValue);
    setCode(newValue);
  };

  const codeSubmit = async () => {
    const response = await websvf.post('/', `code=${code}`);

    setResponse(prettyFormat(response.data, { escapeString: false }));
  };

  return (
    <div className='App'>
      <AceEditor
        mode='c_cpp'
        theme='terminal'
        onChange={onChange}
        name='UNIQUE_ID_OF_DIV'
        editorProps={{ $blockScrolling: true }}
        wrapEnabled={true}
        value={code}
      />
      <button onClick={codeSubmit}> Submit </button>
      <h1>Response from the POST request:</h1>

      <AceEditor
        mode='json'
        theme='terminal'
        //onChange={onChange}
        name='UNIQUE_ID_OF_DIV1'
        editorProps={{ $blockScrolling: true }}
        wrapEnabled={true}
        value={response}
      />
    </div>
  );
}

export default App;
