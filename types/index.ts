import { MouseEventHandler } from "react";
import { Database } from "./supabase";

export interface TextFieldProps{
    hint?:string;
    type?:string;
    className?:string;
    onValueChange:(value:string)=>void;
}
export interface CustomButtonProps {
    title: string;
    containerStyles?:string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
}

export type{
    Database
}