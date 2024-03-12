import { act, fireEvent, getByText, render, screen } from "@testing-library/react"
import EditForm from "../components/class_component/EditForm"
import userEvent from "@testing-library/user-event"

describe("test case 1", () => {
    // test("on chnage test case 1", () => {
    //     render(<EditForm />)
    //     const input = screen.getByRole("textbox");
    //     fireEvent.change(input, { target: { value: "abc" } });
    //     expect(input.value).toBe("abc");
    // })

    // test("click test case", ()=>{
    //     render(<EditForm/>)
    //     const btn = screen.getByRole("button");
    //     fireEvent.click(btn);
    //     expect(screen.getByText("Hello")).toBeInTheDocument();
    // }) 

    // test("snapshot", ()=>{
    //     const compo = render(<EditForm/>)
    //     expect(compo).toMatchSnapshot();
    // })

    test.skip("role test case", () => {
        render(<EditForm />)
        // const btn = screen.getByRole("button", {name: "Submit"});
        // const btn1 = screen.getByRole("button", {name: "Save"});
        const btns = screen.getAllByRole('button')
        const options = screen.getAllByRole('option')

        btns.map(b => expect(b).toBeInTheDocument())
        options.map(o => expect(o).toBeInTheDocument())

        // expect(btn1).toBeInTheDocument();
    })

    test.skip("role test case1", async() => {
        userEvent.setup();
        render(<EditForm />)
        const input = screen.getByLabelText("Name");
        const btn = screen.queryByText("Cancel");
        const btn1 = screen.getByText("Edit");
        await userEvent.click(btn1);

        expect(screen.getByText("edit")).toBeInTheDocument();
        expect(btn).not.toBeInTheDocument();
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute("id");
        // expect(input).toHaveValue("Hello");
        expect(input).toHaveClass("div");
    })

    
})
test.skip("change event", async() => {
    userEvent.setup();
    render(<EditForm />)
    const input = screen.getByLabelText("Name");
    await act(async()=>{
        await userEvent.type(input, "abc");
    })
    expect(screen.getByText("abc")).toBeInTheDocument();
})

test.skip("props check", async() => {
    const name = "user"
    render(<EditForm name={name}/>)   
    expect(screen.getByText(name)).toBeInTheDocument();
})

test.skip("function props test", async() => {
const fun = jest.fn();
userEvent.setup();
    render(<EditForm fun={fun}/>)   
    const button = screen.getByText("Save");
    await userEvent.click(button);
    expect(fun).toHaveBeenCalled();
})