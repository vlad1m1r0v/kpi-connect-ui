import Field from "@/components/Field";
import Title from "@/components/Title";
import processScienceMetrics from "@/utils/processScienceMetrics";
import { Paper, Stack } from "@mui/material";

interface Props {
  person: PersonResponse;
}

const ScienceIndicators: React.FC<Props> = ({ person }) => {
  const processedScienceMetrics = processScienceMetrics(
    person.personalScienceMetrics
  );

  return (
    <Paper square={true} sx={{ p: 2 }}>
      <Title name="Person" />
      <Stack spacing={2}>
        {Object.entries(processedScienceMetrics).map(([key, value]) => (
          <Field key={key} label={key} defaultValue={value.toString()} />
        ))}
      </Stack>
    </Paper>
  );
};
export default ScienceIndicators;
