import React, { useEffect, useState } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import FolderIcon from "@material-ui/icons/Folder";
import TreeItem from "@material-ui/lab/TreeItem";
import TreeView from "@material-ui/lab/TreeView";

import websvf from "../../api/websvf";

const FolderList = (props) => {
  const [folders, setFolders] = useState([]);
  const [userCode, setUserCode] = useState([{}]);
  var i = 0;

  async function loadUserCode() {
    var project = await websvf.get("/db/getFiles");
    setUserCode(
      project.data.projects.map((project) => {
        return project.userCode;
      })
    );
    // console.log(userCode);
  }

  async function loadFolders() {
    var project = await websvf.get("/db/getFiles");
    setFolders(
      project.data.projects.map((project) => {
        return project.userCode.map((value) => {
          if (value.folderName) {
            return value.folderName;
          } else {
            return "";
          }
        });
      })
    );
    //console.log(folders);
    //setFolders(fldr);
  }

  useEffect(() => {
    loadFolders();
    loadUserCode();
  }, []);
  // const load
  return (
    <div>
      <List>
        {userCode.map((value) => {
          return (
            <div>
              <ListItem button>
                <ListItemIcon>
                  <FolderIcon />
                </ListItemIcon>
                <ListItemText primary ={userCode.folderName}/>
              </ListItem>
            </div>
          );
        })}
      </List>
      {/* <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {userCode.map((value) => {
          return <TreeItem nodeId={i++} label={value.folderName} />;
        })}
      </TreeView> */}
    </div>
  );
};

export default FolderList;
