export const filterLinks = (arr: { name: string; url: string }[]) =>
  arr.filter(
    (link: { name: string; url: string }) =>
      link.name === "Amazon" ||
      link.name === "Apple Books" ||
      link.name === "Barnes and Noble"
  );

// export const linksMarkup = (
//   links: { name: string; url: string }[]
// ): JSX.Element => {
//   const filteredLinks = requiredLinks(links);
//   const markup = filteredLinks.map(({ name, url }) => (
//     <li key={url}>
//       <a href={url}>{name}</a>
//     </li>
//   ));
//   return <ul>{markup}</ul>;
// };
