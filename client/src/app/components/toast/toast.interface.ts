import { Timer } from "src/app/util/timer";

export interface Toast{
    id?: number;
    timer?: Timer;
    visible?:boolean;
    title?:string;
    icon?:string;
    description?:string;
    color?:string;
  }