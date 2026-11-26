
export const metadata = {
  title: "Projects | Erica",
};

const projects = [
  {
    id: 1,
    name: "Personal Website",
    description:
      "A personal website created using Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    id: 2,
    name: "PlantCare Management System",
    description:
      "A website designed to manage plants and organize plant care activities.",
  },
  {
    id: 3,
    name: "Camping Site Reservation System",
    description:
      "A Laravel-based system for managing campsite information, customers, reservations, and payments.",
  },
];

export default function ProjectsPage() {
  return (
    <section>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          My Projects
        </h1>

        <p className="text-gray-600 text-lg">
          Here are some of the projects I have worked on.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-xl font-bold text-pink-600 mb-3">
              {project.name}
            </h2>

            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
