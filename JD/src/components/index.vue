<template>
     <div id="app">
    <section>
        <header>
            <div id="head">
                <span>骚一骚</span>
                <span><input type="text" name="" placeholder="京东生鲜超级品类日"></span>
                <span><img src="" alt="">登录</span>
            </div>
            <mt-swipe :auto="4000">
                <mt-swipe-item id="ter" v-for="(val,index) in arr">
                    <img src="../../static/banner/swiper/1/02.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
        </header>
        
             <div id="her">
               <img src="../static/banner/newpeople.jpg" alt="">
               <span>专业GH、60年</span>
            </div>
            <div id="gw">
                  <mt-swipe :auto="4000">
                      <mt-swipe-item id="gw-mt">
                        <div>
                              <p>
                             <span><img src="../static/nav/01.png" alt=""></span>
                             <span>京东超市</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/02.png" alt=""></span>
                             <span>全球购</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/03.png" alt=""></span>
                             <span>服装城</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/04.png" alt=""></span>
                             <span>京东生鲜</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/05.png" alt=""></span>
                             <span>京东到家</span> 
                          </p>
                            <p>
                             <span><img src="../static/nav/06.png" alt=""></span>
                             <span>京东超市</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/07.png" alt=""></span>
                             <span>全球购</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/08.png" alt=""></span>
                             <span>服装城</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/09.png" alt=""></span>
                             <span>京东生鲜</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/10.png" alt=""></span>
                             <span>京东到家</span> 
                          </p>

                        </div>
                        
                      </mt-swipe-item>
                      <mt-swipe-item id="gw-mt">
                        <div>
                              <p>
                             <span><img src="../static/nav/01.png" alt=""></span>
                             <span>京东超市</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/02.png" alt=""></span>
                             <span>全球购</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/03.png" alt=""></span>
                             <span>服装城</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/04.png" alt=""></span>
                             <span>京东生鲜</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/05.png" alt=""></span>
                             <span>京东到家</span> 
                          </p>
                            <p>
                             <span><img src="../static/nav/06.png" alt=""></span>
                             <span>京东超市</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/07.png" alt=""></span>
                             <span>全球购</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/08.png" alt=""></span>
                             <span>服装城</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/09.png" alt=""></span>
                             <span>京东生鲜</span> 
                          </p>
                          <p>
                             <span><img src="../static/nav/10.png" alt=""></span>
                             <span>京东到家</span> 
                          </p>
                        </div>
                      </mt-swipe-item>
                  </mt-swipe>
            </div>
            <div class="jingdong">
                     <span>
                      <img src="../static/icon/jd_news.png" alt="">
                     </span>
                     <span>
                      <mt-swipe :auto="4000" :show-indicators="false">         
                            <mt-swipe-item id="ter">吃多了</mt-swipe-item>
                            <mt-swipe-item id="ter">喝多了</mt-swipe-item>
                            <mt-swipe-item id="ter">没吃了</mt-swipe-item>
                      </mt-swipe>  
                     </span>
                     <span> | 更多</span>
                </div>
             <div id="mock">
              <h3><img src="../static/icon/57fdff2eNb7cd186f.png" alt="">14点唱 <span>01</span>:<span>23</span>:<span>26</span>  
                <b>京选尖货轮番秒></b>
              </h3>
              <div id="miao">
                <div>
                       <dl>
                     <dt>
                         <img src="../static/product/01 (1).jpg" alt="">
                     </dt>
                    <dd>
                        <span>¥1</span>
                        <span>¥81.9</span>
                    </dd>
                 </dl>
                <dl>
                     <dt>
                         <img src="../static/product/01 (2).jpg" alt="">
                     </dt>
                    <dd>
                        <span>¥1</span>
                        <span>¥81.9</span>
                    </dd>
                 </dl>
                <dl>
                     <dt>
                         <img src="../static/product/01 (3).jpg" alt="">
                     </dt>
                    <dd>
                        <span>¥1</span>
                        <span>¥81.9</span>
                    </dd>
                 </dl>
                <dl>
                     <dt>
                         <img src="../static/product/01 (5).jpg" alt="">
                     </dt>
                    <dd>
                        <span>¥1</span>
                        <span>¥81.9</span>
                    </dd>
                 </dl>
                  <dl>
                     <dt>
                         <img src="../static/product/01 (6).jpg" alt="">
                     </dt>
                    <dd>
                        <span>¥1</span>
                        <span>¥81.9</span>
                    </dd>
                 </dl>
                  <dl>
                     <dt>
                         <img src="../static/product/01 (7).jpg" alt="">
                     </dt>
                    <dd>
                        <span>¥1</span>
                        <span>¥81.9</span>
                    </dd>
                 </dl>
                  <dl>
                     <dt>
                         <img src="../static/product/01 (8).jpg" alt="">
                     </dt>
                    <dd>
                        <span>¥1</span>
                        <span>¥81.9</span>
                    </dd>
                 </dl>
                </div>
                
              </div>
            </div> 
          <div class="jmco">
               <p>
                   <span><img src="../static/icon/zhuan.jpg" alt=""></span>
                    <span>
                        <mt-swipe :auto="4000" :show-indicators="false">
                            <mt-swipe-item>专属你的,iPone</mt-swipe-item>
                            <mt-swipe-item>专属你的,oppo</mt-swipe-item>
                            <mt-swipe-item>专属你的,SNMSUNG</mt-swipe-item>
                        </mt-swipe>
                    </span>
                   <span class="jian">></span>
               </p>
                <div class="commodity">
                      <div class="lefter">
                          <h3><img src="../static/hr/1 (1).jpg" alt=""></h3>
                          <p>发现品质生活</p>
                          <div>
                              <img src="../static/product/01 (129).jpg" alt="">
                              <img src="../static/product/01 (137).jpg" alt="">
                          </div>
                      </div>
                      <div class="righter">
                          <h3><img src="../static/hr/1 (2).jpg" alt=""></h3>
                          <p>发现品质生活</p>
                          <div>
                              <img src="../static/product/01 (58).jpg" alt="">
                              <img src="../static/product/01 (43).jpg" alt="">
                          </div>
                      </div> 
                </div>
                <div class="commodity">
                      <div class="lefter">
                          <h3><img src="../static/hr/1 (3).jpg" alt=""></h3>
                          <p>发现品质生活</p>
                          <div>
                              <img src="../static/product/01 (12).jpg" alt="">
                              <img src="../static/product/01 (13).jpg" alt="">
                          </div>
                      </div>
                      <div class="righter">
                          <h3><img src="../static/hr/1 (4).jpg" alt=""></h3>
                          <p>发现品质生活</p>
                          <div>
                              <img src="../static/product/01 (43).jpg" alt="">
                              <img src="../static/product/01 (25).jpg" alt="">
                          </div>
                      </div> 
                </div>
                <div class="commodity">
                    <div class="lefter">
                        <h3><img src="../static/hr/1 (6).jpg" alt=""></h3>
                        <p>发现品质生活</p>
                        <div>
                            <img src="../static/product/01 (25).jpg" alt="">
                            <img src="../static/product/01 (26).jpg" alt="">
                        </div>
                    </div>
                    <div class="righter">
                        <h3><img src="../static/hr/1 (7).jpg" alt=""></h3>
                        <p>发现品质生活</p>
                        <div>
                            <img src="../static/product/01 (27).jpg" alt="">
                            <img src="../static/product/01 (28).jpg" alt="">
                        </div>
                </div> 
            </div>
            </div>
            <div class="guo">
                <img src="../static/product/3.jpg" alt="">
            </div>
            <div class="commodity">
                    <div class="lefter">
                        <h3><img src="../static/hr/1 (6).jpg" alt=""></h3>
                        <p>发现品质生活</p>
                        <div>
                            <img src="../static/product/01 (31).jpg" alt="">
                            <img src="../static/product/01 (30).jpg" alt="">
                        </div>
                    </div>
                    <div class="righter">
                        <h3><img src="../static/hr/1 (7).jpg" alt=""></h3>
                        <p>发现品质生活</p>
                        <div>
                            <img src="../static/product/01 (33).jpg" alt="">
                            <img src="../static/product/01 (9).jpg" alt="">
                        </div>
                </div> 
            </div>
            <div id="edar">
                     <img src="../static/product/4.jpg" alt="">
            </div>
            <div id="lb">
                  <mt-swipe :auto="4000">
                    <mt-swipe-item id="ter"><img src="../static/banner/swiper/2/01.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item id="ter"><img src="../static/banner/swiper/2/02.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item id="ter"><img src="../static/banner/swiper/1/01.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item id="ter"><img src="../static/banner/swiper/1/02.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item id="ter"><img src="../static/banner/swiper/3/01.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item id="ter"><img src="../static/banner/swiper/3/02.jpg" alt=""></mt-swipe-item>
                </mt-swipe>
            </div>
            <div id="sheng">
                 <div class="commodity">
                    <div class="lefter">
                        <h3><img src="../static/hr/1 (6).jpg" alt=""></h3>
                        <p>发现品质生活</p>
                        <div>
                            <img src="../static/product/01 (31).jpg" alt="">
                            <img src="../static/product/01 (30).jpg" alt="">
                        </div>
                    </div>
                    <div class="righter">
                        <h3><img src="../static/hr/1 (7).jpg" alt=""></h3>
                        <p>发现品质生活</p>
                        <div>
                            <img src="../static/product/01 (33).jpg" alt="">
                            <img src="../static/product/01 (9).jpg" alt="">
                        </div>
                </div> 
            </div>
            <div class="commodity">
                    <div class="lefter">
                        <h3><img src="../static/hr/1 (6).jpg" alt=""></h3>
                        <p>发现品质生活</p>
                        <div>
                            <img src="../static/product/01 (31).jpg" alt="">
                            <img src="../static/product/01 (30).jpg" alt="">
                        </div>
                    </div>
                    <div class="righter">
                        <h3><img src="../static/hr/1 (7).jpg" alt=""></h3>
                        <p>发现品质生活</p>
                        <div>
                            <img src="../static/product/01 (33).jpg" alt="">
                            <img src="../static/product/01 (9).jpg" alt="">
                        </div>
                </div> 
            </div>
            </div>
           <div id="edar">
                     <img src="../static/product/4.jpg" alt="">
            </div>
            <div id="lb">
                  <mt-swipe :auto="4000">
                    <mt-swipe-item id="ter"><img src="../static/banner/swiper/2/01.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item id="ter"><img src="../static/banner/swiper/2/02.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item id="ter"><img src="../static/banner/swiper/1/01.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item id="ter"><img src="../static/banner/swiper/1/02.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item id="ter"><img src="../static/banner/swiper/3/01.jpg" alt=""></mt-swipe-item>
                    <mt-swipe-item id="ter"><img src="../static/banner/swiper/3/02.jpg" alt=""></mt-swipe-item>
                </mt-swipe>
            </div>
            <div id="sheng">
                  <div class="commodity">
                    <div class="lefter">
                        <h3><img src="../static/hr/1 (6).jpg" alt=""></h3>
                        <p>发现品质生活</p>
                        <div>
                            <img src="../static/product/01 (31).jpg" alt="">
                            <img src="../static/product/01 (30).jpg" alt="">
                        </div>
                    </div>
                    <div class="righter">
                        <h3><img src="../static/hr/1 (7).jpg" alt=""></h3>
                        <p>发现品质生活</p>
                        <div>
                            <img src="../static/product/01 (33).jpg" alt="">
                            <img src="../static/product/01 (9).jpg" alt="">
                        </div>
                </div> 
            </div>
            </div>
          <div id="edar">
                     <img src="../static/product/4.jpg" alt="">
            </div>
            <div id="lb">
                   <mt-swipe :auto="4000">
                <mt-swipe-item id="ter" v-for="(val,index) in arr">
                    <img src="../../static/banner/swiper/1/02.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
            </div> 
        </section>
         <footer>
            <router-link :to="{path:'index'}" tag="span">
                <img src="../static/footer/a-recommend.png" alt="">
            </router-link>
            <router-link :to="{path:'fen'}" tag="span">
                <img src="../static/footer/n-catergry.png" alt="">
            </router-link>
            <router-link :to="{path:'fa'}" tag="span">
                <img src="../static/footer/n-find.png" alt="">
            </router-link>
            <router-link :to="{path:'gou'}" tag="span">
                <img src="../static/footer/n-cart.png" alt="">
            </router-link>
            <router-link :to="{path:'wo'}" tag="span">
                <img src="../static/footer/n-me.png" alt="">
            </router-link>
        </footer> 
     </div>

