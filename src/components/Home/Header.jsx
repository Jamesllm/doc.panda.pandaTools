import React, { useEffect, useState } from "react";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Buttons from "../Buttons";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CustomCodeBlock from "../CustomCodeBlock";

import { fetchReleaseData } from "../../utils/fetchData";
import { searchProject } from "../../utils/searchProject";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const { projectNameCustom, versionProject } = siteConfig.customFields;

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
    <header className="text-start mb-5 md:p-20">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="lg:p-10 p-5 my-auto">
          <div className="mb-10">
            <h1 className="text-4xl lg:text-6xl font-bold my-5">
              {siteConfig.title}
            </h1>
            <p className="text-xl lg:text-2xl text-primary">
              {siteConfig.tagline}
            </p>
          </div>
          <Buttons />
          <p className="mt-5 text-md px-5">
            Descarga {project.name}{" "}
            <span className="font-bold">v{project.version}</span> para el JDK de
            Java {project.versionLanguage}, asegura que esta libreria funcione
            correctamente.
          </p>
        </div>

        <div>
          <Tabs>
            <TabItem value="println" label="Println" default>
              <CustomCodeBlock className="language-js" title="java">
                {`import pandatools.PandaTools;

public class Main {
    public static void main(String[] args) {
        PandaTools.println("", 0, "hello");
        PandaTools.println("ERROR", 1, "hello ERROR");
        PandaTools.println("SUCCESS", 1, "hello SUCCESS");
        PandaTools.println("WARNING", 1, "hello WARNING");
        PandaTools.println("INFO", 1, "hello INFO");
        System.out.println();

        String[][] productos = {
                {"Producto", "Precio", "Cantidad", "Total"},
                {"Manzana verde", "1.00", "5", "5.00"},
                {"Banana", "0.50", "10", "5.00"},
                {"Naranja importada china", "0.75", "8", "6.00"}
        };

        PandaTools.printMatrix(productos, "bold", "SUCCESS", "normal", "", 1);

    }
}`}
              </CustomCodeBlock>
            </TabItem>
          </Tabs>
        </div>
      </div>
    </header>
  );
}
