import { Book } from "./app/shared/models/Book"
import { Tag } from "./app/shared/models/Tag"

export const sample_books: Book[] =[
       {
        id: '1',
        name:'The book thief',
        author:'Markus Zusak',
        period:14,
        price:24,
        favourite:false,
        imageUrl:'/assets/images/bookThief.jpg',
        type:'Fiction',
        },
        {
            id:'2',
            name:'The Diary of a Young Girl',
            author:'Anne Frank',
            period:14,
            price:40,
            favourite:false,
            
            imageUrl:'/assets/images/diary.jpg',
            type:'Biography',
          },
          {
            id:'3',
            name:'War and Peace',
            author:'Lev Tolstoi',
            period:24,
            price:30,
            favourite:true,
           
            imageUrl:'/assets/images/warPeace.jpeg',
            type:'Fiction',
          },
          {
            id:'4',
            name:'Les Miserables',
            author:'Victor Hugo',
            period:10,
            price:34,
            favourite:false,
            
            imageUrl:'/assets/images/lesm.jpg',
            type:'Fiction',
          },
          {
            id:'5',
            name:'The Prince and the Pauper',
            author:'Mark Twain',
            period:21,
            price:45,
            favourite:true,
            
            imageUrl:'/assets/images/twain.jpg',
            type:'Fiction',
          },
          {
            id:'6',
            name:'Harry Potter and the Philosopher Stone',
            author:'J. K. Rowling',
            period:20,
            price:44,
            favourite:true,
            
            imageUrl:'/assets/images/harry1.jpg',
            type:'Fiction',
          },
          {
            id:'7',
            name:'The Cold War',
            author:'John Lewis Gaddis',
            period:20,
            price:54,
            favourite:false,
            imageUrl:'/assets/images/history1.jpg',
            type:'History',
          },
          {
            id:'8',
            name:'Pride and Prejudice',
            author:'Jane Austen',
            period:20,
            price:35,
            favourite:false,
            imageUrl:'/assets/images/romance1.jpg',
            type:'Romance',
          },
          {
            id:'9',
            name:'La Dama de las Camelias',
            author:'Alexandre Dumas',
            period:15,
            price:30,
            favourite:false,
            imageUrl:'/assets/images/romance2.jpeg',
            type:'Romance',
          }
    
]
export const sample_tags: Tag[] = [
    { name: 'All', count: 9 },
    { name: 'Fiction', count: 5 },
    { name: 'Biography', count: 1 },
    { name: 'History', count: 1 },
    { name: 'Romance', count: 2 },
    
  ]

    
     