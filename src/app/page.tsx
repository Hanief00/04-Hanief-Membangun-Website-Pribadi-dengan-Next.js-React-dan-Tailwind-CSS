import type { Metadata } from 'next';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import profil from '../../public/images/prof.jpg';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya.',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya.',
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

export default function Home({metadata}: any) {
  return (
    <div className="mt-16 px-8 flex flex-col items-center text-center">
      <header className="mb-6">
        <h1 className="font-extrabold text-5xl text-zinc-800 mb-2">Tentang Saya</h1>
        <p className="text-zinc-600 text-lg">Seorang pengembang web yang berdedikasi</p>
      </header>

      <div
        className="bg-white rounded-2xl p-8 max-w-lg w-full flex flex-col items-center mb-20"
        style={{
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)"
        }}
      >
        <Image 
          src={profil} 
          alt="Foto Profil" 
          width={150} 
          height={150} 
          className="rounded-full mb-4 border-4 border-zinc-300" 
        />
        <h2 className="text-2xl font-semibold text-zinc-800">Hanief Mochsin</h2>
        <p className="text-zinc-600 mt-2">Saya adalah seorang developer yang memiliki passion dalam membangun aplikasi web dan mobile.</p>
        
        <div className="flex space-x-4 mt-4">
          <a href="https://github.com/Hanief00" target="_blank" className="text-zinc-700 hover:text-black text-2xl transition-all">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hanief-mochsin-5943801a4/" target="_blank" className="text-zinc-700 hover:text-blue-600 text-2xl transition-all">
            <FaLinkedin />
          </a>
          <a href="https://x.com/HaniefMch" target="_blank" className="text-zinc-700 hover:text-blue-400 text-2xl transition-all">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/hanief_h.08/?next=%2F" target="_blank" className="text-zinc-700 hover:text-blue-400 text-2xl transition-all">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
}
