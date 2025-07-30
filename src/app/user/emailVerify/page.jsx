import React from 'react';
import PlainLayout from '@/components/master/Plain-Layout';
import EmailVerifyForm from '@/components/user/EmailVerifyForm';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

const page = () => {
     const cookieStore=cookies()
        const token=cookieStore.get('token')
         if(typeof token!=='undefined'){
             redirect ('/')
         }
    return (
        <PlainLayout>
            <EmailVerifyForm/>
        </PlainLayout>
    );
};

export default page;