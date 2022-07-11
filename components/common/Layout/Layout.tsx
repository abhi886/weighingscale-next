import { FC } from "react";
type Props = {
  children?: React.ReactNode | React.ReactNode[];
};
const Layout: FC<Props> = (props: Props) => {
  return <div className='layout'>{props.children}</div>;
};

export default Layout;
