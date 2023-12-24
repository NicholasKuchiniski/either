import { None } from "~/Maybe/None";
import { Some } from "~/Maybe/Some";
import { MaybeNil } from "~/types";
import { isNil } from "~/utils";

export type Maybe<A> = Some<A> | None<A>;

export const Maybe = <A>(value: MaybeNil<A>): Maybe<A> =>
  isNil(value) ? new None() : new Some(value);
