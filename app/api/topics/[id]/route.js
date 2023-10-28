import connectDB from "@/libs/mongoDB";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";



export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle, newDescription } = await request.json();
    await connectDB();
    try {
        await Topic.findByIdAndUpdate(id, { title: newTitle, description: newDescription })

        console.log("new title and description\n");
        console.log(newTitle, newDescription);
        return NextResponse.json({
            status: 200,
            body: {
                message: `${id} Topic accessed successfully`,
            },
        });
    }
    catch (err) {
        return NextResponse.json({
            status: 500,
            body: {
                message: "Topic not updated",
            }
        });
    }
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectDB();
    const topics = await Topic.findOne({ _id: id });
    console.log(topics);
    return NextResponse.json({
        status: 200,
        body: topics
    });
}
