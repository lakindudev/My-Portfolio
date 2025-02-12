import { ClassValue, clsx} from "clsx";
import exp from "constants";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs));
}