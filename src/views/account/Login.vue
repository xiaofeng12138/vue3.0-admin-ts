<template>
  <div class="account">
    <div class="form_wrap">
       <a-form
          ref="ruleForm"
          v-bind="layout"
        >
          <a-form-item >
            <label>用户名</label>
            <a-input type="text"  />
          </a-form-item>

           <a-form-item >
            <label>密码</label>
            <a-input type="password"  />
          </a-form-item>
          <a-form-item>
            <div id="captcha-dom" class="nc-container"></div>
            <!--No-Captcha渲染的位置，其中 class 中必须包含 nc-container-->
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit" block>
              登录
            </a-button>
          </a-form-item>
           <a-form-item>
            <div class="fs-12 text-center color-white" >
              <a href="" class="color-white">忘记密码</a> |
              <router-link to='/register'>注册</router-link>
            </div>
          </a-form-item>
          
        </a-form>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent,onMounted,reactive,ref,toRefs } from 'vue';
//toRefs  将响应式对象转换成普通的对象


export default defineComponent({
  name: 'Login',
   setup(props) {
     const nub = ref<number>(10)
      console.log(nub.value)
     const FormConfig = reactive<any>({
       layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
      }
     })
     const data = toRefs(FormConfig)
     console.log(data)

    onMounted(() => {})

     return {
         ...data
     }
  }
});
</script>

<style lang="scss">
  .account{
    width: 100vw;
    height: 100vh;
    background-color: #282828;
    .form_wrap{
         width: 330px;
         margin: auto;
         padding-top:300px; 
         color: #fff;
         label{
           font-size: 14px;
           color: #fff;
         }
    }
  }
</style>

