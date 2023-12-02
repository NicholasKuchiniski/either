# @nicholaskuchiniski/either

Either is a package with typescript classes/functions that helps you write more "fluent" typescript code. It was inspired by [monapt](https://github.com/jklmli/monapt) but since monapt didn't have somethings i need, i decided to create my own version of it.

## Install
```
yarn add @nicholaskuchiniski/either
```

### Usage

#### Maybe

You can check a full usage example inside [Maybe.test.ts](./src/Maybe.test.ts).

```ts
  const users: User[] = []

  function getUser(id: string) {
    return new Maybe(
      users.find(user => user.id);
    );
  }

  const user = getUser("");

  user.get() // ❌ Throws errors because you didn't verified with .isDefined() first;

  if(user.isDefined()) {
    user.get() // ✅
  }

  if(user.isEmpty()) {
    throw new Error("User not found")
  }

  const name = user
    .map(user => `Mr. ${user.name}`)
    .getOrThrow() // ✅

  const defaultName = user
    .map(user => `Mr. ${user.name}`)
    .getOrElse(() => "Mr. John Smith") // ✅
```

### Try

You can check a full usage example inside [Try.test.ts](./src/Try.test.ts).

```ts
const login = (email: string, password: string): Try<Token> => {
  const maybeToken = verify(login, password)

  if(maybeToken.isEmpty()) {
    return new Failure<Token>(new Error("Name or password is incorrect"));
  }

  return maybeToken
    .map(token => new Success(token))
    .getOrThrow()
}

const maybeToken = await login("john@email.com", "123");


if(maybeToken.isSuccess()) {
  console.log("Logged with success", maybeToken.get())
}

if(maybeToken.isFailure()) {
  console.log("Login failed");

  throw maybeToken.get()
}
```