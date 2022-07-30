import React from 'react';
import { render, screen } from "@testing-library/react"
import Hello from "../src/Hello.mjs"

test("renders hello world", () => {
    render(<Hello />)
    screen.debug()
})
