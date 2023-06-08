import {db} from '@vercel/postgres'
import {NextRequest, NextResponse} from 'next/server'

export async function GET(request: NextRequest){
    const client = await db.connect();
    try{


    }catch(err){
        console.log(err)
        return new NextResponse("Something went wrong")
    }
    return NextResponse.json({message: "Your called Get API"})
}