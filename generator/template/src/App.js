import template from './App.html?style=./App.css'
import HelloWorld from './components/HelloWorld/HelloWorld'

export default template({
  name: 'app',
  components: {
    HelloWorld
  }
})
