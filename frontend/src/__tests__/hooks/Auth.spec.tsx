import { renderHook } from "@testing-library/react-hooks";

import { useAuth, AuthProvider } from "../../hooks/auth";

describe("Auth hook", () => {
  it("sould be hable to sign in", () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: "johndoe@example.com",
      password: "123456",
    });

    expect(result.current.user.email).toEqual("johndoe@example.com");
  });
});
