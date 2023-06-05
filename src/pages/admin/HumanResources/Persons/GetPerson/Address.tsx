import Field from "@/components/Field";
import Title from "@/components/Title";
import { Paper, Stack } from "@mui/material";

interface Props {
  person: PersonResponse;
}

const Address: React.FC<Props> = ({ person }) => {
  const { address } = person;
  return (
    <Paper square={true} sx={{ p: 2 }}>
      <Title name="Person" />
      <Stack spacing={2}>
        <Field label="Country" defaultValue={address.country} />
        <Field label="State" defaultValue={address.state} />
        <Field label="District" defaultValue={address.district} />
        <Field label="City" defaultValue={address.city} />
        <Field label="Street" defaultValue={address.street} />
        <Field label="Postal code" defaultValue={address.postal_code} />
      </Stack>
    </Paper>
  );
};

export default Address;
