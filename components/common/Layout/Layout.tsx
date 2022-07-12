import { FC } from "react";
import s from "./Layout.module.css";
type Props = {
  children?: React.ReactNode | React.ReactNode[];
};
const Layout: FC<Props> = (props: Props) => {
  return <main className={s.root}>{props.children}</main>;
};

export default Layout;
