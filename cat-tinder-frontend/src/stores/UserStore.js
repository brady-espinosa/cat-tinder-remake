import {EventEmitter} from 'events'
import Dispatcher from '../Dispatcher'

class UserStore extends EventEmitter{
  constructor(){
    super()
    this.users = [
    ]
    this.newUser = {}
    this.message = ""
  }

  getUser(){
    return this.users
  }

  getNewUser(){
    return this.newUser
  }

  updateNewUser(attributes){
    this.newUser = attributes
    this.users.push(attributes)
    this.updateMessage('User has been added')
    this.emit('change')
  }

  updateUser(attributes){
    this.users = attributes
    this.updateMessage('Users are loaded')
    this.emit('change')
  }

  getMessage(){
    return this.message
  }

  updateMessage(newMessage){
    this.message = newMessage
    this.emit('message')
  }

  handleActions(action){
    switch(action.type){
      case("CREATE_USER"):{
        this.updateNewCat(action.cat)
        break
      }
      case("UPDATE_USERS"):{
        this.updateCats(action.cats)
        break
      }
      default:{}
    }
  }
}

const ustore = new UserStore()
Dispatcher.register(store.handleActions.bind(ustore))
window.ustore = ustore
export default ustore
