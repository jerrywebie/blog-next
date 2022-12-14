import Image from 'next/image';
import Link from 'next/link';

export default function Author() {
  return (
    <div className="flex py-6">
        <Image src={"/images/author/author1.jpg"} width={60} height={60} className="rounded-full"/>
        <div className="flex flex-col justify-center px-4">
            <Link href={'/'}>
                <a className="text-md font-bold text-gray-600 hover:text-gray-800">Flying High</a>
            </Link>
            <span className="text-sm text-gray-500">CEO and Founder</span>
        </div>
    </div>
  )
}
