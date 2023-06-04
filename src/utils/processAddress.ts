const processAddress = (address: Address) =>
  `${address.country}, ${address.state} область, ${address.district} район м. ${address.city}, ${address.street} вулиця, ${address.postal_code}`;

export default processAddress;
