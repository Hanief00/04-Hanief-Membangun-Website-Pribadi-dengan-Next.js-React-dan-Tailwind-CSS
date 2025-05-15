import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Essay',
  description: 'Halaman Essay.',
  openGraph: {
    title: 'Essay',
    description: 'Halaman Essay.',
    images: [
        {
          url: 'https://example.com/default-image.jpg',
          width: 800,
          height: 600,
        },
      ],
      url: 'https://example.com',
  },
};

type Essay = {
  title: string;
  excerpt: string;
  date: string;
  link: string;
};

const essays: Essay[] = [
  {
    title: 'Siapa Satoshi Nakamoto? Legenda di Balik Lahirnya Bitcoin',
    excerpt: 'Satoshi Nakamoto adalah nama samaran pencipta Bitcoin yang identitasnya masih menjadi misteri hingga kini.',
    date: '10 February 2025',
    link: 'https://www.mobee.io/mobee-academy/blog/satoshi-nakamoto',
  },
  {
    title: 'Apa Itu Emas? Kenali Berbagai Jenis dan Fungsi Emas di Kehidupan',
    excerpt: 'Emas adalah salah satu logam mulia yang sudah dikenal sejak zaman kuno dan memiliki nilai yang sangat tinggi.',
    date: '19 November 2024',
    link: 'https://www.treasury.id/apa-itu-emas-kenali-berbagai-jenis-dan-fungsi-emas-di-kehidupan',
  },
  {
    title: 'Saham',
    excerpt: 'Saham (stock) merupakan salah satu instrumen pasar keuangan yang paling popular.',
    date: '16 April 2025',
    link: 'https://www.idx.co.id/id/produk/saham/',
  },
];

export default function Essays({metadata}: any) {
  return (
    <div className="mt-16 px-8 mb-15">
      <header className="mb-8 text-center">
        <h1 className="font-bold text-4xl text-zinc-800">Essay</h1>
        <p className="text-zinc-500 mt-2">Kumpulan tulisan reflektif dan analitis</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {essays.map((essay, index) => (
          <a
            key={index}
            href={essay.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 block"
          >
            <h2 className="text-xl font-semibold text-zinc-800">{essay.title}</h2>
            <p className="text-sm text-zinc-500 mt-1">{essay.date}</p>
            <p className="text-zinc-600 mt-2">{essay.excerpt}</p>
            <span className="mt-4 inline-block text-teal-600 hover:underline text-sm font-medium">
              Baca Selengkapnya →
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
