---
extend: '@vue/cli-service/generator/template/src/main.js'
replace: !!js/regexp /import App from '\.\/App\.vue'/
---
import App from './App'