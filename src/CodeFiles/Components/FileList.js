import React, { useState } from 'react';

import {
  Typography,
  Grid,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
} from '@material-ui/core';

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const FileList = (props) => {
  //const [selectedFile, setselectedFile] = useState(props.userCode[0].fileName);

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant='h6'>Files</Typography>
          <List dense>
            {props.userCode.map((value, index) => {
              return (
                <div key={index}>
                  <ListItem
                    key={value.fileId}
                    button
                    // onClick={props.updateSelectedFile}
                    onClick={() => props.updateSelectedFile(value.fileName)}
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
