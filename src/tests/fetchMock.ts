export const mockFetch = (data: object, ok: boolean) => {
  return vi.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      ...new Response(),
      json: () => Promise.resolve(data),
      ok: ok,
    }),
  );
};
