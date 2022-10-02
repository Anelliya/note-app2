


export default interface INote {
  id: string,
  name: string,
  created: string,
  category: string,
  content: string,
  dates:  RegExpMatchArray |string|  null,
  status: string
}