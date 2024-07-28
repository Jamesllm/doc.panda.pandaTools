export function searchProject(release, projectName) {
    if (release) {
      const projects = release.projects;
      const today = new Date().toISOString().split("T")[0];
  
      if (projects && projects.length) {
        for (let i = 0; i < projects.length; i++) {
          if (projects[i].name === projectName && projects[i].date >= today) {
            return projects[i];
          }
        }
      } else {
        console.error("No se ha encontrado DATA");
      }
    }
    return null;
  }
  