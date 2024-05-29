import logo_full from '@/images/full_logo.png';
import imgum from '@/images/img1.png';
import imgdois from '@/images/img2.png';
import Image from "next/image";
import Link from 'next/link';

function Header() {
  return (
    <div className="w-full sm:w-4/6 max-w-6xl min-h-80 bg-hig-background bg-no-repeat bg-cover md:bg-[length:1200px_320px] shadow-black shadow-2xl">
      <div className='flex flex-col h-80 p-6 gap-4'>
        <div className='flex justify-center h-2/6'>
          <Image src={logo_full} alt="full logo of higmaster" className='object-contain' />
        </div>
        <div className='h-2/6 text-higblue flex flex-col justify-center text-center space-y-2 font-semibold lg:font-bold md:text-2xl mt-5'>
          <span>
            Está cansado de ter problemas com limpeza de fachadas, limpeza de vidros, carpetes e poltronas?
          </span>
          <span>
            Nós temos a solução ideal para você!
          </span>
        </div>
        <div className='h-2/6 flex justify-center items-center'>
          <Link href='https://wa.me/+5521997558799' passHref>
            <p className='cursor-pointer bg-higgreen py-2 px-4 mt-3 rounded-full text-sm lg:text-xl text-center font-bold text-white'>
              Clique aqui e agende sua limpeza profissional agora mesmo.
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center min-h-20 max-w-6xl bg-higblue font-sans text-sm sm:text-lg md:text-2xl shadow-2xl shadow-black p-4">
          <p>ATENDIMENTO<strong> EM TODO O RIO DE JANEIRO</strong></p>
          <p><strong>FAÇA O SEU AGENDAMENTO: (21) 99755-8799</strong></p>
      </div>
      <div className='flex'>
        <Image src={imgum} alt='people cleaning glasses' className='w-2/4 object-cover'/>
        <Image src={imgdois} alt='people cleaning house' className='w-2/4 object-cover'/>
      </div>
    </div>
  );
}

export default Header;
