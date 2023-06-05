import { Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import Field from "@/components/Field";
import Title from "@/components/Title";
import processDate from "@/utils/processDate";

interface Props {
  person: PersonResponse;
}

const PersonalInformation: React.FC<Props> = ({ person }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper square={true} sx={{ p: 2 }}>
            <Title name="Full name" />
            <Stack spacing={2}>
              <Field label={"First name"} defaultValue={person.firstName} />
              <Field label={"Middle name"} defaultValue={person.middleName} />
              <Field label={"Last name"} defaultValue={person.lastName} />
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper square={true} sx={{ p: 2 }}>
            <Title name="Full name in English" />
            <Stack spacing={2}>
              <Field
                label={"First name"}
                defaultValue={person.firstNameEnglish}
              />
              <Field
                label={"Last name"}
                defaultValue={person.lastNameEnglish}
              />
            </Stack>
          </Paper>
        </Grid>
      </Grid>
      <Paper square={true} sx={{ p: 2, mt: 2 }}>
        <Title name="Person" />
        <Stack spacing={2}>
          <Field
            label="gender"
            defaultValue={person.gender === 0 ? "male" : "female"}
          />
          <Field
            label="Birth date"
            defaultValue={processDate(person.birthDate)}
          />
          <Field label="Inn date" defaultValue={person.inn} />
        </Stack>
      </Paper>
    </>
  );
};

export default PersonalInformation;
