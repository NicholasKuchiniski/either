import { SomeOrNone } from "~/Maybe/SomeOrNone";

export class Some<A> extends SomeOrNone<A> {
  public constructor(protected value: A) {
    super(value);
  }

  public get() {
    return this.value;
  }
}
