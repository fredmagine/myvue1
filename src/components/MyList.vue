<template>
  <div class="myList">
    <h1>{{ msg }}</h1>
    <h2>Show my list</h2>
    <button v-on:click="showAjaxList()">查询</button>
    <table>
        <tr>
            <th>序号</th>
            <th>姓名</th>
             <th>密码</th>
        </tr>
        <tr v-for="item in myList">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.password}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'myList',
  data () {
    return {
      myList: [{id: 1, name: 'admin'}, {id: 2, name: 'hello'}],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
      showAjaxList: function() {
          let _self = this
          this.post('http://127.0.0.1:9091/user/listAll', null, function(data) {
            _self.myList = data
          })
        //   alert('Ajax requesting...')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
