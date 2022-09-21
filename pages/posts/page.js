import Image from 'next/image'

import CustomLayout from "../../layout/CustomLayout"
import Author from "../../components/Author"
import Related from '../../components/Related'

export default function page() {
  return (
    <CustomLayout>
        <section className="container mx-auto md:px-2 py-16 w-1/2">
            <div className="flex justify-center">
                <Author/>
            </div>
            <div className="post py-10">
                <h1 className="text-bold text-4xl text-center pb-5">You are unhappy customer</h1>
                <p className="text-gray-500 text-xl text-center">Far far away, behind the world</p>
                <div className="py-10">
                    <Image src={"/images/img1.jpg"} width={900} height={600} alt="page image"/>
                </div>
                <div className="content text-gray-600 text-lg flex flex-col gap-4">
                    <p>lskdlsjflsfjslf</p>
                    <p>jfksdfjsldfpjsfl</p>
                    <p>kjflsjfoewjfeosfjso</p>

                </div>
            </div>
            <Related/>
        </section>
    </CustomLayout>
  )
}
