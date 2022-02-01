import React, { ReactElement } from "react";
import Collections from "../Pages/Collections/Collections";
import TodoList from "../Pages/TodoList/TodoList";

interface IRoute {
  path: string
  element: ReactElement
}

export const routes: IRoute[] = [
  {path: '/', element: <TodoList/>},
  // {path: '/', element: <Collections/>}
]