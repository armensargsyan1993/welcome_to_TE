import { Fragment, memo, FC } from "react";
import { memoizedCheck } from "../helpers/memo/memoized-check";
import { IUser } from "../interfaces";

interface IProps {
  user: IUser;
}

const MainComponent: FC<IProps> = ({
  user = { name: "unknown", age: null }, // default value for `props.user`
}) => {
  return (
    <Fragment>
      <ChildComponent user={user} />
    </Fragment>
  );
};

// memoized component
const ChildComponent: FC<IProps> = memo(
  ({ user: { name, age } }) => {
    return (
      <div>
        user name: {name}, user age: {age}
      </div>
    );
  },
  (prev, next) => memoizedCheck(prev, next, "user")
);
