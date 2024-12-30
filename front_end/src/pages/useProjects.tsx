import { ProjectsUrl } from "../constants";
import axios from "axios";
import { useState, useEffect } from "react"


type StackItem = {
  id: number;
  documentId: string;
  Name: string

}

type DateRange = {
  id: number;
  StartDate: string;
  EndDate: string;


}
type DbProject = {
  Title: string;
  id: number;
  documentId: string;
  Description: string;
  Goal: string;
  Link: string;
  Rating: number;
  Stack: StackItem[];
  DateRange: DateRange

}


type ProjectSummary = {
  id: string;
  title: string;
  urlRule: string;
}

type Project = {
  id: string;
  title: string;
  goal: string;
  stack: string[];
  description: string;
  startDate: Date;
  endDate: Date;
  rating: number;
  link: string;
}


export default function useProjects() {
  const [projects, setProjects] = useState<ProjectSummary[]>([]);
  const [currentProject, setCurrentProject] = useState<Project>(
    {
      id: "",
      title: "",
      goal: "",
      stack: [],
      description: "",
      startDate: new Date("2024"),
      endDate: new Date("2024"),
      rating: 0,
      link: "",
    }
  );
  const [loading, setLoading] = useState<boolean>(true);

  function getProjects() {
    axios.get(ProjectsUrl + "?fields=Title&sort=DateRange.StartDate:desc")
      .then(
        (response) => { setProjects(response.data.data.map((entry: DbProject) => { return { title: entry.Title, urlRule: entry.Title.toLowerCase().replace(" ", "-"), id: entry.documentId } })) }
      ).catch(
        (error) => { console.log(error); console.log("could not find entry") }
      )
  }

  function getProject(project_name: string) {
    const project = projects.find((project) => project.urlRule == project_name)

    if (project == undefined) {
      return
    }

    axios.get(`${ProjectsUrl}/${project.id}?populate=*`)
      .then(
        (response) => {
          const data: DbProject = response.data.data
          setCurrentProject({
            id: data.documentId,
            title: data.Title,
            goal: data.Goal,
            stack: data.Stack.map((stackItem) => stackItem.Name),
            description: data.Description,
            startDate: new Date(data.DateRange.StartDate),
            endDate: new Date(data.DateRange.EndDate),
            rating: data.Rating,
            link: data.Link,
          })
        }
      ).catch(
        (error) => { console.log(error); console.log("could not find id") }
      )
  }

  useEffect(() => {
    getProjects(); setLoading(false);
  }, [])

  return { loading, projects, currentProject, getProjects, getProject }
}
