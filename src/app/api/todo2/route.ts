//import {db} from '@vercel/postgres'
import {NextRequest, NextResponse} from 'next/server'
import {todoTable,Todo,NewTodo} from '@/lib/drizzle'
import { db } from '@vercel/postgres';

export async function GET(request: NextRequest){
    const client = await db.connect();
    try{        
        const res = await client.sql `select * from Todos`
        
        
        //const res = await db.select().from(todoTable)
        const data = res.rows;
        console.log(res.rows)
        return NextResponse.json(data)
    }catch(err){
        console.log((err as {message:string}).message)
        return new NextResponse((err as {message:string}).message)
    }
}