</template>
    
<style>
 * {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  font-size:0.14rem;
 }

    ul, li {
    list-style: none; }

    body {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -o-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }
    html{
    font-size:625%;
    }

    img, div, body, html, ul, li, a {
    -webkit-touch-callout: none; }

    input {
    -webkit-appearance: none; }
    body,html{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    section{
            position:relative;
        }  
        #app{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction:column;
        }
        #head{
        width: 100%;
        height: 0.25rem;
        display: flex;
        justify-content:space-between;
        align-items:center;
        position:absolute;
        left: 0px;
        top: 0px;
        z-index: 999;
        color: #fff;
        }
        #head span{
            padding: 0 0.1rem;
            font-size: 0.14rem;
            font-weight: 600;
        }
        #head span input{
            height: 0.2rem;
            border:none;
            border-radius: 10px;
            padding-left: 0.1rem;
            font-size: 0.12rem;
            outline: none;
        }
        #app header{
            width: 100%;
            height: 1.3rem;
        }
        #ter img{ 
        width: 100%;
        height: 100%; 
        }
        section{
            width: 100%;
            flex-grow: 1;
            overflow-y: scroll;
            background:#F5F5F5;
        }
        #her{
            width: 100%;
            height: 1rem;
            background: red;
            position: relative;
        }     
        #her img{
            width: 100%;
            height: 100%;
            
        }  
        #her span{
            position: absolute;
            left: 2%;
            top: 45%;
            font-weight: 600;
            font-size: 0.1rem;
            color:#000;
            transform: rotate(-35deg)
        } 
        #gw{
            width:100%;
            height: 1.3rem;
        }    
        #gw-mt div{
        width:100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        }
        #gw-mt p{
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 0.05rem;
        }
        #gw-mt p span{
            font-size: 0.12rem;
        }
        #gw-mt img{
            width: 0.3rem;
            height: 0.3rem;
        }   
        section h4{
            width:80%;
            height:0.3rem;
            background:#fff;
        
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            border-radius: 10px;
            font-size: 0.05rem;
        }
    
    .jingdong{
            width:80%;
            height:0.3rem;
            background:#fff; 
            line-height: 0.3rem;
            display: flex;
            margin: 0 auto;
            border-radius: 15px;
    }
    .jingdong span{
        flex:1;
        text-align: center;
    }
    .jingdong span:first-child{
        padding: 4px 5px;
    }
    .jingdong span:first-child img{
        width: 90%;
    }
    .jingdong span:last-child{
        flex:0.5;
    }
        #mock{
            width: 100%;
            background: #fff;
            margin-top: 0.1rem;
        }  
    #mock h3{
        width: 100%;
        height: 0.3rem;
        display: flex;
        align-items: center;
        font-weight: 600;
    }   
    #mock h3 img{
        width: 0.6rem;
        height: 0.3rem;
    }  
    #mock h3 span{
        background: #000;
        color:#fff;
        border-radius: 5px;
        margin-left: 0.05rem;
        font-size: 0.12rem;
        margin-right: 0.05rem;
    }     
    #mock h3 b{
        display: inline-block;
        float: right;
    }  
    #miao{
        width: 100%;
        overflow-x: scroll;
    }
    #miao div{
    display: flex;
    }
    #miao div dl{
        width: 25%;
        display: inline-block;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #miao div dt{
        display: flex;
        align-items: center;
    }
    #miao div dd{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #miao div img{
        height: 0.6rem;
        margin-left: 0.1rem;
    }
    #miao div dd span:first-child{
        color:red;
        font-weight: 600;
        font-size: 0.14rem;
    }
    .jmco{
        width: 100%;
        background: #fff;
        margin-top: 0.1rem;
        padding-top: 0.1rem;
    }
    .jmco p{
        width: 80%;
        height: 0.3rem;
        line-height: 0.3rem;
        margin-left: 10%;
        display: flex;
    }
    .jmco p img{
        width: 40%;
    }
    .jmco span{
        flex:1;
        text-align: center;
    }
    .jmco span:first-child{
        padding: 4px 5px;
    }
    .jmco span:first-child img{
        width: 100%;
    }
    .jmco span:last-child{
        flex:0.1;
        float: right;
    }
    .jmco .jian{
        margin-left: 0.1rem;
    }
    .commodity{
        width: 100%;
        display: flex;
        
    }
    .commodity .lefter{
        
    }
    .commodity h3 img{
        width: 45%;
        padding-left: 0.1rem;
        margin-top: 0.1rem;
    }
    .commodity p{
        margin-top: 0;
        font-weight: 600;
    }
    .commodity .lefter div{
        display: flex;

    }
    .commodity .lefter div img{
        width: 45%;
        height: 0.8rem;
    }
    .commodity .righter div{
        display: flex;
        border-left: 1px solid #ccc;

    }
    .commodity .righter div img{
        width: 50%;
        height: 0.8rem;
    }
    .guo{
        width: 100%;
        height: 3.5rem;
        margin-top: 0.1rem;
    }
    .guo img{
        width: 100%;
        height: 100%;
    }
    footer{
        width: 100%;
        height: 0.5rem;
        display: flex;
        position: absolute;
        left: 0;
        bottom: 0;
        background: #fff;
    }
    footer img{
        width: 100%;
        height: 0.5rem;
    }
    #edar{
        width: 100%;
        height: 0.3rem;
    }
    #edar img{
        width: 100%;
        height: 0.3rem;
    }
    #lb{
        width: 100%;
        height: 1rem;
    }
</style>
<script>
    var data = require('../../static/data/data.js');
    export default{
        data(){
            return{
                arr:data.banner
            }
        },
        mounted(){
            console.log(this.arr)
        }
       
            
    }
</script>

