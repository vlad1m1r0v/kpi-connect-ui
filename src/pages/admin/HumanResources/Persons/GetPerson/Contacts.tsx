import Field from "@/components/Field";
import Title from "@/components/Title";
import { Paper, Stack, Typography } from "@mui/material";

interface Props {
  person: PersonResponse;
}

const Contacts: React.FC<Props> = ({ person }) => {
  return (
    <>
      <Paper square={true} sx={{ p: 2 }}>
        <Title name="Person" />
        <Stack spacing={2}>
          <Field label="Is outside" defaultValue={String(false)} />
          <Field label="Place of work" defaultValue={person.placeOfWork} />
          <div>
            <Title name="Phone numbers" />
            {person.mobilePhoneNumbers.map((phoneNumber, index) => (
              <Typography ml={2} mb={1}>
                {phoneNumber}
              </Typography>
            ))}
          </div>
          <Field
            label="Work phone number"
            defaultValue={person.workPhoneNumber}
          />
          <Field label="E-mail" defaultValue={person.email} />
        </Stack>
      </Paper>
    </>
  );
};

export default Contacts;
