import { MouseEventHandler } from "react";
import { Database } from "./supabase";

export interface TextFieldProps{
    hint?:string;
    type?:string;
    name?:string;
    className?:string;
    onValueChange?:(value:string)=>void;
}
export interface CustomButtonProps {
    title: string;
    containerStyles?:string;
    formAction?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export type{
    Database
}

export interface DashboardHeaderProps{
    style?:string;
    onMenuButtonClicked:() => void
}