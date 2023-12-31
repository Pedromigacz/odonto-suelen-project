import Link from "next/link";
import HeartMBIcon from "../icons/HeartMBIcon";

export default function Footer() {
  return (
    <>
      <div className='w-full bg-red2 pt-11'>
        <div className='flex screen5:flex-row flex-col-reverse justify-between items-center max-w-desktop mx-0 px-8'>
          <div className='text-white text-xl font-roboto font-bold screen5:mt-0 mt-9'>
            <h3>Suelen Budziak</h3>
          </div>
          <div className='flex gap-10'>
            <ul className='flex fscreen:flex-row flex-col gap-10 text-white text-xl font-roboto font-medium'>
              <li className='cursor-pointer p-1 -m-1'>
                <Link href={"#home"}>Home</Link>
              </li>
              <li className='cursor-pointer p-1 -m-1'>
                <Link href={"#review"}>Depoimentos</Link>
              </li>
              <li className='cursor-pointer p-1 -m-1'>
                <Link href={"#servicos"}>Serviços</Link>
              </li>
            </ul>
            <ul className='flex fscreen:flex-row flex-col gap-10 text-white text-xl font-roboto font-medium'>
              <li className='cursor-pointer p-1 -m-1'>
                <Link href={"#mapa"}>Localização</Link>
              </li>
              <li className='cursor-pointer p-1 -m-1'>
                <Link href={"#contato"}>Contato</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mx-0 mt-10 '>
          <Link
            href={"https://migaczbrothers.com"}
            target='_blank'
            className='flex justify-center items-center gap-1 text-sm text-white font-bold font-archivo'
          >
            <span>MigaczBrothers</span>
            <span>
              <HeartMBIcon />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}
