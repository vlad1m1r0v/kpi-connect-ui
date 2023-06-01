import { Button, Collapse, Paper, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ReactNode, useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface Props {
  children: ReactNode;
}

const FilterCollapse: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Paper square sx={{ width: "100%", padding: 1, mb: 2 }}>
      <div style={{ display: "flex" }}>
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ ml: "auto", mr: 1 }}
        >
          <FilterAltIcon sx={{ mr: 1 }} />
          <Typography sx={{ textTransform: "none" }}>filters</Typography>
          {open ? <ExpandLess sx={{ ml: 1 }} /> : <ExpandMore sx={{ ml: 1 }} />}
        </Button>
        <Button variant="contained" sx={{ mr: 1 }}>
          <AddCircleIcon sx={{ mr: 1 }} />
          <Typography sx={{ textTransform: "none" }}>add</Typography>
        </Button>
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {children}
      </Collapse>
    </Paper>
  );
};

export const Mailing = () => {
  return (
    <>
      <FilterCollapse>
        <div style={{ width: "100%", height: "100px", padding: 2 }} />
      </FilterCollapse>
      <Paper square sx={{ width: "100%", height: "1000px", padding: 2 }} />
    </>
  );
};
