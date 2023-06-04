import processAddress from "@/utils/processAddress";
import processDate from "@/utils/processDate";
import { Grid, Paper, Stack } from "@mui/material";
import Field from "@/components/Field";

interface Props {
  user: User;
}

const GeneralInfoBlock: React.FC<Props> = ({ user }) => {
  return (
    <Paper square={true} sx={{ p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Field
            defaultValue={user?.person.nameSummary ?? ""}
            label="Full name"
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            defaultValue={user?.person.nameEnglishSummary ?? ""}
            label="Full name in English"
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            defaultValue={user?.person.mobilePhoneNumbers[0] ?? ""}
            label="Phone number"
          />
        </Grid>
        <Grid item xs={6}>
          <Field
            defaultValue={
              user?.person.birthDate ? processDate(user.person.birthDate) : ""
            }
            label="Birth date"
          />
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={2}>
            <Field
              defaultValue={user?.person.workPhoneNumber ?? ""}
              label="Work phone number"
            />
            <Field defaultValue={user?.email ?? ""} label="E-mail" />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Field
            maxRows={2}
            defaultValue={
              user?.person.address ? processAddress(user.person.address) : ""
            }
            sx={{
              "& .MuiInputBase-root": {
                height: "128px",
              },
            }}
            label="Address"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default GeneralInfoBlock;
