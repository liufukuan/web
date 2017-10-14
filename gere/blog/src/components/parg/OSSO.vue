<template>
 <div>
   <h4>全站搜索</h4>
   <el-input v-model="input" placeholder="请输入内容" id="inp"></el-input>
   <el-button type="primary" @click="seach" id="btn">确定</el-button>
   <el-row class="rowall">
    <el-col :span="24" style="border-radius: 4px;">
        <el-row class="classrowone">点击排行</el-row>
        <el-row class="classrow" :span="24" :key="index">
            <el-col :span="2" class="classrow1">1</el-col>
            <el-col :span="14" class="classrow2">哈哈</el-col>
            <el-col :span="6" class="classrow3">
                <i class="el-icon-star-on"></i>
                <span>0</span>
            </el-col>
        </el-row>
    </el-col>
   
</el-row>    
 </div>
</template>
<script>
export default {
        data(){
            return{
                datalist:[],
                Bus:""
            }
        },
        created(){
            Bus.$on("Data",(val)=>{
              this.datalist=val;
              console.log(this.datalist)
              
          })
        }
}
</script>
<style>
    h4{
        width:100%;
        height:30px;
        background:#DC73FF;
        text-align:center;
        line-height:30px;
        color:#fff;
        border-radius: 10px;
    }
    #inp{
        margin: 10px 0;
        width:70%;
    }
    #btn{
        margin-left: 5px;
    }
</style>
