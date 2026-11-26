
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-[65vh] flex flex-col justify-center items-center text-center">
      <p className="text-pink-600 font-semibold text-lg mb-3">
        Welcome to My Personal Website
      </p>

      <h1 className="text-5xl font-bold text-gray-800 mb-6">
        Hello, my name is Erica!
      </h1>

      <p className="text-gray-600 text-lg max-w-2xl leading-relaxed mb-8">
        I am a Bachelor of Science in Information Technology student.
        I enjoy learning about web development, programming, and
        creating useful systems. 
      </p>

      <Link
        href="/projects"
        className="bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
      >
        See My Projects →
      </Link>
    </section>
  );
}
