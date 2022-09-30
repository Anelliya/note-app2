export default interface INote {
  id: string,
  name: string,
  created: string,
  category: string,
  content: string,
  dates: string | null,
  status: string
}