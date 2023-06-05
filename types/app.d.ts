interface ErrorResponse {
  error: string;
  error_description: string;
}

interface RTKQueryError {
  data: ErrorResponse;
  status: number;
}

interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

interface LoginParams {
  username: string;
  password: string;
}

interface Address {
  street: string;
  postal_code: string;
  city: string;
  district: string;
  state: string;
  country: string;
}

type ScienceMetrics = Record<string, string | number>;

interface PersonalHonorDegree {
  id: number;
  name: string;
  priority: number;
}

interface Degree {
  id: number;
  name: string;
  fullName: string;
}

interface UsersMeResponse {
  id: number;
  email: string;
  last_login: string;
  roles: string[];
  person: {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    nameSummary: string;
    firstNameEnglish: string;
    lastNameEnglish: string;
    nameEnglishSummary: string;
    gender: number;
    placeOfWork: string;
    birthDate: string;
    workPhoneNumber: string;
    createdAt: string;
    personalScienceMetrics: ScienceMetrics;
    mobilePhoneNumbers: string[];
    address: Address;
    personalHonorDegrees: PersonalHonorDegree[];
    academicDegree: Degree;
    scienceDegree: Degree;
  };
}

type FeaturesResponse = string[];

type User = Omit<UsersMeResponse, "roles">;

type Roles = UsersMeResponse["roles"];

type Features = Record<string, FeaturesResponse | null>;

interface Person {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  fullName: string;
  role: string;
  outside: boolean;
}

interface ChangePasswordParams {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
