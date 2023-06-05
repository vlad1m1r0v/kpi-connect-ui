import Field from "@/components/Field";
import Title from "@/components/Title";
import { Paper, Stack, Typography } from "@mui/material";

interface Props {
  person: PersonResponse;
}

const Degrees: React.FC<Props> = ({ person }) => {
  return (
    <>
      <Paper square={true} sx={{ p: 2 }}>
        <Title name="Person" />
        <Stack spacing={2}>
          <Field
            label="Science degree"
            defaultValue={person.scienceDegree.fullName}
          />
          <Field
            label="Academic degree"
            defaultValue={person.academicDegree.fullName}
          />
          <div>
            <Title name="Personal honor degrees" />
            {person.personalHonorDegrees.map((honorDegree, index) => (
              <Typography key={index} ml={2} mb={1}>
                {honorDegree.name}
              </Typography>
            ))}
          </div>
        </Stack>
      </Paper>
    </>
  );
};

export default Degrees;
