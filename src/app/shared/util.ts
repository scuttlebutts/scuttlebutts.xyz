import { Observable, tap } from "rxjs"

//operators
export function log<T>(source$: Observable<T>): Observable<T> {
    return source$.pipe(tap(v => console.log(`log: ${v}`)));
  }