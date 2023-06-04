import GeneralInfoBlock from "@/components/blocks/GeneralInfoBlock";
import RoleAvatarDegreesBlock from "@/components/blocks/RoleAvatarDegreesBlock";
import ScienceMetrics from "@/components/blocks/ScienceMetrics";
import { selectRole, selectUser } from "@/redux/features/AuthSlice";
import { useAppSelector } from "@/redux/store";
import { Grid, Stack } from "@mui/material";

const MainPage = () => {
  const user = useAppSelector(selectUser);
  const role = useAppSelector(selectRole);

  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
        <Stack spacing={2}>
          <GeneralInfoBlock user={user!} />
          <ScienceMetrics
            scienceMetrics={user?.person.personalScienceMetrics!}
          />
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <RoleAvatarDegreesBlock
          role={role!}
          scienceDegree={
            user?.person.scienceDegree || { id: 1, name: "", fullName: "" }
          }
          personalHonorDegrees={user?.person.personalHonorDegrees || []}
          academicDegree={
            user?.person.academicDegree || { id: 1, name: "", fullName: "" }
          }
        />
      </Grid>
    </Grid>
  );
};

export default MainPage;
