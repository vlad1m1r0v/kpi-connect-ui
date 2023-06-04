import { a11yProps, TabPanel } from "@/components/TabPanel";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import MainPage from "./MainPage";
import ChangePassword from "./ChangePassword";

const Profile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 1 }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="General information" {...a11yProps(0)} />
          <Tab label="Security" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <MainPage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ChangePassword />
      </TabPanel>
    </Box>
  );
};

export default Profile;
