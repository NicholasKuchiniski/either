import { SomeOrNone } from "~/Maybe/SomeOrNone";

export class Some<A> extends SomeOrNone<A> {
  public constructor(protected value: A) {
    super(value);
  }

  public get() {
    return this.value;
  }

  public map<B>(mapTo: (value: A) => B): Some<B> {
    return new Some(mapTo(this.value));
  }
}
