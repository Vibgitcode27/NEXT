 import Image from 'next/image'
 import Link from "next/link";
 import ProductCard from "@/app/components/Productcard";
 import UserPage from "@/app/users/page";

export default function Home() {
  return(
      <main>
        <h1>Hello World</h1>
          {/*// This is clint side navigation*/}
          <Link href={"/users"}>Users</Link>
          <ProductCard/>
      </main>
  )
}
