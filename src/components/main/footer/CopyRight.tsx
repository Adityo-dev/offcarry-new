import Link from 'next/link';

interface FooterBottomItem {
  name: string;
  url: string;
}

const footerBottomData: FooterBottomItem[] = [
  {
    name: 'Terms & Condition',
    url: '/terms-and-conditions',
  },
  {
    name: 'Privacy Policy',
    url: '/privacy-policy',
  },
  {
    name: 'Contact Us',
    url: '/contacts',
  },
];

export default function CopyRight() {
  return (
    <div className="container mx-auto flex flex-col justify-between gap-3 px-2 pb-14 sm:flex-row xl:pb-0">
      <p className="text-center text-xs text-[#837F74] capitalize md:text-sm lg:text-start">
        All Right Reserved OffCarry Store © {new Date().getFullYear()}
      </p>
      <div className="flex items-center justify-center gap-6 lg:gap-8">
        {footerBottomData.map((data, ind) => (
          <Link
            href={data.url}
            key={ind}
            className="text-xs text-[#ACB5BD] hover:underline lg:text-sm"
          >
            {data.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
