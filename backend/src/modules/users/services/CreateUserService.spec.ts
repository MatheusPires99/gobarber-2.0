import AppError from "@shared/errors/AppError";

import FakeHashProvider from "../providers/HashProvider/fakes/FakeHashProvider";
import FakeUsersRepository from "../repositories/Fakes/FakeUsersRepository";
import CreateUserService from "./CreateUserService";

describe("CreateUser", () => {
  it("should be able to create a new user", async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashUserProvider = new FakeHashProvider();
    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashUserProvider,
    );

    const user = await createUser.execute({
      name: "John Doe",
      email: "johndoe@exemple.com",
      password: "123456",
    });

    expect(user).toHaveProperty("id");
  });

  it("should not be able to create two users with the same email", async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashUserProvider = new FakeHashProvider();
    const createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashUserProvider,
    );

    await createUser.execute({
      name: "John Doe",
      email: "johndoe@exemple.com",
      password: "123456",
    });

    await expect(
      createUser.execute({
        name: "John Doe",
        email: "johndoe@exemple.com",
        password: "123456",
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
