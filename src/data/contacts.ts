export interface ContactData {
  id: string;
  name: string;
  icon: string;
  value: string;
}

export const data: ContactData[] = [
  {
    id: "0",
    name: "email",
    value: "aldinholopes4@gmail.com",
    icon: "/contacts/gmail.svg",
  },
  {
    id: "1",
    name: "phone",
    value: "+244931903813, +244953961847",
    icon: "/contacts/call.svg",
  },
];
