import SEO from '../Component/SEO';
import ProjectsHero from '../Component/Projects/ProjectsHero';
import ProjectStats from '../Component/Projects/ProjectStats';
// import ProjectsGrid from '../Component/Projects/ProjectsGrid';
import ProjectsGallery from '../Component/Projects/ProjectsGallery';
import ProjectProcess from '../Component/Projects/ProjectProcess';


const ProjectsPage = () => {
  return (
    <main className="overflow-x-hidden">
      <SEO title="Our Projects" description="See our real-world solar power systems and battery storage installation projects across Australia." />
      {/* 1. Cinematic hero with animated stats card */}
      <ProjectsHero />

      {/* 2. Floating dark stats band */}
      <ProjectStats />

      {/* 3. Filterable projects grid */}
      {/* <ProjectsGrid /> */}

      {/* 4. Real project photo gallery */}
      <ProjectsGallery />

      {/* 5. 4-step installation process */}
      <ProjectProcess />

    </main>
  );
};

export default ProjectsPage;
