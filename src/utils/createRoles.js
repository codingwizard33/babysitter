import Role from "../models/Role.js";

const createRoles = async () => {
  const roles = ['admin', 'nanny', 'user'];

  try {
    for (let index = 0; index < roles.length; index++) {
      await Role.create({
        role: roles[index]
      });
    }

    console.log('The roles created successfully.');
  } catch (error) {
    console.error(error.message);
  }
};

export { createRoles };