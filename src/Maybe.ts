export type Maybe<A> = _Maybe<A>;

class _Maybe<A> {
  public constructor(protected value?: A | null) {}

  public isDefined(): this is _Some<A> & boolean {
    return this.value !== undefined && this.value !== null;
  }

  public isEmpty(): this is _None<A> & boolean {
    return this.value === undefined || this.value === null;
  }
  protected get() {
    return this.value as A;
  }

  public map<B>(mapTo: (value: A) => B): _Maybe<B> {
    if (this.value) {
      return new _Maybe(mapTo(this.value));
    }

    return None();
  }

  public getOrElse(orElse: () => A) {
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

class _Some<A> extends _Maybe<A> {
  public constructor(protected value: A) {
    super(value);
  }

  public get() {
    return super.get();
  }
}

class _None<A> extends _Maybe<A> {
  public constructor() {
    super(null);
  }
}

export const Maybe = <T>(value?: T | null) => new _Maybe(value);

export const Some = <T>(value: T) => new _Some(value);

export const None = <T>() => new _None<T>();
