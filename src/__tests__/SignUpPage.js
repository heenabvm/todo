import { render, screen } from "@testing-library/react";
import SignUpPage from "../components/SignUpPage";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

beforeEach(()=>{
    window.matchMedia = window.matchMedia || function() {
            return {
              matches: false,
              addListener: function() {},
              removeListener: function() {}
            };
          };        
})

const mockData = {
    email:"hello@gmail.com",
    password:"12345678"
}

    test("test sign-up page", async() => {
        userEvent.setup();
        const onFinish = jest.fn();
        render(<BrowserRouter><SignUpPage onFinish={onFinish}/></BrowserRouter>)   
        const input = screen.getAllByRole("textbox");
        const button = screen.getByRole('button');
        await userEvent.click(button);

        input.map(i=> expect(i).toBeInTheDocument())
        expect(button).toBeInTheDocument()

        onFinish(mockData)
        expect(onFinish).toHaveBeenCalledWith(mockData);
    })