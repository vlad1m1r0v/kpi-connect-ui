import {
  closeSnackbar,
  resetSnackbar,
  selectSnackbar,
} from "@/redux/features/UISlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Alert, Snackbar } from "@mui/material";
import Slide, { SlideProps } from "@mui/material/Slide";
import { useEffect, useRef } from "react";

type TransitionProps = Omit<SlideProps, "direction">;

const TransitionRight = (props: TransitionProps) => {
  return (
    <>
      <Slide {...props} direction="right" />
    </>
  );
};

export const Notification = () => {
  const { isOpen, message, variant } = useAppSelector(selectSnackbar);

  const dispatch = useAppDispatch();

  const snackbarRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const snackbarElement = snackbarRef.current;
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.removedNodes.length > 0 &&
          Array.from(mutation.removedNodes).some(
            (element) => element === snackbarElement
          )
        ) {
          dispatch(resetSnackbar());
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [snackbarRef.current]);

  const handleClose = () => {
    dispatch(closeSnackbar());
  };

  return (
    <Snackbar
      ref={snackbarRef}
      open={isOpen}
      TransitionComponent={TransitionRight}
      key={TransitionRight.name}
    >
      <Alert onClose={handleClose} severity={variant!} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
