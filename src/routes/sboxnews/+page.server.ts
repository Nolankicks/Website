import type { NewsPost } from '$lib/types/NewsPosts';
import type { PageServerLoad } from './$types';
import path from 'path';

export const load: PageServerLoad = async ({ fetch }) => {
    const allPostFiles = fetch( "https://services.facepunch.com/sbox/news/organization/nolankicks" );
    
    let unsortedPosts: NewsPost[] = []

    return { unsortedPosts };
};