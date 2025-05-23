'use client';

import { ArrowRight } from 'lucide-react';

const reports = [
  {
    tag: 'ANALYST REPORT',
    tagColor: '#fff',
    title: '2024 FROST RADAR: Threat Intel Platform Reports',
    bg: 'bg-[#0C1C80]',
    buttonLabel: 'Download',
    href: '#',
  },
  {
    tag: 'REPORT',
    tagColor: '#fff',
    title: 'Threat Intel Platform Reports',
    bg: 'bg-[#003C34]',
    buttonLabel: 'Download',
    href: '#',
  },
  {
    tag: 'WEBINAR',
    tagColor: '#fff',
    title: 'Launch Event: The Latest Innovations in Zscaler Internet Access',
    bg: 'bg-[#4C0C5C]',
    buttonLabel: 'Register',
    href: '#',
  },
];

export default function ReportsSection() {
  return (
    <section className="px-4 py-16 flex justify-center items-center">
      <div className="w-full max-w-[1728px] flex flex-col lg:flex-row justify-center items-center gap-10">
        {reports.map((report, idx) => (
          <div
            key={idx}
            className={`w-full max-w-[460px] h-[248px] p-6 flex flex-col justify-between rounded-[20px] ${report.bg} text-white`}
          >
            {/* Tag */}
            <span
              className="w-fit inline-block px-4 py-1 rounded-full bg-white/10 text-sm font-medium tracking-wide uppercase"
              style={{ color: report.tagColor }}
            >
              {report.tag}
            </span>

            {/* Title */}
            <h3 className="mt-6 text-[24px] font-[500] leading-[28px]">
              {report.title}
            </h3>

            {/* Button */}
            <a
              href={report.href}
              className="w-fit mt-6 inline-flex items-center justify-between gap-2 px-6 py-2 h-10 border border-white rounded-full text-white text-base hover:bg-white/10 transition"
            >
              {report.buttonLabel} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
