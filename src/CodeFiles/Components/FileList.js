import React, { useState } from "react";

import {
  Typography,
  Grid,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Divider,
} from "@material-ui/core";

import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import Editor from "../../Editor/Components/Editor";

const FileList = (props) => {
  const [selectedFile, setselectedFile] = useState(props.userCode[0].fileName);

  // const handleFileClick = (e, fileName) => {
  //   console.log(e);
  //   console.log(e.target.textContent);
  //   setselectedFile(fileName);
  // };
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h6">Files</Typography>
          <List dense>
            {props.userCode.map((value) => {
              return (
                <div>
                  <ListItem
                    key={value.fileId}
                    button
                    onClick={(e) => {
                      props.updateSelectedFile(e, value.fileName);
                    }}
                    selected={props.selectedFile === value.fileName}
                  >
                    <ListItemIcon>
                      <InsertDriveFileIcon />
                    </ListItemIcon>
                    <ListItemText primary={value.fileName} />
                  </ListItem>
                </div>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default FileList;
