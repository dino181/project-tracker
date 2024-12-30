import useProjects from "./useProjects"

export default function ProjectList() {

  const projects = useProjects()

  return (
    <>
      <div className="w-3/5 h-full bg-red-200">
        <ul>
          {projects.projects.map((project, index) =>
            <li key={`project ${index}`}>
              <a href={`${project.urlRule}`}> {project.title} </a>
            </li>
          )}
        </ul>
      </div>
    </>
  )

}
