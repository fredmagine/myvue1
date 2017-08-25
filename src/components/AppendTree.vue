<template>
  <div class="myList">
    <h1>{{ msg }}</h1>
    <h2>Show my list</h2>
    <!-- <a href="/login">去登录</a> -->
    <div class="btn-area">

    <button v-on:click="showAjaxList()">查询</button>
    <button v-on:click="showAjaxList()">新增</button>
    <button v-on:click="showAjaxList()">修改</button>
    </div>
    <table class="myList">
        <tr>
            <th><input type="checkbox" /></th>
            <th>序号</th>
            <th>姓名</th>
             <th>密码</th>
        </tr>
        <tr v-for="item in myList">
            <td><input type="checkbox" /> </td>
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.password}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'appendTree',
  data () {
    return {
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
.myList {
  margin: 0 auto;
}
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
