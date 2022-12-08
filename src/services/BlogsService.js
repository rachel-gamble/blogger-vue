import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"
import { Blog } from "../models/Blog.js"

class BlogsService {

    async getBlogs() {
        const res = await api.get('api/blogs')
        logger.log('[get blogs]', res.data)
        AppState.blogs = res.data.map(b => new Blog(b))
    }

}

export const blogsService = new BlogsService