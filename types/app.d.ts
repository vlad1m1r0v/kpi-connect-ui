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
    personalScienceMetrics: Record<string, string>;
    mobilePhoneNumbers: string[];
    address: {
      street: string;
      postal_code: string;
      city: string;
      district: string;
      state: string;
      country: string;
    };
  };
}

type FeaturesResponse = string[];
