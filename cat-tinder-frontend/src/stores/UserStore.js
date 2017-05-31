import {EventEmitter} from 'events'
import Dispatcher from '../Dispatcher'

class UserStore extends EventEmitter{
  constructor(){
    super()
    this.users = []
    this.newUser = null
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
    this.updateUserMessage('User has been added')
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

  updateUserMessage(newMessage){
    this.message = newMessage
    this.emit('message')
  }

  handleActions(action){
    switch(action.type){
      case("CREATE_USER"):{
        this.updateNewUser(action.user)
        break
      }
      case("UPDATE_USERS"):{
        this.updateUsers(action.users)
        break
      }
      default:{}
    }
  }
}

const ustore = new UserStore()
Dispatcher.register(ustore.handleActions.bind(ustore))
window.ustore = ustore
export default ustore
