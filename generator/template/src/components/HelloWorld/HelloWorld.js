import template from './HelloWorld.html?style=./HelloWorld.css'

export default template({
  name: 'HelloWorld',
  props: {
    msg: String
  }
})
