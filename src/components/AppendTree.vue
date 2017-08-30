<template>
<div id="appendTree">
<p>(You can double click on an item to turn it into a folder.)</p>
<ul id="demo2">
    <item 
        class="item"
        :model="treeData">
    </item>
</ul>
</div>
</template>

<script>
import Vue from 'vue'

// Vue.component('item',) 
// define the item component
Vue.component('item', {
  template: `<li>
    <div
        :class="{bold: isFolder}"
        @click="toggle"
        @dblclick="changeType">
        {{model.name}}
        <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
        <item   
            class="item"
            v-for="model in model.children" 
            :model="model">
        </item>
        <li class="add" @click="addChild">+</li>
    </ul>
    </li>`,
  props: {
    model: Object
  },
  data: function () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.children &&
        this.model.children.length
    }
  },
  methods: {
    toggle: function () {
    //   console.log('s click')
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    changeType: function () {
    //   console.log('double click')
    debugger
      if (!this.isFolder) {
        // console.log('double click 2')
        debugger
        Vue.set(this.model, 'children', [])
        this.addChild()
        this.open = true
      }
    //   console.log('double click 3')
    },
    addChild: function () {
      this.model.children.push({
        name: 'new stuff'
      })
    }
  }
})

// demo data
var data = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }
      ]
    }
  ]
}

export default {
  name: 'appendTree',
  data () {
    return {
      treeData: data,
      myList: [{id: 1, name: 'admin',password: '123'}, {id: 2, name: 'hello',password:'234'}],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
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
body {
  font-family: Menlo, Consolas, monospace;
  color: #444;
}
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
