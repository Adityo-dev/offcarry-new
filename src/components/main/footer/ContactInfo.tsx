import { Clock7, MapPinned, PhoneCall } from 'lucide-react';
import React from 'react';

interface ContactItem {
  icon: React.ReactNode;
  title: string;
  text: string;
  link: string;
}

const contactInfoData: ContactItem[] = [
  {
    icon: <PhoneCall size={30} strokeWidth={1.5} />,
    title: 'Request A Call:',
    text: '+8801973239675',
    link: 'https://wa.me/+8801973239675',
  },
  {
    icon: <Clock7 size={30} strokeWidth={1.5} />,
    title: 'Sunday To Friday:',
    text: '+8801973239675',
    link: 'https://wa.me/+8801973239675',
  },
  {
    icon: <MapPinned size={30} strokeWidth={1.5} />,
    title: '',
    text: '85, Mir Mosharrat Hossain Rd. Khustia. \n7000 Bangladesh',
    link: 'https://www.google.com/maps?q=85,+Mir+Mosharrat+Hossain+Rd,+Khustia,+7000,Bangladesh',
  },
];

export default function ContactInfo() {
  return (
    <section className="container mx-auto px-2">
      <div className="flex flex-col items-center justify-between gap-7 rounded-lg bg-[#2A3A3E] px-12 py-7 lg:flex-row">
        {contactInfoData.map((contact, ind) => (
          <div key={ind} className="flex flex-col items-center gap-4 lg:flex-row">
            <div>{contact.icon}</div>
            <div className="flex flex-col text-center text-sm whitespace-pre-line text-[#DDE2E5] md:text-base lg:text-start">
              {contact.title && <span>{contact.title}</span>}
              {contact.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#DDE2E5] hover:underline"
                >
                  {contact.text}
                </a>
              ) : (
                <span>{contact.text}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
