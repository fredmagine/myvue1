<template>
 <div id="markdown">
  <textarea :value="input"  @input="update2" ></textarea>
  <div v-html="compiledMarkdown"></div>
</div>
</template>

<script>
import marked from 'marked'
import _ from 'lodash'

export default {
  name: 'markdown',
  data () {
    return {
      input: '# hello1'
    }
  },
  computed: {
    compiledMarkdown: function () {
      return marked(this.input, { sanitize: true })
    }
  }, 
  methods: {
      update2: _.debounce(function (e) {
          console.log('11111')
         this.input = e.target.value
      }, 300),
      update1: _.debounce(function (e) {
          console.log('11111')
         this.input = e.target.value
      }, 300),
      showAjaxList: function() {
          let _self = this
          this.get('mock/user.json', null, function(data) {
            _self.myList = data.users
          })
        //   alert('Ajax requesting...')
      },
      update: function() {
          let _self = this
        
      },
      add: function() {
          let _self = this
      },
      delete: function() {
          let _self = this
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body, #markdown {
  margin: 0;
  height: 100%;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #333;
}

textarea, #markdown div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}

code {
  color: #f66;
}
</style>
