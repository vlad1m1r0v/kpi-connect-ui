import Feature from "./types";
import EmailIcon from "@mui/icons-material/Email";

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

const adminFeatures = [adminMailingFeature];

export default adminFeatures;
