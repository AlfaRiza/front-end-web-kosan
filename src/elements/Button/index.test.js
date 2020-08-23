import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRoute as Route } from "react-router-dom";
import Button from './index';

test("Should not allowed click button if isDisabled is present", () => {
    const { container } = render(<Button isDisabled></Button>);

    expect(container.querySelector("span.disabled")).toBeInTheDocument();
})

test("Should render loading/spinner", () => {
    const { container, getByText } = render(<Button isLoading></Button>);

    expect(getByText(/loading/i)).toBeInTheDocument();

    expect(container.querySelector("span.loading")).toBeInTheDocument();
})

test("Should render <a> tag", () => {
    const { container } = render(<Button href="" type="link" isExternal></Button>);

    expect(container.querySelector("a")).toBeInTheDocument();
})

test("Should render <Link> component", () => {
    const { container } = render(<Router><Button type="link"></Button></Router>);

    expect(container.querySelector("a")).toBeInTheDocument();
})
