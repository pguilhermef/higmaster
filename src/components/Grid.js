'use client'
import imgum from '@/images/img3.png';
import imgdois from '@/images/img4.png';
import imgtres from '@/images/img5.png';
import imgquatro from '@/images/img6.png';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

export default function Grid() {
  const isMobile = useMediaQuery({ maxWidth: 450 })

  const itemsLargeScreen = [
    { type: 'image', src: imgum, alt: 'Image 1' },
    { type: 'text', title: 'Limpeza de Vidros e Vidraças', description: 'Somos pioneiros no Rio de Janeiro na lavagem e limpeza de vidros e vidraças, tanto em lojas quanto em residências. Conte com nossa expertise para manter seus vidros sempre impecáveis.' },
    { type: 'text', title: 'Limpeza Fina e Pós Obra', description: 'Utilizamos materiais e produtos de primeira qualidade para garantir que seu ambiente permaneça sempre limpo e agradável, mesmo após obras. Confie na nossa experiência para um resultado impecável.' },
    { type: 'image', src: imgdois, alt: 'Image 2' },
    { type: 'image', src: imgtres, alt: 'Image 3' },
    { type: 'text', title: 'Fachadas', description: 'Destaque sua marca com uma fachada limpa e bem cuidada. Não deixe que a sujeira ofusque a imagem do seu negócio.' },
    { type: 'text', title: 'Estofados e Carpetes', description: 'Revitalizamos seus estofados, carpetes deixando-os com uma agradável e suave fragrância. Garanta o frescor e a renovação dos seus móveis com nossos serviços especializados.' },
    { type: 'image', src: imgquatro, alt: 'Image 4' },
  ];

  const itemsSmallScreen = [
    { type: 'text', title: 'Limpeza de Vidros e Vidraças', description: 'Somos pioneiros no Rio de Janeiro na lavagem e limpeza de vidros e vidraças, tanto em lojas quanto em residências. Conte com nossa expertise para manter seus vidros sempre impecáveis.' },
    { type: 'image', src: imgum, alt: 'Image 1' },

    { type: 'text', title: 'Limpeza Fina e Pós Obra', description: 'Utilizamos materiais e produtos de primeira qualidade para garantir que seu ambiente permaneça sempre limpo e agradável, mesmo após obras. Confie na nossa experiência para um resultado impecável.' },
    { type: 'image', src: imgdois, alt: 'Image 2' },

    { type: 'text', title: 'Fachadas', description: 'Destaque sua marca com uma fachada limpa e bem cuidada. Não deixe que a sujeira ofusque a imagem do seu negócio.' },
    { type: 'image', src: imgtres, alt: 'Image 3' },

    { type: 'text', title: 'Estofados e Carpetes', description: 'Revitalizamos seus estofados, carpetes deixando-os com uma agradável e suave fragrância. Garanta o frescor e a renovação dos seus móveis com nossos serviços especializados.' },
    { type: 'image', src: imgquatro, alt: 'Image 4' },
  ];

  const items = isMobile ? itemsSmallScreen : itemsLargeScreen;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          {item.type === 'image' ? (
            <Image src={item.src} alt={item.alt} width={500} height={500} />
          ) : (
            <div className="flex flex-col items-left bg-higblue min-h-64 p-4">
              <h3 className="text-xl font-medium mb-2 mt-4">{item.title}</h3>
              <p className='font-extralight'>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
