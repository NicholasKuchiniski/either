import type { Failure } from "~/Try/Failure";
import type { Success } from "~/Try/Success";
import type { Try } from "~/Try/Try";
import { isError } from "~/utils";

export class SuccessOrFailure<A> {
  public constructor(protected result: A | Error) {}

  public isSuccess(this: Try<A>): this is Success<A> {
    const { result } = this as unknown as SuccessOrFailure<A>;

    return !isError(result);
  }

  public isFailure(this: Try<A>): this is Failure<A> {
    const { result } = this as unknown as SuccessOrFailure<A>;

    return isError(result);
  }
}
