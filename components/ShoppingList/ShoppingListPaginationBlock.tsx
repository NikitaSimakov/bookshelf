export const ShoppingPaginationBlock = ({
  page = 1,
  lastPage = 1,
  setPage,
}: {
  page: number;
  lastPage: number;
  setPage: Function;
}) => {
  const selectedPageNumbers = (page: number, lastPage: number) => {
    const array = [];

    for (let i = page; i <= page + 2 && i <= lastPage; i++) {
      array.push(i);
    }
    if (array.length === 1 && array[0] !== 1) {
      const prevPage = array[0] - 1;
      for (let i = prevPage; i < array[0]; i++) {
        array.unshift(i);
      }
    }
    if (array.length !== 1 && array.length < 3 && lastPage > 2) {
      array.unshift(Math.max(1, lastPage - 2));
    }
    return array;
  };

  const pages = selectedPageNumbers(page, lastPage);

  return (
    <ul style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
      <li onClick={() => setPage(1)}>first</li>
      <li
        onClick={() => {
          if (page > 1) setPage(page - 1);
        }}
      >
        previous
      </li>
      {pages.map((item, index) => {
        return (
          <li
            key={index}
            onClick={() => setPage(item)}
            style={item === page ? { color: "red" } : { color: "black" }}
          >
            {item}
          </li>
        );
      })}
      <li
        onClick={() => {
          if (lastPage === page) return;
          setPage(page + 1);
        }}
        style={lastPage === page ? { color: "gray" } : { color: "black" }}
      >
        next
      </li>
      <li
        onClick={() => {
          setPage(lastPage);
        }}
      >
        last
      </li>
    </ul>
  );
};
