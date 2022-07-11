import { FC } from "react";
interface LoadingProps {
  children: React.ReactNode;
}
const Layout: FC = ({ children }: LoadingProps) => {
  return <div className='layout'>{children}</div>;
};

export default Layout;
