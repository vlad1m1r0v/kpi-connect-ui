import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import FilterCollapse from "../FilterCollapse";

const PersonsFilter = () => {
  return (
    <FilterCollapse>
      <Stack spacing={1} width="100%" py={1}>
        <TextField
          id="full-name"
          label="Full name"
          variant="outlined"
          size="small"
        />
        <FormControl variant="outlined" size="small">
          <InputLabel id="select-role-label">Role</InputLabel>
          <Select labelId="select-role-label" id="select-role" label="Role">
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="postgraduate">Postgraduate</MenuItem>
            <MenuItem value="teacher">Teacher</MenuItem>
          </Select>
        </FormControl>
        <Stack direction={"row"} spacing={1}>
          <Button
            variant="contained"
            size="small"
            sx={{ width: "fit-content", ml: "auto" }}
          >
            <Typography sx={{ textTransform: "none" }}>Apply</Typography>
          </Button>
          <Button size="small" sx={{ width: "fit-content" }}>
            <Typography sx={{ textTransform: "none" }}>Reset</Typography>
          </Button>
        </Stack>
      </Stack>
    </FilterCollapse>
  );
};

export default PersonsFilter;
