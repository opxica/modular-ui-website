import Link from 'next/link'
import { FaArrowLeftLong } from 'react-icons/fa6'

const ComingSoon = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-8 font-sf-pro-rounded-medium text-5xl text-neutral-100">
        Coming Soon
      </h1>
      <p className="mb-8 text-lg text-center text-neutral-100">
        We're working hard to bring you something amazing. Stay tuned!
      </p>
      <Link
        className="text-md transition flex items-center animate-pulse justify-center gap-2 rounded-full font-sf-pro-rounded-regular text-neutral-100 "
        href="/"
        >
        <FaArrowLeftLong size={16} className="text-neutral-100 " />
        <span className="">Go back</span>
      </Link>
    </div>
  )
}

export default ComingSoon