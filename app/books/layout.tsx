import CategoryMenu from "@/components/CategoryMenu/CategoryMenu";
import Header from "@/components/Header/Header";
import Support from "@/components/Slider/Support";
import LeftBar from "../containers/LeftBar/LeftBar";
import BooksLayoutSection from "../containers/BooksLayoutSection/BooksLayoutSection";

const BooksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <BooksLayoutSection>
        <LeftBar>
          <CategoryMenu />
          <Support />
        </LeftBar>
        {children}
      </BooksLayoutSection>
    </>
  );
};

export default BooksLayout;
