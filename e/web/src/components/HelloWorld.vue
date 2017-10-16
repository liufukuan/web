<template>
  <div>
       <div>
         <el-menu theme="dark"  class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">个人博客</el-menu-item>
          <el-submenu  v-for="(i,index) in data" :index="i.onedata.cnname" :key="index">
            <template slot="title">{{i.onedata.cnname}}</template>
            <el-menu-item v-for="(j,ind) in i.twodata" :index="j.cnname" :key="ind">{{j.cnname}}</el-menu-item>
          </el-submenu>
        </el-menu>
       </div>
      <el-breadcrumb separator="/" id="mian">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{one}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{tow}}</el-breadcrumb-item>
      </el-breadcrumb>
      <div id="box">
          <div id="lefter">
    <el-table
      :data="tableData"
      style="width: 100%;">
      <el-table-column
        prop="article_name"
        label="标题"
        >
      </el-table-column>
      <el-table-column
        prop="cnname_one"
        label="分类"
        >
      </el-table-column>
      <el-table-column
        prop="editer"
        label="作者">
      </el-table-column>
      <el-table-column
        prop="time"
        label="发布时间">
      </el-table-column>
    </el-table>
  
          </div>
           <div id="righter">
              <ter></ter>
           </div> 
       </div>
       
  </div>
</template>

<script>
  import  OSSO from './parg/OSSO'
export default {
  name: 'HelloWorld',
  data () {
    return {
        activeIndex: '1',
        activeIndex2: '1',
        data:[],
        one:"",
        tow:""
         
    }
  },
  components:{
       ter:OSSO
  },
  created(){
      this.axios.get("/api/front_article/getNav").then((data)=>{
                 this.data=data.data.data
      })
       
  },
   methods: {
      handleSelect(key, keyPath) {
       console.log(key,keyPath)
        this.one=keyPath[0],
        this.tow=keyPath[1]

      }
    }
}
</script>
<style>
  *{
     margin:0;
     padding:0;
  }
  html,body{
    width:100%;
    height: 100%;
  }
.el-menu-demo{
  width: 80%;
  margin:0 10%;
}
#box{
   width: 80%;
   margin:0 10%;
}
#mian{
    width: 80%;
   margin:20px 10%;
   font-weight: 600;
}
#lefter{
  width: 60%;
  height: 100%;
  float: left;
}
#righter{
  float: left;
  width:38%;
  margin-left: 10px;
  
}
</style>

