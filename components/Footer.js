import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from 'next/link';

import Newsletter from "./Newsletter";

export default function Footer() {
  const bg={
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: "bottom left"
  }
  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter/>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <a><ImFacebook color="#888888"/></a>
            </Link>
            <Link href={"/"}>
              <a><ImTwitter color="#888888" /></a>
            </Link>
            <Link href={"/"}>
              <a><ImYoutube color="#888888"/></a>
            </Link>
          </div>
          <p className="p-5 text-gray-400">Copyright &copy;2022 All rights reserved. Created by Jerry.</p>
          <p className="p-5 text-gray-400 text-center">Terms and Conditions.</p>
        </div>
      </div>
    </footer>
  )
}
