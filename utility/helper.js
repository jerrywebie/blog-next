const baseURL = "http://localhost:3000/api/posts"; 

// endpoint: http://localhost:3000/api/posts
export const getPost = async () => {
    const res = await fetch(`${baseURL}`)
    const posts = await res.json()
    return posts;
}

// endpoint: http://localhost:3000/api/posts/1
export const getPostById = async (id) => {
    const res = await fetch(`${baseURL}`)
    const posts = await res.json()
    
    if(id) {
        return posts.find(value => value.id === id)
    }

    return post;
}