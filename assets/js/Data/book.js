class Book{
    constructor(title, author){
        this.title=title
        this.author=author
        this.read=false
    }

    markAsRead(){
        this.read=true;
    }

    isRead(){
        return this.read;
    }

    getTitle() {
        return this.title
    }

    getAuthor() {
        return this.author
    }
    
}