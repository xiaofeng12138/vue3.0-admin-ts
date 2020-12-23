<template>
    <div>
        <a-button type="primary" block @click="getCode" :loading="button_loading" :disabled="button_disabled"> {{button_text}} </a-button>
    </div>
</template>

<script lang='ts'>
import {reactive, onMounted,toRefs,ref,inject,defineComponent } from 'vue'
import { message } from 'ant-design-vue';
import { number } from 'vue-types';
//定义接口
interface CodeButton {
    button_text:string,
    button_loading:boolean,
    button_disabled:boolean,
    sec:number,
    timer:any
}

interface Test{
    name:string,
    age?:number,
    [other:string]:any
}
export default defineComponent({
    props:{
       userName:{
           type:String,
           default:""
       }
    },
setup(props) {
   const codeConfig  = reactive<CodeButton>({
        button_text:"获取验证码",
        button_loading:false,
        button_disabled:false,
        sec:5,
        timer:null
   })
   const data = toRefs(codeConfig)
  
   onMounted(() => {})


    //定义方法
    const getCode = ()=>{
       if(!props.userName){
           message.error('用户名不能为空');
           return false
       }
       if(codeConfig.timer){  window.clearInterval(codeConfig.timer)}

         codeConfig.timer = setInterval(() => {
            const s =  codeConfig.sec-- ;
            codeConfig.button_text = `${s}秒`
            codeConfig.button_loading = true
            codeConfig.button_disabled = true
            if( s <= 0){
              window.clearInterval(codeConfig.timer);
              codeConfig.button_text = '重新获取'
              codeConfig.button_loading = false
              codeConfig.button_disabled = false
              codeConfig.sec = 5
            }
        }, 1000);
    }

    const handerTest = (params:Test):any=>{
        console.log(params)
    }

    handerTest({
        name:'xf',
        age:18
    })

    //倒计时函数

    const countDown = ()=>{
         
    }


    return {
        ...data,
        getCode,
        countDown
    }
    }
})
</script>
<style lang='scss' scoped>

</style>