import { NextResponse, NextRequest } from "next/server";
import { dbcon } from "@/app/db/dbcon";
import Todo from "@/app/db/todomodel";



export async function GET() {

    await dbcon();
    try {

        const todos = await Todo.find();
        console.log("data fetched successfully");
        return NextResponse.json(todos);
    } catch (error) {
        return NextResponse.json({ error: "Error getting all todo" }, { status: 500 });
    }


}
export async function POST(request: NextRequest) {
    await dbcon();
    try {
        const { title, description } = await request.json();

        const todo = new Todo({
            title,
            description
        })
        await todo.save();
        return NextResponse.json({ message: "Todo created successfully", todo });

    } catch (error) {

        return NextResponse.json({ message: "Something went wrong todo not created" });
    }
}