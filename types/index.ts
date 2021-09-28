import { Request } from "express";

export interface mySQL_Response {
    affectedRows: number,
    insertId: number,
    sqlMessage: string
}
export interface Users {
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    role?: string,
    _created?: Date
}

export interface ReqUsers extends Request {
    user?: Users
}
export interface Books {
    id: number,
    categoryid: number,
    title: string,
    author: string,
    price: number,
    _created: Date,
    isPreview: boolean
}
export interface Categories {
    id: number,
    name: string
}