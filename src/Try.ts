export type Result<A> = _Success<A> | _Failure<A>;

export type Task<A> = () => Promise<Result<A>>;

export type OnThen<A, B> = (value: A) => B | PromiseLike<B>;

export type OnCatch<A> = (reason: unknown) => A | PromiseLike<A>;

export type OnFinally = () => void;

class _Success<A> {
  public constructor(private result: A) {}

  public get() {
    return this.result;
  }

  public isSuccess(): this is _Success<A> & boolean {
    return true;
  }

  public isFailure(): this is _Failure<A> & boolean {
    return false;
  }
}

class _Failure<A> {
  public constructor(private error: Error) {}

  public get() {
    return this.error;
  }

  public isSuccess(): this is _Success<A> & boolean {
    return false;
  }

  public isFailure(): this is _Failure<A> & boolean {
    return true;
  }
}

export type Try<A> = PromiseLike<Result<A>>;

export const Try = <A>(task: Task<A>) => task();

export const Success = <A>(value: A) => new _Success(value);

export const Failure = <A>(error: Error) => new _Failure<A>(error);
