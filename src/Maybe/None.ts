import { SomeOrNone } from "~/Maybe/SomeOrNone";

export class None<A> extends SomeOrNone<A> {
  public constructor(protected value = null) {
    super(value);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public map<B>(_mapTo: (value: A) => B): None<B> {
    return new None();
  }
}
