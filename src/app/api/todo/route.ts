//import {db} from '@vercel/postgres'
import {NextRequest, NextResponse} from 'next/server'
import {todoTable,Todo,NewTodo,db} from '@/lib/drizzle'

export async function GET(request: NextRequest){
    //const client = await db.connect();
    try{
        //await client.sql `insert into Todos(Task) values ('Task2')`
        //const res = await client.sql `select * from Todos`
        
        const res = await db.select().from(todoTable)
        //console.log(res)
        return NextResponse.json({data: res})
    }catch(err){
        console.log((err as {message:string}).message)
        return new NextResponse((err as {message:string}).message)
    }
}

export async function POST(request: NextRequest){
    const req = await request.json();  
    //const client = await db.connect();

    try {
        if (req.task){
            // const res = await client.sql `insert into Todos(Task) values (${req.task})`
            // console.log(res)
            const res = await db.insert(todoTable).values({
                task:req.task
            }).returning();
            return NextResponse.json({message: `${req.task} added Successfully`})
        }else{
            throw new Error("Task Field is Required")
        }
    } catch (error) {
        return NextResponse.json({message:(error as {message:string}).message})
    }
}

