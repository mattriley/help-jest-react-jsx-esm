import { render, screen } from "@testing-library/react";
import HelloWorld from "../src/HelloWorld.mjs";

test("renders hello world", () => {
  render(<HelloWorld />);
  screen.debug();
});
