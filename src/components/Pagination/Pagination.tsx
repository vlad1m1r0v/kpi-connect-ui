import { Paper, Pagination } from "@mui/material";
import React from "react";

const Paginator = () => {
  return (
    <Paper
      sx={{
        my: 2,
        py: 1,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
      square={true}
    >
      <Pagination count={10} variant="outlined" shape="rounded" />
    </Paper>
  );
};

export default Paginator;
