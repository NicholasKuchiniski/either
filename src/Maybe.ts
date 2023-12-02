export class Maybe<A> {
  public constructor(protected value?: A | null) {}

  public isDefined(): this is Some<A> & boolean {
    return this.value !== undefined && this.value !== null;
  }

  public isEmpty(): this is None<A> & boolean {
    return this.value === undefined || this.value === null;
  }
  protected get() {
    return this.value as A;
  }

  public map<B>(mapTo: (value: A) => B): Maybe<B> {
    if (this.value) {
      return new Maybe(mapTo(this.value));
    }

    return new None();
  }

  public getOrElse<B = A>(orElse: () => B): A | B {
    return this.value === undefined || this.value === null
      ? orElse()
      : this.value;
  }

  public getOrThrow(): A {
    if (this.isDefined()) {
      return this.get();
    }

    throw new Error("Value is not defined.");
  }
}

export class Some<A> extends Maybe<A> {
  public constructor(protected value: A) {
    super(value);
  }

  public get() {
    return super.get();
  }
}

export class None<A> extends Maybe<A> {
  public constructor() {
    super(null);
  }
}
