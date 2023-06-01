import { selectFeatures, selectRole } from "@/redux/features/AuthSlice";
import { useAppSelector } from "@/redux/store";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import adminFeatures from "./adminFeatures";
import Feature from "./types";

const features: Feature[] = [...adminFeatures];

interface Props {
  list: Feature;
}

const CollapseList: React.FC<Props> = ({ list }) => {
  const [open, setOpen] = useState<boolean>(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{list.icon}</ListItemIcon>
        <ListItemText primary={list.name} />
        <IconButton>{open ? <ExpandLess /> : <ExpandMore />}</IconButton>
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {list.subfeatures.map((subfeature, index) => (
            <Link key={index} to={subfeature.link}>
              <ListItemButton sx={{ pl: 9 }}>
                <ListItemText primary={subfeature.name} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export const ListItems = () => {
  const role = useAppSelector(selectRole);
  const availableFeatures = useAppSelector(selectFeatures);

  const [lists, setLists] = useState<Feature[]>();

  useEffect(() => {
    if (availableFeatures)
      setLists(
        features.filter(
          (feature) =>
            feature.role === role &&
            availableFeatures[role]?.includes(feature.feature)
        )
      );
  }, [availableFeatures]);

  return (
    <>
      <List
        sx={{ width: "100%", bgcolor: "background.paper", paddingTop: 0 }}
        component="nav"
      >
        <Divider />
        {lists?.map((list, index) => (
          <div key={index}>
            <CollapseList list={list} />
            <Divider />
          </div>
        ))}
      </List>
    </>
  );
};

export default ListItems;
