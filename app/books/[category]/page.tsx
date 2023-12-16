interface ICategory {
  params: {
    category: string;
  };
}

const Category = ({ params: { category } }: ICategory) => {
  return <h2>{category}</h2>;
};

export default Category;
