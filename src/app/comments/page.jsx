import React, { cache } from 'react';
import PlainLayout from '@/components/master/Plain-Layout';
import { cookies, headers } from 'next/headers';
import UserCommentsList from '@/components/comments/UserCommentsList';


async function getData(cookies) {
    let option={method:'GET',headers:{'Cookie':cookies},cache:'no-store'}
    let Comments=(await(await fetch(`${process.env.HOST}/api/comments/manage`,option)).json())['data'];
    return {Comments:Comments};
}

const page = async() => {
    const cookieStore=cookies()
    let data=await getData(cookieStore) 
    return (
        <div>
            <PlainLayout>
               <UserCommentsList data={data['Comments']}/>
            </PlainLayout>
        </div>
    );
};

export default page;