import { ReactNode } from "react";

const Section = ({
  classname,
  children,
}: {
  classname?: string;
  children: ReactNode;
}) => {
  return <section className={classname}>{children}</section>;
};

export default Section;
