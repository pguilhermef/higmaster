import Image from "next/image";
import Link from "next/link";

import logo from "@/images/logo_white.png";

function Footer () {
  return(
    <div>
      <div className="flex flex-col sm:flex-row w-screen h-auto sm:h-72 bg-higblue">
        <div className="flex flex-col items-center sm:items-start sm:ml-10 sm:w-2/4 bg-higblue">
          <div className="">
            <Image src={logo} alt='logo of higmaster' className="h-20 sm:h-14 w-auto m-5"/>
          </div>
          <div className="flex flex-col justify-evenly font-sans h-36 sm:h-48">
            <strong>CNPJ: 53.813.732/0001-67</strong>
            <div><strong>Nossos Contatos:</strong></div>
            <Link href='https://wa.me/+5521997558799' className='cursor-pointer'><strong>WhatsApp</strong> (21) 99755-8799</Link>
            <div><strong>Email</strong> higmasterservicos@gmail.com</div>
          </div>
        </div>
        <div className="h-full">
          <div className="hidden sm:flex flex-col justify-end font-sans sm:text-xl h-full ml-5 sm:ml-10">
            <p>Conheça a nossa <br/> Rede Social</p>
            <Link href='https://www.instagram.com/higmaster.oficial' className="font-semibold">@higmaster.oficial </Link>
            <p className="mb-3 sm:mb-7">e veja mais <br/> serviços.</p>
          </div>
          <div className="flex sm:hidden flex-col justify-center items-center font-sans sm:text-xl h-full w-5/6 px-4 text-center m-auto">
            <p className="my-3">Conheça a nossa Rede Social
              <Link href='https://www.instagram.com/higmaster.oficial' className="font-semibold"> @higmaster.oficial </Link> e veja mais serviços.
            </p>
          </div>
          
        </div>
      </div>
      <div className="text-center font-semibold font-sans bg-higblue">
        <p className="text-sm text-nowrap sm:text-md pb-4">Material produzido por Agência CAPS e ProduzAí Produtora</p>
        {/* <p className="text-sm text-nowrap sm:text-md cursor-pointer"><Link href='https://github.com/pguilhermef'>Desenvolvimento por @pguilhermef</Link></p> */}
      </div>
    </div>
  );
}

export default Footer;