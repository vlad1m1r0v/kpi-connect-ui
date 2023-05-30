import {
  acceptModal,
  rejectModal,
  resetModal,
  selectModal,
} from "@/redux/features/UISlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export const Modal = () => {
  const { isOpen, message } = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const handleClose = (reason: string) => {
    if (reason === "backdropClick") {
      dispatch(resetModal());
    }
  };
  const handleAccept = () => {
    dispatch(acceptModal());
  };

  const handleReject = () => {
    dispatch(rejectModal());
  };

  return (
    <Dialog open={isOpen} onClose={(_, reason) => handleClose(reason)}>
      <DialogTitle>Submit action</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="text" color="error" onClick={handleReject}>
          Reject
        </Button>
        <Button variant="contained" onClick={handleAccept} autoFocus>
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
};
