
export class Blog {
    constructor (data){
        this.body = data.body
        this.creator = data.creator
        this.creatorId = data.creatorId
        this.id = data.id
        this.imgUrl = data.imgUrl
        this.title = data.title
        this.createdAt = data.createdAt
    }
}