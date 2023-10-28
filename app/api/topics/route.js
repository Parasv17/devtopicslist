
import connectDB from "@/libs/mongoDB";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description } = await request.json();
    try {
        await connectDB();
        await Topic.create({ title, description });
        return NextResponse.json({
            status: 200,
            body: {
                message: "Topic created successfully",
            },
        });
    }
    catch (err) {
        return NextResponse.json({
            status: 500,
            body: {
                message: "Topic not created",
            }
        });
    }
}

export async function GET(request) {
    try {
        await connectDB();
        const topics = await Topic.find({});
        return NextResponse.json({
            status: 200,
            body: topics,
        });
    }
    catch (err) {
        return NextResponse.json({
            status: 404,
            body: {
                message: "Not able to fetch topics",
            }
        });
    }
}

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectDB();
        await Topic.findByIdAndDelete(id);
        console.log(id);

        return NextResponse.json({
            status: 200,
            body: {
                message: `${id} Topic deleted successfully`,
            },
        });
    }
    catch (err) {
        return NextResponse.json({
            status: 500,
            body: {
                message: "Topic not deleted",
            }
        });
    }
}

// export async function  PUT(request){
//     const id = request.nextUrl.searchParams.get("id");
//     await connectDB();
//     const {newTitle,newDescription} = await request.json();

//     await Topic.findByIdAndUpdate(id, {title:newTitle,description:newDescription})

//     console.log("new title and description\n");
//     console.log(newTitle, newDescription);
//     return NextResponse.json({
//         status: 200,
//         body: {
//             message: `${id} Topic accessed successfully`,
//         },
//     });


// }













