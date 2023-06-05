import { Divider, Typography } from "@mui/material";

interface Props {
  name: string;
}

const Title: React.FC<Props> = ({ name }) => {
  return (
    <>
      <Typography variant="h6">{name}</Typography>
      <Divider sx={{ mb: 1.5 }} />
    </>
  );
};

export default Title;
