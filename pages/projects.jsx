import ProjectCard from '../components/ProjectCard';
import { getBackendProjects, getFullStackProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';
import { useState } from 'react';

const ProjectsPage = ({ projects }) => {

  const [projectType, setProjectType] = useState('Full Stack');

  return (
    <>
      <h3>Projects</h3>
      <hr/>
      <div className='w-full flex flex-row'>
        <button onClick={()=>setProjectType('Full Stack')} className={`${projectType === 'Full Stack' ? 'bg-gray-600' : ''} w-1/2 b-r-[2px]`}>
          Full Stack
        </button>
        <button onClick={()=>setProjectType('Backend')} className={`${projectType === 'Backend' ? 'bg-gray-600' : ''} w-1/2 b-r-[2px]`}>
          Backend
        </button>
      </div>
        {
          projectType === 'Full Stack' ?
          (
            <div className={styles.container}>
              {
                projects.fullStackProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              }
            </div>
          )
          :
          (
            <div className={styles.container}>
              {
                projects.backendProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))
              }
            </div>
          )
        }
      <br/>
    </>
  );
};

export async function getStaticProps() {
  const fullStackProjects = getFullStackProjects();
  const backendProjects = getBackendProjects();
  const projects = {fullStackProjects, backendProjects};

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
