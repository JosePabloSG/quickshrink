/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-water-leaf flex flex-col items-center justify-center pb-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <Image
          src="/404-Error.svg"
          alt="404 Error Illustration"
          width={600}
          height={600}
          className="mx-auto"
          priority
        />
        <h1 className="mt-6 text-3xl font-bold text-blue-violet">
          Oops! The page you're looking for doesn't exist.
        </h1>
        <p className="mt-2 text-lg text-gravel">
          It seems you've followed a broken link or entered an incorrect URL. Let's get you back on track!
        </p>
        <div className="mt-6">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-violet-500 hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-violet transition duration-150 ease-in-out"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}

