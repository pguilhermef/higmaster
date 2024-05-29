const { default: Image } = require("next/image");

import img from '@/images/img7.png';
import Link from 'next/link';

function Quotation() {
  return (
    <div className="flex flex-col justify-center sm:flex-row bg-white sm:w-4/6 max-w-7xl p-4 shadow-2xl">
      <div className='flex flex-col justify-center p-6 gap-2 sm:w-2/4 sm:min-h-full'>
        <h1 className='font-sans text-4xl font-medium text-higblue mb-2'>
          SOLICITE A <br /> SUA COTAÇÃO
        </h1>
        <p className='font-sans font-normal text-xl text-higblue'>
          Tenha excelência em Serviços
          Personalizados com a expertise da nossa equipe em limpeza e polimento de vidros, higienização em estofados e carpetes.
        </p>
        <Link href='https://wa.me/+5521997558799' className='cursor-pointer bg-higgreen p-4 mt-3 rounded-full text-lg sm:text-2xl text-center font-bold whitespace-nowrap'>
          AGENDE AGORA MESMO
        </Link>
      </div>
      <div className='flex justify-center items-center sm:w-2/4 sm:min-h-full'>
        <Image src={img} alt="Imagem de cotações" className='w-full h-full object-cover' />
      </div>
    </div>
  );
}

export default Quotation;
