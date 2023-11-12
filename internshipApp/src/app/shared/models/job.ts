import { Company } from "./company";
import { Skill } from "./skill";

export class Job {
  id?: number;
  title?: string;
  description?: string;
  company?: Company;
  skills?: Skill[];
  status?: boolean;


  getSkillIds(skills:Skill[]){
    let ids : number[] = []
    skills.forEach(element => {
      ids.push(element.id)
    });
    return ids;
  }


}
