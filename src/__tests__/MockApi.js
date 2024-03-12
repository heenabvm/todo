import { render, screen } from "@testing-library/react";
import MockApi from "../components/class_component/MockApi";

// test("mock test", async() => {
//         render(<MockApi />)   
//         const el = await screen.findAllByRole('listitem');
//         console.log(el,"...el");
//         expect(el).toHaveLength(3);
//     })

    test("test", () => {
        render(<MockApi />)   
        const el = screen.getByText('UserData');
        expect(el).toBeInTheDocument();
    })