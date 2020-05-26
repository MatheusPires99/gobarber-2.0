import AppError from "@shared/errors/AppError";

import FakeCacheProvider from "@shared/container/providers/CacheProvider/fakes/FakeCacheProvider";
import FakeHashProvider from "../providers/HashProvider/fakes/FakeHashProvider";
import FakeUsersRepository from "../repositories/Fakes/FakeUsersRepository";
import CreateUserService from "./CreateUserService";

let fakeUsersRepository: FakeUsersRepository;
let fakeHashUserProvider: FakeHashProvider;
let fakeCacheProvider: FakeCacheProvider;
let createUser: CreateUserService;

describe("CreateUser", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashUserProvider = new FakeHashProvider();
    fakeCacheProvider = new FakeCacheProvider();

    createUser = new CreateUserService(
      fakeUsersRepository,
      fakeHashUserProvider,
      fakeCacheProvider,
    );
  });

  it("should be able to create a new user", async () => {
    const user = await createUser.execute({
      name: "John Doe",
      email: "johndoe@exemple.com",
      password: "123456",
    });

    expect(user).toHaveProperty("id");
  });

  it("should not be able to create two users with the same email", async () => {
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
