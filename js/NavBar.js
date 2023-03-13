import Button from "./UI/Button.js"
import {aBackButon, aNewButton} from './UI/fontAwesome.js'

export default function NavBar({$target}) {
    this.$navBar = document.createElement('nav')
    this.$navBar.classList.add('nav-bar')
    this.$backButton = new Button({$target:this.$navBar,url:'javascript:window.history.back()', insertClassList:['back-button'],icon:aBackButon})
    this.title = document.createElement('h1')
    this.$navBar.append(this.title)
    this.$newPostButton = new Button({$target:this.$navBar,url:'#new', insertClassList:['new-button'],icon:aNewButton})
    

    $target.append(this.$navBar)

    this.render = ()=>{

        this.title.innerText = "NumbleHappyNewYear"
    }
    this.render()
}