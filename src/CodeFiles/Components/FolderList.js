import React, { useState } from "react";
// import {
//   Typography,
//   IconButton,
//   Grid,
//   List,
//   ListItemIcon,
//   ListItemText,
//   ListItem,
//   // Button,
//   Menu,
//   MenuItem,
//   Box,
// } from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import FolderIcon from "@material-ui/icons/Folder";
import TreeItem from "@material-ui/lab/TreeItem";
import TreeView from "@material-ui/lab/TreeView";

import websvf from "../../api/websvf";

const FolderList = (props) => {
  // const [fileName, setFileName] = useState("");
  // const [folderName, setFolderName] = useState("");
  // const [fileDialog, setFileDialog] = useState(false);
  // const [folderDialog, setFolderDialog] = useState(false);
  // const [fileOptions, setFileOptions] = useState(null);
  // const [openFolder, setOpenFolder] = useState(false);
  var i = 0;
  // const handleFolderExpand = (e) => {
  //   console.log(e);
  //   setOpenFolder(!openFolder);
  // };
  return (
    <div>
      <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {props.userCode.map((value) => {
          return (
            <div>
              <TreeItem nodeId={i++} label={value.folderName}>
                <TreeItem
                  nodeId={i++}
                  label={value.files.map((file) => {
                    return file.fileName;
                  })}
                  onClick={() => {}}
                />
              </TreeItem>
            </div>
          );
        })}
      </TreeView>
      {/* <List>
        {props.userCode.map((value) => {
          return (
            <div>
              <ListItem button onClick={handleFolderExpand}>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary={value.folderName} />
                {openFolder ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openFolder} timeout="auto" unmountOnExit>
                <Box pl={4}>
                  <ListItem button>
                    <ListItemIcon>
                      <InsertDriveFileIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={value.files.map((file) => {
                        return file.fileName;
                      })}
                    />
                  </ListItem>
                </Box>
              </Collapse>
            </div>
          );
        })}
      </List> */}
    </div>
  );
};

export default FolderList;
