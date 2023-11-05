import { redirect } from 'next/navigation';
export default function Home() {
  redirect('/manage');
  return (
    <main className="">
      <h1 className="text-center">Hello</h1>
    </main>
  )
}
