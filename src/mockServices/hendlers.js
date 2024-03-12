import {rest} from 'msw';

export const hendlers = [
    rest.get("https://jsonplaceholder.typicode.com/users", (req,res,ctx)=> {
        return res(
            ctx.status(200),
            ctx.json([
                {name: "abc"},
                {name: "xyz"},
                {name: "aaa"}
            ])
        )
    })
]