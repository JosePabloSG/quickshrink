import Link from 'next/link'

export default function CTA() {
  return (
    <section className="bg-dull-lavender-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-violet-800 mb-4">
          Start Simplifying Your Links Today!
        </h2>
        <p className="text-xl text-gravel-600 mb-8">
          Join thousands of users who trust QuickShrink for their link management needs.
        </p>
        <Link 
          href="/signup" 
          className="bg-blue-violet-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-violet-700 transition-colors inline-block"
        >
          Sign Up Now
        </Link>
      </div>
    </section>
  )
}

