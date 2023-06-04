import FilterCollapse from "@/components/FilterCollapse";
import { Paper } from "@mui/material";

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
