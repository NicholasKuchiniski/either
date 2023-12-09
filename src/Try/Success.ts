import { SuccessOrFailure } from "~/Try/SuccessOrFailure";

export class Success<A> extends SuccessOrFailure<A> {
  public constructor(protected result: A) {
    super(result);
  }

  public get() {
    return this.result;
  }

  public map<B>(mapTo: (value: A) => B): Success<B> {
    return new Success(mapTo(this.get()));
  }
}
