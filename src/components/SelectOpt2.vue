<template>
<div id="selectOpt2">
   <div>
    <p>Selected: {{ selected }}</p>
    <select2 :options="options" v-model="selected">
      <option disabled value="0">Select one</option>
    </select2>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import $ from 'jquery'
import sq from 'select2'


Vue.component('select2', {
    template: `
         <select>
    <slot></slot>
  </select>
    `,
    props: ['options', 'value'],
    mounted: function() {
        var vm = this
        // debugger
        $(this.$el)
            .select2({data: this.options})
            .val(this.value)
            .trigger('change')
            .on('change', function() {
                vm.$emit('input', this.value)
            })
    },
    watch: {
        value: function(value) {
            $(this.$el).val(value).trigger('change')
        },
        options: function(options) {
            $(this.$el).select2({data: options})
        }
    },
    destroyed: function() {
        $(this.$el).off().select2('destroy')
    }
})


export default {
  name: 'selectOpt2',
  data () {
      console.log('select2')
    return {
      selected: 2,
      options: [
          {id: 1, text: 'Hello'},
          {id: 2, text: 'World'}
      ],
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
<style>
html, body {
  font: 13px/18px sans-serif;
}
select {
  min-width: 300px;
}
</style>
