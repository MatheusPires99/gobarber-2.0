import { renderHook } from "@testing-library/react-hooks";
import MockAdapter from "axios-mock-adapter";

import api from "../../services/api";
import { useAuth, AuthProvider } from "../../hooks/auth";

const apiMock = new MockAdapter(api);

describe("Auth hook", () => {
  it("sould be hable to sign in", async () => {
    const apiResponse = {
      user: {
        id: "user-123",
        name: "John Doe",
        email: "johndoe@example.com",
      },
      token: "token-123",
    };

    apiMock.onPost("sessions").reply(200, apiResponse);

    const setItemSpy = jest.spyOn(Storage.prototype, "setItem");

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: "johndoe@example.com",
      password: "123456",
    });

    await waitForNextUpdate();

    expect(setItemSpy).toHaveBeenCalledWith(
      "@GoBarber:token",
      apiResponse.token,
    );
    expect(setItemSpy).toHaveBeenCalledWith(
      "@GoBarber:user",
      JSON.stringify(apiResponse.user),
    );
    expect(result.current.user.email).toEqual("johndoe@example.com");
  });
});
