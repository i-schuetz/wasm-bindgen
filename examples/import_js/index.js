// For more comments about what's going on here, check out the `hello_world`
// example
import("./crate/pkg").catch(console.error);

import { name } from "./crate/defined-in-js";

name();
