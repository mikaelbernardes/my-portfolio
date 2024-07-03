import { FaPhone } from "react-icons/fa6";

import { ContactComponent } from "@/components/ContactComponent";
import { SectionComponent } from "@/components/SectionComponent";
import { useLanguageStore } from "@/factory/STORE_FACTORY/impls";

import { contactsData } from "./ContactsData";

function ContactsSection() {
  const { language } = useLanguageStore();
  return (
    <SectionComponent
      id="contacts"
      icon={FaPhone}
      title={language === "en" ? "Contacts" : "Contatos"}
    >
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
