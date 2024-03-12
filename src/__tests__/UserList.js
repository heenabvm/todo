import { render, screen } from "@testing-library/react";
import UserList from "../components/UserList";

beforeEach(() => {
    window.matchMedia = window.matchMedia || function () {
        return {
            matches: false,
            addListener: function () { },
            removeListener: function () { }
        };
    };
})

const mockData = [{
    _id: "6592575e5666b13a5e686a99",
    name: 'hina',
    email: 'hina@gmail.com',
    role: 'admin',
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1O…gzOX0"
}]


test("test user list page", async () => {
    const addAndFetch = jest.fn()   
    render(<UserList addAndFetch={addAndFetch} />);
    addAndFetch(mockData)
    const head = screen.getByText("User List");
    expect(head).toBeInTheDocument();
    expect(addAndFetch).toHaveBeenCalledWith(mockData);
});