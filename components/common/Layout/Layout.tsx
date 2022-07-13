import { FC } from "react";
import s from "./Layout.module.css";
type Props = {
  children?: React.ReactNode | React.ReactNode[];
};
const Layout: FC<Props> = (props: Props) => {
  return (
    <div className={s.root}>
      {" "}
      <main className='fit'>{props.children}</main>
    </div>
  );
};

export default Layout;
