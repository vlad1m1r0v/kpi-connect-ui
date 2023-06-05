const person: PersonResponse = {
  id: 2,
  firstName: "Іван",
  lastName: "Степаненко",
  middleName: "Михайлович",
  nameSummary: "Степаненко Іван Михайлович",
  firstNameEnglish: "Ivan",
  lastNameEnglish: "Mykhaylovych",
  nameEnglishSummary: "Ivan Mykhaylovych",
  gender: 0,
  inn: "1111222233334444",
  placeOfWork: "Університет",
  birthDate: "1990-03-15T00:00:00+00:00",
  workPhoneNumber: "+1 (123) 456-7890",
  email: "test@example.com",
  personalScienceMetrics: {
    scopus_id: "http://example.com/scopus/2",
    wos_id: "http://example.com/wos/2",
    orcid: "http://example.com/orcid/2",
    google_scholar_id: "http://example.com/google/2",
    h_index_wos: 5,
    h_index_scopus: 8,
    h_index_google: 6,
    h_index_google_five_years: 7,
    citations_wos: 100,
    citations_scopus: 200,
    citations_google: 150,
    citations_google_five_years: 180,
  },
  mobilePhoneNumbers: ["+1 (987) 654-3210", "+1 (555) 123-4567"],
  address: {
    street: "Київська",
    postal_code: "17500",
    city: "Прилуки",
    district: "Прилуцький",
    state: "Чернігівська",
    country: "Україна",
  },
  personalHonorDegrees: [
    {
      id: 2,
      name: "Заслужений науковий співробітник КПІ ім. Ігоря Сікорського",
      priority: 0,
    },
    {
      id: 3,
      name: "Почесний доктор технічних наук КПІ ім. Ігоря Сікорського",
      priority: 0,
    },
  ],
  scienceDegree: {
    id: 2,
    name: "PhD",
    fullName: "Доктор філософії",
  },
  academicDegree: {
    id: 2,
    name: "Доцент",
    fullName: "Доцент",
  },
  createdAt: "2023-06-05T10:30:00+00:00",
};

export default person;
