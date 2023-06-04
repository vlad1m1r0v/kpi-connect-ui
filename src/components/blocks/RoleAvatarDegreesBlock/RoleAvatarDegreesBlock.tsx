import { Paper, Stack } from "@mui/material";
import Field from "@/components/Field";
import AvatarContainer from "@/components/AvatarContainer";

interface Props {
  scienceDegree: Degree;
  academicDegree: Degree;
  personalHonorDegrees: PersonalHonorDegree[];
  role: string;
}

const RoleAvatarDegreesBlock: React.FC<Props> = ({
  scienceDegree,
  academicDegree,
  personalHonorDegrees,
  role,
}) => {
  return (
    <Paper square={true} sx={{ p: 2 }}>
      <Stack spacing={2}>
        <Field label="Role" defaultValue={role} />
        <Field label="Science degree" defaultValue={scienceDegree.fullName} />
        <Field label="Academic degree" defaultValue={academicDegree.fullName} />
        <AvatarContainer src="/avatar.jpg" />
        <Field
          label="Honor degree"
          defaultValue={personalHonorDegrees[0].name}
        />
      </Stack>
    </Paper>
  );
};

export default RoleAvatarDegreesBlock;
