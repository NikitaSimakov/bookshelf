export const filterLinks = (arr: { name: string; url: string }[]) =>
  arr?.filter(
    (link: { name: string; url: string }) =>
      link.name === "Amazon" || link.name === "Apple Books"
  );
