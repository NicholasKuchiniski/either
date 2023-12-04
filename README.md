# @nicholaskuchiniski/either

Either is a package with typescript classes/functions that helps you write more "fluent" typescript code. It was inspired by [monapt](https://github.com/jklmli/monapt) but since monapt didn't have somethings i need, i decided to create my own version of it.

## Why not monapt ? What are the differences ?

Both libraries can achieve similar results, but i wrote this one because i had some problems with the way `monapt` dealt with typescript and its own methods, example:

### Option/Maybe comparasion

> Monapt

```ts
import { Option, Some } from "monapt";

const maybeSomething = Option<string>(undefined);
const something = new Some("");

maybeSomething.get(); // No type errors, even though this is a undefined value, instead you get an error being thrown on runtime.
maybeSomething.getOrElse(() => 0); // The type of this now is number, instead of string | number

something.map((a) => a); // The return of this is a Option, instead of a Some
```

> Either

```ts
import { Maybe, Some } from "@nicholaskuchiniski/either";

const maybeSomething = Maybe<string>(undefined);
const something = new Some("");

maybeSomething.get(); // Type error because this method is only accessible in a "Some", so you can't access it without verifying first.
maybeSomething.getOrElse(() => 0); // The type of this is now string | number.

something.map((a) => a); // The return of this is a Some, so you can access the .get() method without type errors.

// In order to use the .get() method, you have to check for .isDefined() or .isEmpty() first.

if (maybeSomething.isDefined()) {
  maybeSomething.get(); // inside this if, maybeSomething is now Some<string>
}
```

### Try comparasion

> Monapt

```ts
import { Failure, Try } from "monapt";

function failure(): Try<string> {
  return new Failure(new Error());
}

const failureResult = failure();

if (failureResult.isSuccess) {
  failureResult.get(); // This method is available and its typed as "string", even though this returned an error. Calling this will result in a runtime error.
}

```

> Either

```ts
import { Try, Failure } from "@nicholaskuchiniski/either";

function failure(): Try<string> {
  return new Failure(new Error());
}

const failureResult = failure();

if (failureResult.isSuccess()) {
  failureResult.get(); // This method is available and its typed as "string".
}

if (failureResult.isFailure()) {
  failureResult.get(); // This method is available and its typed as "Error", so you get the failure reason instead of receiving a runtime exception..
}

failureResult.get(); // This is typed as string | Error, so you can't by mistake send this somewhere without verifying it first.
```

In short, this library offers better typescript compatibility and "force" you to verify either of the results (Some/None, Failure/Success) before accessing the values, it also has a better tyiping system for methods such as `getOrElse` and `map`.

# Install

```bash
npm add @nicholaskuchiniski/either
```

# Documentation

This ia pretty simple library and in some minutes you can understand how things works by looking at the source code, most of the files have a `.test.ts` file that tests the behavior of the class, you can use those files to know how certain methods works under the hood.