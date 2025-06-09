import { ContactData } from "@/services/get-contact";
import Image from "next/image";
import { FC } from "react";

interface ContactsTopProps {
  items: ContactData[];
  className?: string;
}

const ContactsTop: FC<ContactsTopProps> = ({ items, className }) => {
  return (
    <div
      className={`inline-flex items-center justify-center mt-1 gap-3 ${className}`}
    >
      {items.map((item) => (
        <div
          key={item.id + Date.now()}
          className="inline-flex items-center justify-center gap-1"
        >
          <Image
            src={item.icon}
            width={400}
            height={400}
            alt="image contact"
            className="size-[20px]"
          />
          {item.value}
        </div>
      ))}
    </div>
  );
};

export default ContactsTop;
