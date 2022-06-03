export const initialFields = [
  {
    label: "Full name",
    type: "text",
  },
  {
    label: "Email",
    type: "email",
  },
  {
    label: "Phone number 01 - optional",
    type: "text",
  },
];

export const addressFields = (existingFields) => {
  return [
    ...existingFields,
    {
      label: "address line 1",
      type: "text",
    },
    {
      label: "address line 2 - optional",
      type: "text",
    },
    {
      label: "city",
      type: "text",
    },
    {
      label: "state/county",
      type: "text",
    },
    {
      label: "postcode",
      type: "text",
    },
    {
      label: "country",
      type: "text",
    },
  ];
};
