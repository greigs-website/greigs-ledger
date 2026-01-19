// pages/projects/project-1.tsx
import Head from "next/head";

export default function Project1() {
  return (
    <>
      <Head>
        <title>Accounting Dashboard – Portfolio Project</title>
      </Head>

      <div className="container py-4">
        <div className="row align-items-center">
          {/* === LEFT SIDE: Project Image === */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="project-image shadow-sm rounded overflow-hidden">
              <img
                src="/images/portfolio/project-1.jpg"
                alt="Accounting Dashboard"
                className="img-fluid"
              />
            </div>
          </div>

          {/* === RIGHT SIDE: Project Info === */}
          <div className="col-md-6">
            <h2 className="font-playfair mb-3">Accounting Dashboard</h2>
            <p className="text-muted mb-3">
              A responsive accounting dashboard built with React, TypeScript,
              and TailwindCSS. The dashboard provides an overview of key
              financial metrics, revenue tracking, and expense analysis.
            </p>

            <ul className="list-unstyled mb-3">
              <li>
                <strong>Category:</strong> Accounting
              </li>
              <li>
                <strong>Client:</strong> FinEdge Corp
              </li>
              <li>
                <strong>Date:</strong> May 2024
              </li>
              <li>
                <strong>Tech Stack:</strong> React, TypeScript, Tailwind, Chart.js
              </li>
            </ul>

            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark rounded-pill px-4 py-2"
            >
              Visit Project
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

