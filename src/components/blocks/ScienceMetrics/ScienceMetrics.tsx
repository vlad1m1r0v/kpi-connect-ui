import { Paper, Stack } from "@mui/material";
import processScienceMetrics from "@/utils/processScienceMetrics";
import Field from "@/components/Field";

interface Props {
  scienceMetrics: ScienceMetrics;
}

const ScienceMetrics: React.FC<Props> = ({
  scienceMetrics: unprocessedScienceMetrics,
}) => {
  const processedScienceMetrics = processScienceMetrics(
    unprocessedScienceMetrics
  );

  return (
    <Paper square={true} sx={{ p: 2, maxHeight: "250px", overflowY: "scroll" }}>
      <Stack spacing={2}>
        {Object.entries(processedScienceMetrics).map(([key, value]) => (
          <Field key={key} defaultValue={value.toString()} label={key} />
        ))}
      </Stack>
    </Paper>
  );
};

export default ScienceMetrics;
