import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {

    render(<CheckoutForm />);

});

test("shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstName = screen.queryByLabelText("First Name:");
    userEvent.type(firstName, "Justin");

    const lastName = screen.queryByLabelText("Last Name:");
    userEvent.type(lastName, "Peisker");

    const address = screen.queryByLabelText("Address:");
    userEvent.type(address, "123 Main St.");

    const city = screen.queryByLabelText("City:");
    userEvent.type(city, "Somewhereville");

    const state = screen.queryByLabelText("State:");
    userEvent.type(state, "CA");

    const zip = screen.queryByLabelText("zip:");
    userEvent.type(state, "00000");

    const button = screen.queryByRole("button");
    userEvent.click(button);

    const message = screen.getByText(/You have ordered some plants! Woo-hoo/)
    expect(message).toBeInTheDocument();
});