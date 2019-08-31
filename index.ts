import { of, defer, merge, timer } from 'rxjs'; 
import { map, switchMap } from 'rxjs/operators';

const of$ = of(new Date());
const defer$ = defer(() => of(new Date()));

timer(1000).pipe(
  switchMap(_ => merge(of$, defer$))
).subscribe(console.log);
