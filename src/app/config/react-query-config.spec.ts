import { reactQueryConfig } from "./react-query-config";

describe("React Query Configuration", () => {
  it("should have the correct default options", () => {
    const queryClient = reactQueryConfig;

    expect(queryClient.getDefaultOptions().queries?.retry).toBe(2);
    expect(queryClient.getDefaultOptions().queries?.refetchOnWindowFocus).toBe(
      false
    );
    expect(queryClient.getDefaultOptions().queries?.staleTime).toBe(
      1000 * 60 * 5
    );
  });
});
