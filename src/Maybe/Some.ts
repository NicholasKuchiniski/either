import { SomeOrNone } from "~/Maybe/SomeOrNone";

export class Some<A> extends SomeOrNone<A> {
  public get() {
    return this.value;
  }
}
