import Feature from "./types";
import EmailIcon from "@mui/icons-material/Email";
import GroupsIcon from "@mui/icons-material/Groups";

const adminMailingFeature: Feature = {
  name: "mailing",
  icon: <EmailIcon />,
  role: "admin",
  feature: "mailing",
  subfeatures: [
    {
      name: "mailing",
      link: "/admin/mailing",
    },
  ],
};

const adminHumanResourcesFeature: Feature = {
  name: "human resources",
  icon: <GroupsIcon />,
  role: "admin",
  feature: "human-resources",
  subfeatures: [
    {
      name: "persons",
      link: "/admin/human-resources/persons",
    },
    {
      name: "students",
      link: "/admin/human-resources/students",
    },
    {
      name: "postgraduates",
      link: "/admin/human-resources/postgraduates",
    },
    {
      name: "divisions",
      link: "/admin/human-resources/divisions",
    },
    {
      name: "positions",
      link: "/admin/human-resources/positions",
    },
    {
      name: "personal positions",
      link: "/admin/human-resources/personal-positions",
    },
    {
      name: "work directions",
      link: "/admin/human-resources/work-directions",
    },
    {
      name: "personal work directions",
      link: "/admin/human-resources/personal-work-directions",
    },
  ],
};

const adminFeatures = [adminMailingFeature, adminHumanResourcesFeature];

export default adminFeatures;
