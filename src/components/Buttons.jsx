import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { fetchReleaseData } from "../utils/fetchData";
import { searchProject } from "../utils/searchProject";

export default function Buttons() {
  const [release, setRelease] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchReleaseData("/release/release.json")
      .then((data) => {
        setRelease(data);
      })
      .catch((error) => {
        setError(error.toString());
      }); 
  }, []);

  const project = searchProject(release, "pandaTools");

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!project) {
    return <div>No se encontró el proyecto</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Link
        className="p-4 rounded-lg w-full text-center flex justify-center items-center gap-5 bg-[rgba(65, 126, 56, 0.1)] border-2 border-panda-primary text-black dark:text-white"
        to={project.file}
      >
        Descargar para Java {project.versionLanguage} <IoCloudDownloadOutline />
      </Link>
      <Link
        className="bg-gray-950 text-white p-4 rounded-lg w-full text-center"
        to="/docs/intro"
      >
        Ver Documentacion
      </Link>
    </div>
  );
}
