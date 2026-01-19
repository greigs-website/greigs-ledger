export default function Project5() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-semibold text-center mb-8">Creative Branding Suite</h2>
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <img src="/images/portfolio/project-5-1.jpg" alt="" className="rounded-lg" />
          <img src="/images/portfolio/project-5-2.jpg" alt="" className="rounded-lg" />
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2">Project Info:</h4>
          <p className="text-gray-600 mb-4">
            A complete rebranding campaign for a creative studio, including logo design and digital presence overhaul.
          </p>
          <h4 className="text-xl font-semibold mb-3">Project Details:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Client:</strong> Blueberry Studio</li>
            <li><strong>Technologies:</strong> Illustrator, Photoshop, Figma</li>
            <li><strong>Industry:</strong> Design & Marketing</li>
            <li><strong>Date:</strong> June 5, 2024</li>
            <li><strong>URL:</strong> <a href="#" className="text-teal-600 hover:underline">brandexample.com</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
