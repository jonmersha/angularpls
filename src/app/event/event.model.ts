export interface IEvent{
    id:number
    name:string
    date:string
    price:number
    imageUrl:string
    time:string
    location?:{
        address:string
        city:string
        country:string
    }
    onlineurl:string
    settion:Isession[]

}
export interface Isession{
    id:number
    name:string
    presenter:string
    duration:number
    level:string
    abstract:string
    voters:string[]
}