"use client";

import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import Logo from '../../../../../public/logo.png'
import { LogOutIcon } from 'lucide-react'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';


export function Header(){
  const router = useRouter();

  async function handleLogout(){
    deleteCookie("session", {path: '/'})

    toast.success("Logout feito com sucesso")
    router.replace('/'); 
  }

  return(
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href={'/dashboard'}>
          <Image
          src={Logo}
          alt="Logo"
          width={90}
          height={90}
          priority={true}
          quality={100}
          className={styles.image}
          />
        </Link>

        <nav>
          <Link href={'/dashboard/category'}>Categoria</Link>
          <Link href={'/dashboard/product'}>Produto</Link>

        <form action={handleLogout}>
          <button type='submit'>
            <LogOutIcon size={24} color="#FFF"/>
          </button>
        </form>
        </nav>
        
        
      </div>
    </header>
  )
}