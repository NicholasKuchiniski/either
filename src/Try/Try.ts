import type { Success } from "~/Try/Success";
import type { Failure } from "~/Try/Failure";

export type Try<A> = Success<A> | Failure<A>;
