import { Action } from '@ngrx/store';

import { State } from './counter.state';                // add

export enum CounterActionTypes {
    INCREMENT = '[COUNTER] Increment',
    DECREMENT = '[COUNTER] Decrement',
    LOAD = '[COUNTER] Load',                            // add
    LOAD_SUCCEEDED = '[COUNTER] Load Succeeded',        // add
    LOAD_FAILED = '[COUNTER] Load Failed',              // add
}

// (..)

export class Load implements Action {                   // add
    readonly type = CounterActionTypes.LOAD;            // add
}                                                       // add
export class LoadSucceeded implements Action {          // add
    readonly type = CounterActionTypes.LOAD_SUCCEEDED;  // add
    constructor(public payload: {counter: number}) { }  // add
}

export class Increment implements Action {
    readonly type = CounterActionTypes.INCREMENT;
}

export class Decrement implements Action {
    readonly type = CounterActionTypes.DECREMENT;
}


export type CounterActions
    = Increment
    | Decrement
    | Load                                              // add
    | LoadSucceeded;
