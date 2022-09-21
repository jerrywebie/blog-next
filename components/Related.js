import Image from "next/image";
import Link from "next/link";

import Author from "./Author";

export default function Related() {
  return (
    <div className="pt-20"> 
        <h1 className="font-bold text-xl py-12">Related</h1>
        <div className="flex flex-col gap-6">
                {Post()}
                {Post()}
                {Post()}
            </div>
    </div>
  )
}

function Post() {
    return (
        <div className="flex gap-5">
            <div className="flex flex-col justify-start">
            <Link href={"/"}><a><Image src={"/images/articles/posts/img1.jpg"} className="rounded" width={250} height={200} alt="related post" /></a></Link>
            </div>
            <div className="flex flex-col justify-center">
                <div className="cat">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business, Travel</a></Link>
                    <Link href={"/"}><a className="text-gray-800 hover:text-gray-600">- July 3, 2022</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-l font-bold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</a></Link>
                </div>
                <Author/>
            </div>
        </div>
    )
}
