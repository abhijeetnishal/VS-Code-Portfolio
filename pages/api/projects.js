import backendProjectsData from './backendProjects.json';
import fullStackProjectsData from './fullStackProject.json';

export const getFullStackProjects = () => {
  return fullStackProjectsData;
};

export const getBackendProjects = () =>{
  return backendProjectsData;
}

export default (req, res) => {
  const backendProjects = getBackendProjects();
  const fullStackProjects = getFullStackProjects();
  res.json({backendProjects, fullStackProjects});
};
