import type{Metadata} from 'next';  
import Image, {StaticImageData} from 'next/image';
import image1 from '../../../public/images/projects1.jpg';
import image2 from '../../../public/images/projects2.jpg';

type ProjectItemProps = {
    name: string;
    url: string;
    urlDisplay: string;
    imageSrc: StaticImageData;
}

export const metadata: Metadata = {
    title: 'Projects Saya',
    description: 'Halaman Projects Saya.',
    openGraph: {
        title: 'Projects Saya',
        description: 'Halaman Projects Saya.',
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

function ProjectItemProps({name, url, urlDisplay, imageSrc}: ProjectItemProps) {
    return (
        <li>
            <a href={url}>
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Image className="w-full" src={imageSrc} alt={name} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl-mb-2">{name}</div>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {urlDisplay}
                        </span>
                    </div>
                </div>
            </a>
        </li>
    );
}

export default function Projects({metadata}: any) {
    return (
        <div className = "mt-16 px-8 mb-20">
          <header>
            <h1 className="font-bold text-4xl text-zinc-800">Projects</h1>
            <p className="text-base mt-6 text-zinc-600">Berikut adalah beberapa proyek yang telah saya kerjakan.</p>
          </header>
          <div className="mt-16">
            <h2 className="text-2xl">Aplikasi</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
                <ProjectItemProps name= "Aplikasi 1" url="https://example.com" urlDisplay="App Store" imageSrc={image1} />
                <ProjectItemProps name= "Aplikasi 2" url="https://example.com" urlDisplay="Google Play" imageSrc={image2} />
            </ul>
          </div>
        </div>
    );
}