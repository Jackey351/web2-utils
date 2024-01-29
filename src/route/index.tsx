import { css } from '@emotion/react';
import React, { Suspense } from 'react';
import { ReactNode, useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { Route, Switch } from 'react-router-dom';
import index from '../page';
import pwa from "@/components/pwa";

const Page = function () {
  const [item, setItem] = useState({});

  const states = {
    item,
    setItem,
  };

  return (
    <AppContext.Provider value={{ states,  }}>
      <Switch>
        <Layout>
          <Route exact path="/" component={index} />
          <Route exact path="/pwa" component={pwa} />
        </Layout>
      </Switch>
    </AppContext.Provider>
  );
};

const Layout = function ({ children }: { children: ReactNode }) {
  return (
    <div
      css={css`
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
      `}
    >
      {children}
    </div>
  );
};

export default Page;
