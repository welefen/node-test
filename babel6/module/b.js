// b.js
import {foo} from './a.js';
export function bar() {
  if (Math.random() > 0.5) {
    foo();
  }
}