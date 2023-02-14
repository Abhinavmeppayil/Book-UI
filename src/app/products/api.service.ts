import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  searchkey = new BehaviorSubject('')
  //behaviorsubject to share stream of data


  currentuser= ""
  currentemail=""


  cartarray:any =[]
  cartlist= new BehaviorSubject([])

  constructor(private http:HttpClient) { }

getBooks(){
  return this.http.get('http://localhost:3000/all-books')

}


getMbooks(){
  return this.http.get('http://localhost:3000/m-books')
}

getCombos(){
  return this.http.get('http://localhost:3000/combos')
}
getView(id:any){
  
  const data={
    
    id
  }

  

  

  return this.http.post('http://localhost:3000/getview',data)
  
}


getView1(id:any){
  
  const data={
    
    id
  }

  

  

  return this.http.post('http://localhost:3000/getview1',data)
  
}

register(uname:any, email:any, pswd:any){
  const data ={
    uname,
    email,
    pswd
  }
  return this.http.post('http://localhost:3000/register',data)

}

login(email:any, pswd:any){
  const data ={
    email,
    pswd
  }
  return this.http.post('http://localhost:3000/log',data)
}


addtowishlist(books:any){
  const data = {
    id:books.id,
    author:books.author,
    image:books.image,
    pages:books.pages,
    title:books.title,
    price:books.price

  }
  return this.http.post('http://localhost:3000/addtowishlist',data)

}
getwishlist(){
  return this.http.get('http://localhost:3000/getwishlist')
}

  deletewish(title:any){
    return this.http.delete('http://localhost:3000/deletewish/'+title)
  }


//addtocart 


addtocart(books:any){
  this.cartarray.push(books)
  this.cartlist.next(this.cartarray)
  console.log(this.cartlist);
  
}
buybook(id:any,bookname:any, image:any,email:any,buyername:any,pincode:any,phone:any,address:any,username:any){
 const data={
  id:id,
  bookname:bookname,
  image:image, 
  email:email,
  buyername:buyername,
  pincode:pincode,
  phone:phone,
  address:address,
  username:username

  }
  return this.http.post('http://localhost:3000/buybook',data)

}

getorder(){
  return this.http.get("http://localhost:3000/getorder")
}

}
