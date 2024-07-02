import * as React from "react";
import {Box} from "@mui/material";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useNavigate } from "react-router-dom";
import MenuBookIcon from '@mui/icons-material/MenuBook';


export default function SingleSelectTreeView(props: any) {
  const { Drawers } = props;
  const Randomid = () => {
    let id = Math.random().toString().slice(2);
    return id;
  };
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: 352, minWidth: 250 }}>
      <SimpleTreeView>
        {Drawers &&  Drawers.length > 0 ? Drawers.map((x: any, y: any) => {
          return ( <>
              <TreeItem   label={x.NodeName} itemId={Randomid()}>
                {x.child && x.child.length > 0 ? x.child.map((a: any, b: any) => {
                  return <TreeItem itemId={Randomid()} label={a.name} onClick={()=>navigate(`/Home/${a.route}`)} />;
                }):null}
              </TreeItem>
            </>)
          }):<> <TreeItem itemId="charts" label="Charts">
          <TreeItem itemId="charts-community" label="@mui/x-charts" />
        </TreeItem>
        <TreeItem itemId="tree-view" label="Tree View">
          <TreeItem itemId="tree-view-community" label="@mui/x-tree-view" />
        </TreeItem></>}

       
      </SimpleTreeView>
    </Box>
  );
}
