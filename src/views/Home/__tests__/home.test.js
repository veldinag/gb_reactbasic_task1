import React from "react";
import {render, screen} from "@testing-library/react";
import configureStore from "redux-mock-store";
import Home from "../Home";
import Provider from "react-redux/lib/components/Provider";

const initialState = {page: null};
const mockStore = configureStore();

it('home view test', () => {
  const store = mockStore(initialState);
  const component = render(
    <Provider store={store}>
      <Home/>
    </Provider>
    );
  expect(component).toMatchSnapshot();
});