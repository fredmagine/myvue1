<template>
  <div class="login">
    <h1>{{ msg }}</h1>
    <h2>欢迎登录</h2>
    <!-- <button v-on:click="showAjaxList()">查询</button> -->
    <form method="get" action="http://127.0.0.1:8060/mock/login.json">
        <div>
              <label>用户名：</label>
        <input type="text" name="username"/> <br>
        <label>密码：</label>
        <input type="password" name="password"/>
        </div>
        <div>
            <button type="submit" name="submit" >登录</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      myList: [{id: 1, name: 'admin'}, {id: 2, name: 'hello'}],
      msg: 'Welcome to My vue.logon'
    }
  },
  methods: {
      showAjaxList: function() {
          let _self = this
          this.get('http://127.0.0.1:8060/mock/user.json', null, function(data) {
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
