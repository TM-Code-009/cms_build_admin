import { Document } from "mongoose";

export interface iAdmin{
    name: string;
    email: string;
    password: string;
}

export interface iAdminData extends iAdmin , Document{}


export interface iContent{
    title: string;
    desc: string;
    desccolor: string;
    descfontsize: string;
    descfontbold: string;
    color: string;
    fontsize: string;
    fontbold: string; 
    image: string;
    imageID: string 
}

export interface iContentData extends iContent , Document{}