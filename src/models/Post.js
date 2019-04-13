class Post {
  id;
  title;
  content;
  is_question;
  location;

  constructor (id, title, content, is_question, location) {
    this.id = id
    this.title = title
    this.content = content
    this.is_question = is_question
    this.location = location
  }
}

export default Post
