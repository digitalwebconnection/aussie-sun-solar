import ProjectsHero from '../Component/Projects/ProjectsHero';
import ProjectStats from '../Component/Projects/ProjectStats';
import ProjectsGrid from '../Component/Projects/ProjectsGrid';
import ProjectProcess from '../Component/Projects/ProjectProcess';


const ProjectsPage = () => {
  return (
    <main className="overflow-x-hidden">
      {/* 1. Cinematic hero with animated stats card */}
      <ProjectsHero />

      {/* 2. Floating dark stats band */}
      <ProjectStats />

      {/* 3. Filterable projects grid */}
      <ProjectsGrid />

      {/* 4. 4-step installation process */}
      <ProjectProcess />

      {/* 7. Dark CTA with contact cards */}
     
    </main>
  );
};

export default ProjectsPage;
