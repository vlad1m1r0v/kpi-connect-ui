import { ReactNode } from "react";

interface Subfeature {
  name: string;
  link: string;
}

export default interface Feature {
  icon: ReactNode;
  name: string;
  role: string;
  feature: string;
  subfeatures: Subfeature[];
}
