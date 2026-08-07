import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ContactInfo from './ContactInfo';
import CopyRight from './CopyRight';
import Newsletter from '@/components/main/newsletter/Newsletter';

interface FooterSection {
  title: string;
  info: { name: string; url: string }[];
}

interface SocialMedia {
  icon: React.ReactNode;
  url: string;
}

const footerData: FooterSection[] = [
  {
    title: 'Information',
    info: [
      { name: 'Custom Service', url: '#' },
      { name: 'Order Tracking', url: '#' },
      { name: 'Contacts', url: '#' },
      { name: 'Events', url: '#' },
      { name: 'About Us', url: '#' },
    ],
  },
  {
    title: 'Quick Links',
    info: [
      { name: 'Support Center', url: '#' },
      { name: 'Terms & Condition', url: '#' },
      { name: 'Shipping', url: '#' },
      { name: 'Privacy Policy', url: '#' },
      { name: 'Products Returns', url: '#' },
    ],
  },
  {
    title: 'About Us',
    info: [
      { name: 'Support Center', url: '#' },
      { name: 'Terms & Condition', url: '#' },
      { name: 'Shipping', url: '#' },
      { name: 'Privacy Policy', url: '#' },
      { name: 'Products Returns', url: '#' },
    ],
  },
];

const socialMediaData: SocialMedia[] = [
  {
    icon: <Facebook size={20} strokeWidth={1.5} />,
    url: 'https://www.facebook.com/OffCarry',
  },
  { icon: <Twitter size={20} strokeWidth={1.5} />, url: '#' },
  { icon: <Instagram size={20} strokeWidth={1.5} />, url: '#' },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 w-full bg-[#152327] pt-12 pb-6 text-white lg:mt-64 lg:pt-40">
      {/* NEWSLETTER COMPONENT */}
      <section className="relative container mx-auto">
        <div className="absolute -top-72 right-0 left-0 hidden w-full px-4 lg:block">
          <Newsletter />
        </div>
      </section>

      <section className="container mx-auto flex flex-col gap-10 px-2 lg:grid lg:grid-cols-12 lg:gap-20">
        <div className="col-span-4">
          {/* LOGO AND SUBTITLE */}
          <Image
            src={'/logo/offcarry.svg'}
            width={160}
            height={40}
            alt="OffCarry Logo - Your Trusted Shopping Partner"
            className="h-auto w-full max-w-40"
          />
          <p className="mt-4 text-sm leading-6 text-[#ACB5BD] sm:mt-7 sm:text-base sm:leading-7">
            Your trusted shopping partner. Bringing you quality products and seamless delivery
            experience.
          </p>
          {/* SOCIAL MEDIA */}
          <div className="mt-4 flex items-center gap-2 md:mt-7 md:gap-4">
            {socialMediaData.map((media, ind) => (
              <Link
                href={media.url}
                key={ind}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#203342] p-2 transition-colors hover:bg-[#2c4558] md:h-10 md:w-10"
              >
                {media.icon}
              </Link>
            ))}
          </div>
        </div>
        {/* FOOTER MENU LINKS */}
        <div className="col-span-8 flex flex-col justify-between gap-7 sm:flex-row">
          {footerData.map((footer, ind) => (
            <div key={ind}>
              <h3 className="font-semibold lg:text-lg">{footer.title}</h3>
              <div className="mt-3 flex flex-col gap-2 text-[#ACB5BD] sm:mt-5 sm:gap-3 lg:mt-7">
                {footer.info.map((data, idx) => (
                  <Link
                    href={data.url}
                    key={idx}
                    className="text-sm transition-all hover:underline lg:text-base"
                  >
                    {data.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* CONTACT INFO */}
      <div className="mt-12 mb-8 sm:mb-12 lg:mt-20 lg:mb-16">
        <ContactInfo />
      </div>
      {/* COPYRIGHT SECTION */}
      <CopyRight />
    </footer>
  );
}
