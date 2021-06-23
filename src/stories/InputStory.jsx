import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Input from "../03/Input";

storiesOf("Input", module)
  .addWithJSX("기본설정", () => <Input name="name" />)
  .addWithJSX("label 예제", () => <Input name="name" label="이름" />)
  .addWithJSX("OnChange 예제", () => (
    <Input name="name" onChange={action("OnChange 이벤트 발생")} />
  ));
