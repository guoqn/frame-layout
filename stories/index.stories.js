import React from "react";
import { storiesOf } from "@storybook/react";
import {
  text,
  boolean,
  number,
  array,
  select,
  radios,
  object,
} from "@storybook/addon-knobs";

import Component from "../src";
import notes from "../README.md";
import { Route, Switch, Redirect } from "react-router-dom";
const siderMenuConfig = [
  {
    name: "质量概况",
    to: "/quality",
    key: "/quality",
    iconType: "SolutionOutlined",
  },
  {
    name: "调度",
    to: "/dispatch",
    key: "/dispatch",
    iconType: "SolutionOutlined",
    subs: [
      {
        name: "厂商配置列表1",
        to: "/dispatch/SupplierManage",
        key: "/dispatchSupplierManage",
      },
      {
        name: "融合关系配置列表1",
        to: "/dispatch/RelationConfigManage",
        key: "/dispatchRelationConfigManage",
      },
    ],
  },
  {
    name: "配置",
    to: "/config",
    iconType: "HomeOutlined",
    key: "/config",
    subs: [
      {
        name: "厂商配置列表",
        to: "/config/SupplierManage",
        key: "/SupplierManage",
      },
      {
        name: "融合关系配置列表",
        to: "/config/RelationConfigManage",
        key: "/RelationConfigManage",
      },
    ],
  },
];
const domain = "http://172.18.11.112:40080";

storiesOf("布局", module).add(
  "zeus-frame-layout",
  () => (
    <Component
      apiDomain={text("apiDomain", domain)}
      logo={text(
        "logo",
        "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"
      )}
      appName={text("appName", "测试平台")}
      apps={{}}
      mode={select(
        "mode",
        {
          "sider+header": "sider+header",
          sider: "sider",
          header: "header",
        },
        "sider+header"
      )}
      userName={text("userName", "jonny")}
      allowExpandMultiMenus={boolean("allowExpandMultiMenus", false)}
      needFooter={boolean("needFooter", false)}
      needFullScreen={boolean("needFullScreen", false)}
      menus={object("menus", siderMenuConfig)}
      openAuth={boolean("openAuth", false)}
      authUrl={text("authUrl", "https://aegis-config-api-dev.k8s.bs58i.baishancdnx.com")}
      sysId={number("sysId", 4)}
    >
      <div style={{ height: 1200, width: "100%" }}>
        <Switch>
          {siderMenuConfig.map((menu) => (
            <Route exact path={menu.to} render={() => <h1>{menu.name}</h1>} />
          ))}
          <Route exact path={"/quality/:id"} render={() => <h1>dasdasda</h1>} />
        </Switch>
      </div>
    </Component>
  ),
  { notes }
);
