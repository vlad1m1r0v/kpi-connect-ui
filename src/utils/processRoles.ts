const processRoles = (roles: string[]): string[] =>
  roles.map((role) =>
    role.replace("ROLE_", "").toLowerCase().replace("_", "-")
  );

export default processRoles;
