
import connectDB from "@/libs/mongoDB";
import Topic from "@/models/topic";
import {NextResponse} from "next/server";

export async function POST(request) {
    const {title, description} = request.body;
    await connectDB();
    await Topic.create({title, description});
    return NextResponse.json({
        status: 200,
        body: {
            message: "Topic created successfully",
        },
    });
}

export async function GET(request){
    await connectDB();
    const topics = await Topic.find({});
    return NextResponse.json({
        status: 200,
        body: topics,
    });
}














