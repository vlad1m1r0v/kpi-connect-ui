import person from "@/mocks/person";
import { a11yProps, TabPanel } from "@/components/TabPanel";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import Address from "./Address";
import Contacts from "./Contacts";
import ScienceIndicators from "./ScienceIndicators";
import Degrees from "./Degrees";

const Profile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 1 }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Personal information" {...a11yProps(0)} />
          <Tab label="Contacts" {...a11yProps(1)} />
          <Tab label="Address" {...a11yProps(2)} />
          <Tab label="Science indicators" {...a11yProps(3)} />
          <Tab label="Degrees" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <PersonalInformation person={person} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Contacts person={person} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Address person={person} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ScienceIndicators />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Degrees />
      </TabPanel>
    </Box>
  );
};

export default Profile;
