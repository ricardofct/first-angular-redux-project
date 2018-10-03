import { State, initialState } from '@state/todo-list/todo-list.state';
import { TodoListActionTypes, TodoListActions } from '@state/todo-list/todo-list.actions';

export function todoListReducer(state = initialState, action: TodoListActions): State {
    switch (action.type) {
        case TodoListActionTypes.ADD_TODO:
            return [
                ...state, {
                    name: action.payload.name,
                    done: false
                }
            ];

        case TodoListActionTypes.TOGGLE_TODO:
            return [...state]
                .map((obj, i) => ({
                            ...obj,
                            ...(action.payload.index === i) && {done: action.payload.done || !obj.done }
                        })
                );

        default: {
            return state;
        }
    }
}
