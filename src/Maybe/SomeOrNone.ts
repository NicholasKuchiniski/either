/* eslint-disable @typescript-eslint/no-var-requires */
import type { MaybeNil } from "tsdef";

import type { Maybe } from "~/Maybe/Maybe";
import type { None } from "~/Maybe/None";
import type { Some } from "~/Maybe/Some";
import { isNil } from "~/utils";

export abstract class SomeOrNone<A> {
  public constructor(protected value: MaybeNil<A>) {}

  public isDefined(this: Maybe<A>): this is Some<A> {
    const { value } = this as unknown as SomeOrNone<A>;

    return !isNil(value);
  }

  public isEmpty(this: Maybe<A>): this is None<A> {
    const { value } = this as unknown as SomeOrNone<A>;

    return isNil(value);
  }

  public map<B>(mapTo: (value: A) => B): Maybe<B> {
    const { Some } = require("~/Maybe/Some");
    const { None } = require("~/Maybe/None");

    if (this.value) {
      return new Some(mapTo(this.value));
    }

    return new None();
  }

  public getOrElse<B = A>(orElse: () => B): A | B {
    return this.value === undefined || this.value === null
      ? orElse()
      : this.value;
  }

  public getOrThrow(): A {
    const { value } = this as unknown as SomeOrNone<A>;

    if (value === undefined || value === null) {
      throw new Error("Value is not defined.");
    }

    return value;
  }
}