export const postsQuery = (timelineIds:any) =>{
    timelineIds.forEach(async (id: any) => {
                
        const friendPost = await BaseDatabase.connection(this.tableName)
        .select('*')
        .join('labook_posts', 'labook_users.id', '=', 'labook_posts.author_id')
        .where({author_id:id})

       if(friendPost[0]){
        console.log(friendPost[0])
        posts.push(friendPost[0])
       }
    });
}