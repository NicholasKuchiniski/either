import { MaybeNil } from "tsdef";
import { SomeOrNone } from "~/Maybe/SomeOrNone";

export class None<A> extends SomeOrNone<A> {
  public constructor(protected value: MaybeNil<A> = null) {
    super(value);
  }
}
