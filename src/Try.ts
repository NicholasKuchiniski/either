export type Try<A> = Success<A> | Failure<A>;

export type Task<A> = () => Promise<Try<A>>;

export type OnThen<A, B> = (value: A) => B | PromiseLike<B>;

export type OnCatch<A> = (reason: unknown) => A | PromiseLike<A>;

export type OnFinally = () => void;

export class Success<A> {
  public constructor(private result: A) {}

  public get() {
    return this.result;
  }

  public isSuccess(): this is Success<A> & boolean {
    return true;
  }

  public isFailure(): this is Failure<A> & boolean {
    return false;
  }
}

export class Failure<A> {
  public constructor(private error: Error) {}

  public get() {
    return this.error;
  }

  public isSuccess(): this is Success<A> & boolean {
    return false;
  }

  public isFailure(): this is Failure<A> & boolean {
    return true;
  }
}
