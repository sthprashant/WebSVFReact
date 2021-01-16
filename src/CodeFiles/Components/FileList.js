import React from "react";

import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  // Button,
  Menu,
  MenuItem,
  Box,
} from "@material-ui/core";
//
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

const FileList = (props) => {
  return (
    <div>
      <Grid container justify="flex-start">
        <Grid item>
          
          <List>
            {/* {props.userCode.map((value) => {
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
                    <Box px={1}>
                      <IconButton
                        variant="outlined"
                        onClick={props.handleOptions}
                        size="small"
                        p={5}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="simple-menu"
                        anchorEl={props.fileOptions}
                        keepMounted
                        open={Boolean(props.fileOptions)}
                        // onClose={handleClose}
                      >
                        <MenuItem onClick={() => {}}>Profile</MenuItem>
                        <MenuItem onClick={() => {}}>My account</MenuItem>
                        <MenuItem onClick={() => {}}>Logout</MenuItem>
                      </Menu>
                    </Box>
                  </ListItem>
                </div>
              );
            })} */}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default FileList;
