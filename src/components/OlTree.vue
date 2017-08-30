<<template>
  <div id="olTree">
      <p>我的第一个递归序列树</p>
      <p>{{hello}}</p>
      <ol>
        <olItem :model="model" >
        </olItem>
      </ol>
  </div>
</template>

<script>
import Vue from "vue"

Vue.component('olItem', {
    template: `<li>
        <div @dblclick="changeType"> 
            {{model.name}}
            <span v-if="isFolder" @click="toggle">[{{open ? '-' : '+'}}]</span>
        </div>
        <ol v-show="open" v-if="isFolder" >
            <olItem v-for="model2 in model.children" :model="model2"   >

            </olItem>
            <li @click="addChild">+</li>
        </ol>
        </li>
    `,
    props: {    //  继承而来的属性
        model: Object
    },
    data: function() {   // 状态， 基础属性
        return {
            open: false
        }
    },
    computed:  {    // 需要实时计算的展示控制
        isFolder: function() {
            return this.model.children && this.model.children.length
        }
    },
    methods: {
        toggle: function() {
            this.open = !this.open
        },
        changeType: function() {
            debugger
            if(!this.isFolder) {
                Vue.set(this.model, 'children', [{name: 'new li'}])
            }
            this.open = true
        },
        addChild: function() {
            this.model.children.push({name: 'new li'})
        }
    }
}

)
export default {
    name: 'olTree',
    data() {
        return {
            hello: 'my first recur component - ol tree',
            model: {
                name: 'OL2',
                children: [
                    {
                        name: '1'
                    },
                    {
                        name: '2'
                    },
                    {
                        name: '3',
                        children: [
                            {
                                name: '4'
                            },
                            {
                                name: '5'
                            }
                        ]
                    }
                ]
            }
        }
    },
    methods: {

    }
}

</script>

<style scoped>

</style>