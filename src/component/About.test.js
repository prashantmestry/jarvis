import { render, screen } from "@testing-library/react";
import About from "./About";
import { store } from "../Redux/store";
import { Provider } from "react-redux";

describe("About page testing", () => {
//   it("about text check", () => {
//     render(
//       <Provider store={store}>
//         <About />
//       </Provider>
//     );
//     let tt = screen.getByTestId("pagename");
//     expect(tt).toBeInTheDocument();
//   });

  it("about text check", () => {
    render(
      <Provider store={store}>
        <About />
      </Provider>
    );
    let tt1 = screen.getByText(/About/);
    expect(tt1).toBeInTheDocument();
  });
});
