export interface ContactData {
  id: string;
  name: string;
  icon: string;
  value: string;
}

export const data: ContactData[] = [
  {
    id: "0",
    name: "mail",
    value: "store@gmail.com",
    icon: "/contacts/gmail.svg",
  },
  {
    id: "1",
    name: "phone",
    value: "1 (212) 555-1234",
    icon: "/contacts/call.svg",
  },
];
