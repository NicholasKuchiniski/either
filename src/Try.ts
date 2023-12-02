type Result<A> = _Success<A> | _Failure<A>;

type Task<A> = () => Promise<Result<A>>;

type OnThen<A, B> = (value: A) => B | PromiseLike<B>;

type OnCatch<A> = (reason: unknown) => A | PromiseLike<A>;

type OnFinally = () => void;

class _Success<A> {
  public constructor(private result: A) {}

  public get() {
    return this.result;
  }

  public isSuccess(): this is _Success<A> {
    return true;
  }

  public isFailure(): this is _Failure<A> {
    return false;
  }
}

class _Failure<A> {
  public constructor(private error: Error) {}

  public get() {
    return this.error;
  }

  public isSuccess(): this is _Success<A> {
    return false;
  }

  public isFailure(): this is _Failure<A> {
    return true;
  }
}

class PromiseTry<A> implements PromiseLike<Result<A>> {
  private promise!: Promise<Result<A>>;

  public constructor(task: Task<A>) {
    this.promise = task();
  }

  // istanbul ignore next
  then<B = Result<A>>(onThen: OnThen<Result<A>, B>) {
    return this.promise.then(onThen);
  }

  // istanbul ignore next
  catch(onCatch: OnCatch<Result<A>>) {
    return this.promise.catch(onCatch);
  }

  // istanbul ignore next
  finally(onFinally: OnFinally) {
    return this.promise.finally(onFinally);
  }
}

export const Try = <A>(task: Task<A>) => new PromiseTry(task);

export const Success = <A>(value: A) => new _Success(value);

export const Failure = (error: Error) => new _Failure(error);
