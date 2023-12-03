import { SomeOrNone } from "~/Maybe/SomeOrNone";

export class None<A> extends SomeOrNone<A> {
  public constructor(protected value = null) {
    super(value);
  }
}
