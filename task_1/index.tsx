import React, { Component, memo, PureComponent } from "react";
import { memoizedCheck } from "../helpers/memo/memoized-check";

type IUser = {
  name: string;
  age: number;
};

type IProps = {
  user: IUser;
};

// functional component
const FirstComponent = memo(({ name, age }: IUser) => (
  <div>
    my name is {name}, my age is {age}
  </div>
));

// functional component
const SecondComponent = memo(
  ({ user: { name, age } }: IProps) => (
    <div>
      my name is {name}, my age is {age}
    </div>
  ),
  (prev, next) => memoizedCheck(prev, next, "user")
);

// class component
class ThirdComponent extends PureComponent<IUser> {
  render() {
    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
}

// class component
class FourthComponent extends Component<IProps> {
  shouldComponentUpdate(nextProps: Readonly<IProps>): boolean {
    return !memoizedCheck(this.props, nextProps, "user");
  }
  render() {
    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
}
