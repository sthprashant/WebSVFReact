import React from 'react';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-json';
//import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-terminal';

import 'ace-builds/webpack-resolver';

const Editor = (props) => {
  return (
    <div>
      <AceEditor
        mode={props.mode}
        theme='terminal'
        onChange={props.onChange}
        name={props.name}
        editorProps={props.editorProps}
        wrapEnabled={props.wrapEnabled}
        value={props.value}
        width='40rem'
        height='30rem'
      />
    </div>
  );
};

export default Editor;
