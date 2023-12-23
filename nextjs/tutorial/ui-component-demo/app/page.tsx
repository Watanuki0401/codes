import { DropThemeChanger } from '@/components/theme-changer'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between p-24">
      <DropThemeChanger />
      <h1>Hello Wrold.</h1>
    </main>
  )
}
