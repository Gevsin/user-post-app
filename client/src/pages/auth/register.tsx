import Head from "next/head";
import Link from "next/link";
import * as yup from 'yup';
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Register() {
  const registerValidationSchema = yup.object().shape({
    firstname: yup.string().max(128).required()
  })

  return (
    <>
      <Head>
        <title>Sign up</title>
      </Head>

      <main className="flex justify-center items-center w-full h-screen">
        <div className="container flex justify-center items-center w-full h-screen">
          <form className="flex flex-col w-96 p-8 shadow-xl shadow-gray-300 fade-up duration-500">
            <h1 className="text-center text-3xl my-4">Sign Up</h1>
            <Input type="text" placeholder={'First Name'} error="" />
            <Input type="text" placeholder={'Last Name'} />
            <Input type="text" placeholder={'Email Address'} />
            <Input type="password" placeholder={'Password'} />
            <Input type="password" placeholder={'Confirm Password'} />

            <Button type="submit" className="btn-bg-black w-full h-12 mt-12 mb-4">Sign up</Button>
            <Link href={'/auth/login'} className="text-center hover:text-blue-500 hover:underline mb-2">Already have an account?</Link>
            <Link href={'/'} className="text-center hover:text-blue-500 hover:underline mb-4">Go to Homepage</Link>
          </form>
        </div>
      </main>
    </>
  )
}