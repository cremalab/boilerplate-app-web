import { ActionType } from "../../types/ActionType"
import { makeActionCreator } from "../../utils/makeActionCreator"
import { EntityTodo } from "../../types/EntityTodo"

export const actionTodoAdd = makeActionCreator(
  ActionType.TodoAdd,
  (a: EntityTodo) => a,
)

export type ActionTodoAdd = ReturnType<typeof actionTodoAdd>
