import { useParams } from "react-router"
import useProjects from "./useProjects";
import { useEffect, useState } from "react";
import { Star, StarHalf, StarOutline } from "@mui/icons-material";
import { monthNames } from "../constants";

export default function Project() {
  let params = useParams();
  const projects = useProjects();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (params.project_name && projects.projects.map((project) => project.urlRule).includes(params.project_name)) {
      setShow(true);
      projects.getProject(params.project_name);
    }
  }, [projects.projects])

  return (

    !show ?
      <>
        <div className="flex flex-col justify-center gap-3 p-5 bg-white w-3/5 h-full" >
          <p className="self-center text-5xl "> Project not found </p>
        </div >
      </>
      :
      <>
        <div className="flex flex-col gap-3 p-5 bg-white w-4/5 h-full">

          <div className="flex flex-col w-3/4 bg-black/10 mx-0">
            <h1 className="text-6xl"> {projects.currentProject.title} </h1>
            <p className="italic">
              {monthNames[projects.currentProject.startDate.getMonth()]} {projects.currentProject.startDate.getFullYear()}
              {(projects.currentProject.startDate.getMonth() != projects.currentProject.endDate.getMonth() || projects.currentProject.startDate.getFullYear() != projects.currentProject.endDate.getFullYear()) && ` - ${monthNames[projects.currentProject.endDate.getMonth()]} ${projects.currentProject.endDate.getFullYear()}`}
            </p>
            <div className="w-full h-fit">
              {Array.from({ length: projects.currentProject.rating / 2 }).map((_, index) => <Star key={`star-${index}`} />)}
              {Array.from({ length: projects.currentProject.rating % 2 }).map((_, index) => <StarHalf key={`starHalf-${index}`} />)}
              {Array.from({ length: (10 - projects.currentProject.rating) / 2 }).map((_, index) => <StarOutline key={`starOutline-${index}`} />)}
            </div>
          </div>

          <hr />

          <div className="flex flex-col w-3/5 bg-black/10 px-5 self-end">
            <h2 className="text-3xl"> Project Goal </h2>
            <p> {projects.currentProject.goal} </p>
          </div>

          <div className="flex flex-col w-1/2 bg-black/10 mx-10">
            <h2 className="text-3xl"> Tech Stack </h2>
            <ul>
              {projects.currentProject?.stack.map((stackItem, index) => <li key={`stackitem ${index}`} > {stackItem} </li>)}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl"> Description </h2>
            <p> {projects.currentProject?.description} </p>
          </div>


          <div className="self-center flex flex-col w-1/2">
            <h2 className="self-center text-3xl"> Screenshots </h2>
            <div className="aspect-video w-full bg-red-500">
            </div>
          </div>

          <hr />

          <div>
            <a href={projects.currentProject?.link} target="_blank"> Project Link </a>
          </div>

        </div >
      </>

  )
}
