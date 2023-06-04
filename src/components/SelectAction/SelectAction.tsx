import { Button, Collapse, Stack, Typography, styled } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { openModal } from "@/redux/features/UISlice";

const StyledButton = styled(Button)({
  minWidth: 140,
});

const SelectAction = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState<boolean>(false);

  const handleButtonClick = () => {
    setOpen(!open);
  };

  const handleDeleteClick = () => {
    dispatch(openModal({ message: "Are you sure you want to delete person?" }));
  };

  return (
    <>
      <StyledButton variant="contained" onClick={handleButtonClick}>
        <Typography sx={{ textTransform: "none" }}>Select action</Typography>
      </StyledButton>
      <Collapse in={open} timeout="auto" unmountOnExit sx={{ marginTop: 1 }}>
        <Stack spacing={1} sx={{ display: "flex" }} alignItems="center">
          <StyledButton variant="contained">
            <VisibilityIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography sx={{ textTransform: "none" }}>View</Typography>
          </StyledButton>
          <StyledButton variant="contained" color="success">
            <CreateIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography sx={{ textTransform: "none" }}>Update</Typography>
          </StyledButton>
          <StyledButton
            variant="contained"
            color="error"
            onClick={handleDeleteClick}
          >
            <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
            <Typography sx={{ textTransform: "none" }}>Delete</Typography>
          </StyledButton>
        </Stack>
      </Collapse>
    </>
  );
};

export default SelectAction;
