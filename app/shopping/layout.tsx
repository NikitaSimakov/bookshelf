import Header from "@/components/Header";

const ShoppingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default ShoppingLayout;
