
export const metadata = {
  title: "About | Erica",
};

export default function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">
        About Me
      </h1>

      <div className="bg-white p-8 rounded-2xl shadow-md">
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Hello! My name is Erica, and I am a Bachelor of Science
          in Information Technology student at Mater Dei College.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          I am passionate about learning programming, web development,
          and technology. I enjoy exploring new skills and improving
          my knowledge through different activities and projects.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          My Interests
        </h2>

        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Web Development</li>
          <li>Programming</li>
          <li>Learning New Technologies</li>
        </ul>
      </div>
    </section>
  );
}
