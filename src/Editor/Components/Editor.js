import React from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/mode-json";
//import 'ace-builds/src-noconflict/mode-javascript';
import "ace-builds/src-noconflict/theme-terminal";

import "ace-builds/webpack-resolver";

const Editor = (props) => {
  return (
    <div>
      <AceEditor
        mode="c_cpp"
        theme="terminal"
        onChange={props.onChange}
        name="main-editor"
        editorProps={{ $blockScrolling: true }}
        wrapEnabled={true}
        value={props.value}
        width="70rem"
        height="30rem"
      />
    </div>
  );
};

export default Editor;
