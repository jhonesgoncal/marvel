export class Comic{
  _id: string
  title: string
  thumbnail: {
    path: string
    extension: string
  }
  description: string
  characters : object
  stories: object
  events: object
}