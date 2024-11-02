import { dbcon } from "@/app/db/dbcon";
import Todo from "@/app/db/todomodel";
import { NextResponse, NextRequest } from "next/server";

export async function PUT(request: NextRequest, { params }: any) {
    try {
        await dbcon();
        const newtodo = await request.json();
        const id = await params.id;
        console.log(id);
        const todo = await Todo.findByIdAndUpdate(id, newtodo, { new: true })
        return NextResponse.json({ message: "Todo updated successfully", todo });
    } catch (error) {
        return NextResponse.json({ message: "Something went wrong todo not updated" });
    }

}
export async function DELETE(request: NextRequest, { params }: any) {
    try {
        await dbcon();
        const id = await params.id;
        console.log(id);


        const todo = await Todo.findByIdAndDelete(id);

        if (!todo) {
            return NextResponse.json({ message: "Todo not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Todo deleted successfully", id });
    } catch (error) {
        console.error("Error deleting Todo:", error);
        return NextResponse.json({ message: "Something went wrong, todo not deleted" }, { status: 500 });
    }
}