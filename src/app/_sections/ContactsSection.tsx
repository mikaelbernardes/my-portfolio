import { FaHouse } from "react-icons/fa6";

import { ContactComponent } from "@/components/ContactComponent";
import { SectionComponent } from "@/components/SectionComponent";

import { contactsData } from "./ContactsData";

function ContactsSection() {
  return (
    <SectionComponent id="contacts" icon={FaHouse} title="Contacts">
      <div className="flex flex-col gap-5">
        {contactsData.map((item, index) => (
          <ContactComponent
            key={index}
            label={item.label}
            link={item.link}
            value={item.value}
          />
        ))}
      </div>
    </SectionComponent>
  );
}

export { ContactsSection };
