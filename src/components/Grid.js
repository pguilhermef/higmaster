// components/Grid.js
import Image from 'next/image';


export default function Grid() {
  const items = [
    { type: 'image', src: '/../app/images/img1.png', alt: 'Image 1' },
    { type: 'text', title: 'Título 1', description: 'Descrição do item 1' },
    { type: 'image', src: '/app/images/img2.png', alt: 'Image 2' },
    { type: 'text', title: 'Título 2', description: 'Descrição do item 2' },
    { type: 'image', src: '/app/images/img3.png', alt: 'Image 3' },
    { type: 'text', title: 'Título 3', description: 'Descrição do item 3' },
    { type: 'image', src: '/images/img4.png', alt: 'Image 4' },
    { type: 'text', title: 'Título 4', description: 'Descrição do item 4' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center p-4 border rounded-lg">
          {item.type === 'image' ? (
            <Image src={item.src} alt={item.alt} width={300} height={200} className="rounded-lg"/>
          ) : (
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
