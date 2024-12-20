import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col gap-2 justify-center items-center text-2xl">
      Todo Application
      <div className="flex gap-2">
        <Link className="text-md border rounded-xl px-3 py-2 bg-white text-black text-xl" href={'/auth/signup'}>Signup</Link>
        <Link className="text-md border rounded-xl px-3 py-2 bg-white text-black text-xl" href={'/auth/signin'}>Signin</Link>
      </div>
    </div>
  );
}
