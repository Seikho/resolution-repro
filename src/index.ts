
// This works at run-time, but fails at compile time
// TypeScript appears to be ignore the package.json at mod/mod-a which contains the typings property
// This works in version 2.5.2 and below, but fails in 2.5.3 onward
import * as modA from 'mod/mod-a' 

// This works due to re-exporting everything from a hacky index.ts in node_modules/mod/mod-b
import * as modB from 'mod/mod-b' 

// This absolute look up works
import * as modC from 'mod/mod-a/src' 

console.log('MOD A', modA.add(1, 1))
console.log('MOD B', modB.add(2, 2))
console.log('MOD C', modC.add(3, 3))
