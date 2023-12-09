import { SuccessOrFailure } from "~/Try/SuccessOrFailure";

export class Failure<A> extends SuccessOrFailure<A> {
  public constructor(protected error: Error) {
    super(error);
  }

  public get() {
    return this.error;
  }

  public map<B>(): Failure<B> {
    return new Failure<B>(this.error);
  }
}
