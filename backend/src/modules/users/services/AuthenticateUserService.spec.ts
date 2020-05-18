// import AppError from "@shared/errors/AppError";

import AppError from "@shared/errors/AppError";
import FakeUsersRepository from "../repositories/Fakes/FakeUsersRepository";
import FakeHashProvider from "../providers/HashProvider/fakes/FakeHashProvider";
import AuthenticateUserService from "./AuthenticateUserService";
import CreateUserService from "./CreateUserService";

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let createUser: CreateUserService;
let authenticateUser: AuthenticateUserService;

describe("AuthenticateUser", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserService(fakeUsersRepository, fakeHashProvider);
    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it("should be able to authenticate", async () => {
    const user = await createUser.execute({
      name: "John Doe",
      email: "johndoe@exemple.com",
      password: "123456",
    });

    const response = await authenticateUser.execute({
      email: "johndoe@exemple.com",
      password: "123456",
    });

    expect(response).toHaveProperty("token");
    expect(response.user).toEqual(user);
  });

  it("should be not able to authenticate with a non existing user", async () => {
    await expect(
      authenticateUser.execute({
        email: "johndoe@exemple.com",
        password: "123456",
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should be not able to authenticate with wrong password", async () => {
    await createUser.execute({
      name: "John Doe",
      email: "johndoe@exemple.com",
      password: "123456",
    });

    await expect(
      authenticateUser.execute({
        email: "johndoe@exemple.com",
        password: "12345",
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
