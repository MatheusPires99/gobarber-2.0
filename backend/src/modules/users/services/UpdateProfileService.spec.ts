import AppError from "@shared/errors/AppError";

import FakeHashProvider from "../providers/HashProvider/fakes/FakeHashProvider";
import FakeUsersRepository from "../repositories/Fakes/FakeUsersRepository";
import UpdateProfileService from "./UpdateProfileService";

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe("UpdateProfile", () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it("should be able to update user profile", async () => {
    const user = await fakeUsersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: "John Tré",
      email: "johntre@example.com",
    });

    expect(updatedUser.name).toBe("John Tré");
    expect(updatedUser.email).toBe("johntre@example.com");
  });

  it("should not be able to update the profile from non-existing user", async () => {
    expect(
      updateProfile.execute({
        user_id: "non-existing-user-id",
        name: "Test",
        email: "test@example.com",
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to change to another user e-mail", async () => {
    await fakeUsersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    const user = await fakeUsersRepository.create({
      name: "Test",
      email: "test@example.com",
      password: "123456",
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: "John Tré",
        email: "johndoe@example.com",
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to update the password", async () => {
    const user = await fakeUsersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    const updatedUser = await updateProfile.execute({
      user_id: user.id,
      name: "John Tré",
      email: "johntre@example.com",
      old_password: "123456",
      password: "123123",
    });

    expect(updatedUser.password).toBe("123123");
  });

  it("should not be able to update the password without the old passowrd", async () => {
    const user = await fakeUsersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: "John Tré",
        email: "johntre@example.com",
        password: "123123",
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to update the password with wrong old passowrd", async () => {
    const user = await fakeUsersRepository.create({
      name: "John Doe",
      email: "johndoe@example.com",
      password: "123456",
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: "John Tré",
        email: "johntre@example.com",
        old_password: "wrong-old-password",
        password: "123123",
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
