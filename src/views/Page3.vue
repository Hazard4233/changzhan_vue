<template>
  <div class=" bg-r1g8b14 flex flex-col w-full h-screen" style="padding-top:0.521vw">
    <div class="page3_header w-full flex flex-col relative">
      <img class="absolute top-0 left-1/2 transform -translate-x-1/2" src="../assets/img/page3_header_bg.png" alt="" style="width:95.416666vw;">
      <div class="font-bold text-r93g192b191 absolute left-1/2 transform -translate-x-1/2" 
        style="font-size:2.34375vw;text-shadow:0px 0px 4px rgb(46 154 245);top:2.1354166vw;">数据大屏</div>
      <div class="absolute left-1/2 transform -translate-x-1/2 bg-r62g235b233 rounded" 
          style="height:0.260416vw;width:10.416666vw;top:5.88541666vw;box-shadow: rgba(0, 255, 196, 0.7) 0px 0px 6px 2px;"
          :class="header_line_opacity"></div>
      <div v-for="(item, index) in parallelogram_opacity_2" :key="index + '$'">
        <div class="parellegram parallelogram--1 bg-r62g235b233 absolute"
            :class="item"
            :style="{'top':3.6979166 - 0.885416 * index + 'vw', 'left': 37.992916 - 0.390625 * index + 'vw'}"></div>
      </div>
      <div v-for="(item, index) in parallelogram_opacity_1" :key="index">
        <div class="parellegram parallelogram--2 bg-r62g235b233 absolute"
            :class="item"
            :style="{'top': 3.80208 - 0.885416 * index + 'vw', 'right': 38.1770833333 - 0.390625 * index + 'vw'}"></div>
      </div>
    </div>
    <div class="w-full flex flex-row mb-auto" style="height:88.092592vh;padding-left:1.5vw;padding-right:1.5vw;padding-top:20px;">
      <div class="h-full flex flex-col" style="">
        <div class="page3_part1">
          <div class="w-full h-full relative">
            <div class="w-full h-full absolute top-0 left-0 page3_part1_bg text-white"></div>
            <div class="w-full flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div id="map_chart"></div>
            </div>
            <transition name="fade">
              <div v-if="enable_map_dlg"
                  class="map_dlg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 bg-r4g17b23 p-5"
                  style="box-shadow: rgba(14, 40, 51, 1) 0px 2px 4px 0px, rgba(14, 40, 51, 1) 0px 2px 16px 0px;height:45vh;">
                <!-- <div class=" text-white text-xl">Alert</div> -->
                <div class="relative">
                  <!-- <button class=" absolute top-1 right-0 flex flex-col text-white cursor-pointer" @click="closeMapDlg()">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button> -->
                  <img src="../assets/img/warning.png" width="200" height="200" alt="">
                </div>
              </div>
            </transition>
          </div>
        </div>
        <div class="flex flex-row items-center my-auto">
          <div class="page3_part2 mr-auto flex flex-col relative">
            <div class="absolute top-0 left-0 w-full h-full page3_part2_bg"></div>
            <div class="text-r114g149b164 font-bold text-center" style="font-size:1.5625vw;margin-top:1.0416vw">实时报警</div>
            <div class="alert_tb w-full mt-2 overflow-hidden">
              <table class="w-full">
                <thead class="sticky top-0 left-0 bg-r1g8b14">
                  <tr style="height: 1.4583333vw">
                    <td class="text-center text-r114g149b164" style="font-size:0.729166vw;">站点名</td>
                    <td class="text-center text-r114g149b164" style="font-size:0.729166vw;">原因</td>
                    <td class="text-center text-r114g149b164" style="font-size:0.729166vw;">时间</td>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                  v-for="(item, index) in table_data" 
                  :key="index" style="height: 2.083333vw">
                    <td class="text-center text-r114g149b164" style="font-size:0.625vw;">{{item.site_name}}</td>
                    <td class="text-center text-r114g149b164" style="font-size:0.625vw;">{{item.reason}}</td>
                    <td class="text-center text-r114g149b164" style="font-size:0.625vw;">{{item.created_at}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="page3_part2 ml-auto flex flex-col relative">
            <div class="absolute top-0 left-0 w-full h-full page3_part2_bg"></div>
            <div class="text-r114g149b164 font-bold text-center" style="font-size:1.5625vw;margin-top:1.0416vw">报警汇总</div>
            <div id="bar_chart"></div>
            <div class=" absolute flex flex-col" style="top: 10%;right: 5%;">
              <div class="flex flex-row items-center">
                <div class="text-r114g149b164" style="font-size: 0.7291666vw;">纬度</div>
                <div class=" text-r114g149b164 ml-2" style="font-size: 0.7291666vw;">55.23452</div>
              </div>
              <div class="flex flex-row items-center">
                <div class="text-r114g149b164" style="font-size: 0.7291666vw;">经度</div>
                <div class="text-r114g149b164 ml-2" style="font-size: 0.7291666vw;">-2.33542</div>
              </div>
            </div>
            <div class=" absolute flex flex-col" style="bottom: 5%;right:5%;">
              <div v-for="(item, index) in bar_chart_data_type" :key="item + index">
                <div class="flex flex-row items-center">
                  <div style="width:1.041666vw;height:0.625vw;" :style="{'background': item.color}"></div>
                  <div class="ml-3 text-r114g149b164" style="font-size: 0.7291666vw;">{{item.title}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-full ml-auto flex flex-col" style="">
        <div class="page3_part4 ml-auto flex flex-col relative">
          <div class="page3_part4_bg absolute top-0 left-0 w-full h-full"></div>
          <div class="text-r114g149b164 font-bold text-center" style="font-size:1.5625vw;margin-top:1.0416vw">数量统计</div>
          <div id="total_pie_chart"></div>
        </div>
        <div class="my-auto" style="">
          <div class="page3_part5 relative flex flex-col">
            <div class="w-full h-full absolute top-0 left-0 page3_part5_bg"></div>
            <div class="text-r114g149b164 font-bold text-center my-auto" style="font-size:1.5625vw;">工单统计数据</div>
            <div class="work_order_tb relative w-full overflow-hidden" style="margin-top:0.37661vw;">
              <table class="w-full">
                <thead class="sticky top-0 left-0 bg-r1g8b14">
                  <tr style="height: 1.4583333vw">
                    <td class="text-center text-r114g149b164" style="font-size:0.729166vw;">工单编号</td>
                    <td class="text-center text-r114g149b164" style="font-size:0.729166vw;">工单日期</td>
                    <td class="text-center text-r114g149b164" style="font-size:0.729166vw;">服务人员</td>
                    <td class="text-center text-r114g149b164" style="font-size:0.729166vw;">服务方式</td>
                    <td class="text-center text-r114g149b164" style="font-size:0.729166vw;">工单状态</td>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                  v-for="(item, index) in table_data" 
                  :key="index" style="height: 5.0185185185vh;">
                    <td class="text-center text-r42g107b135" style="font-size:0.625vw;">{{item.site_name}}</td>
                    <td class="text-center text-r42g107b135" style="font-size:0.625vw;">{{item.reason}}</td>
                    <td class="text-center text-r42g107b135" style="font-size:0.625vw;">{{item.site_name}}</td>
                    <td class="text-center text-r42g107b135" style="font-size:0.625vw;">{{item.reason}}</td>
                    <td class="text-center text-r42g107b135" style="font-size:0.625vw;">{{item.created_at}}</td>
                  </tr>
                </tbody>
              </table>
              <div class="absolute top-1 right-7 text-r114g149b164 cursor-pointer">
                <svg v-if="enable_all_work_order" 
                      xmlns="http://www.w3.org/2000/svg" class="" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      @click="closeAllWorkOrder()"
                      style="width:1.25vw;hegiht:1.25vw;">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      @click="showAllWorkOrder()"
                      style="width:1.25vw;hegiht:1.25vw;">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            
          </div>
        </div>
        <div class="mt-auto flex flex-col mb-5">
          <div v-for="(item, index) in [7,8,9]" :key="index" class="w-full flex flex-col mt-auto">
            <div class="flex flex-row items-center">
              <div v-for="(item1, index1) in [0, 1,2]" :key="index1" class="page3_part6_item relative ml-auto mt-auto">
                <img class="camera_img w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src="../assets/img/page2_part5_item.png" alt="">
                <!-- <img class="w-full h-full absolute" src="../assets/img/page3_part6_item_bg.png" alt=""> -->
                <div class="w-full h-full absolute top-0 left-0 page3_part6_item_bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import geoJson from '../assets/json/geoJson.json'
export default {
  name: 'Page3',
  data() {
    return {
      china_geo_json                  : geoJson,
      table_data: [
        {
          site_name: '同安路站1',
          reason: '占位1',
          created_at: '2021-04-13 03:53:53'
        },
        {
          site_name: '同安路站2',
          reason: '占位2',
          created_at: '2021-04-13 03:53:53'
        },
        {
          site_name: '同安路站3',
          reason: '占位3',
          created_at: '2021-04-13 03:53:53'
        },
        {
          site_name: '同安路站4',
          reason: '占位4',
          created_at: '2021-04-13 03:53:53'
        },
        
        {
          site_name: '同安路站5',
          reason: '占位5',
          created_at: '2021-04-13 03:53:53'
        },
      ],
      px_rate                         : window.innerWidth / 1920,
      parallelogram_opacity_1         : ['bg-opacity-20', 'bg-opacity-40', 'bg-opacity-60', 'bg-opacity-80', 'bg-opacity-100'],
      parallelogram_opacity_2         : ['bg-opacity-100', 'bg-opacity-80', 'bg-opacity-60', 'bg-opacity-40', 'bg-opacity-20'],
      alert_tb_scroll_interval        : null,
      header_line_opacity             : 'bg-opacity-90',
      header_line_ani_interval        : null,
      parallelogram_interval          : null,
      enable_map_dlg                    : false,
      total_pie_chart_change_interval : null,
      bar_chart_data_type: [
        {
          title: '占位',
          color: '#2e9af5'
        },
        {
          title: '冒烟',
          color: '#00ffbf'
        },
        {
          title: '起火',
          color: '#6858ff'
        },
        {
          title: '摔倒',
          color: '#006afe'
        },
        {
          title: '聚集',
          color: '#ffcc66'
        }
      ],
      enable_all_work_order           : false,
      close_effect_interval            : null
    }
  },
  components: {},
  mounted: function() {
    this.parellelogramAnimation()
    this.blinkHeaderLineAni()
    this.renderMapChart()
    setTimeout(() => {
      this.showMapDlg()
    }, 3000);
    setTimeout(() => {
      this.closeMapDlg()
    }, 13000);
    this.alertTbScrolling()
    this.renderBarChart()
    this.renderTotalPieChart()
    this.closeEffect()
  },
  beforeDestroy: function() {
    if (this.alert_tb_scroll_interval !== null) {
      clearInterval(this.alert_tb_scroll_interval)
      this.alert_tb_scroll_interval = null
    }
    if (this.header_line_ani_interval !== null) {
      clearInterval(this.header_line_ani_interval)
      this.header_line_ani_interval = null
    }
    if (this.parallelogram_interval !== null) {
      clearInterval(this.parallelogram_interval)
      this.parallelogram_interval = null
    }
    if (this.total_pie_chart_change_interval !== null) {
      clearInterval(this.total_pie_chart_change_interval)
      this.total_pie_chart_change_interval = null
    }
    if (this.close_effect_interval !== null) {
      clearInterval(this.close_effect_interval)
      this.close_effect_interval = null
    }
  },
  methods: {
    parellelogramAnimation() {
      this.parallelogram_interval = setInterval(() => {
        for (let index = 0; index < this.parallelogram_opacity_1.length; index++) {
          this.$set(this.parallelogram_opacity_2, index, `bg-opacity-${String((Number(String(this.parallelogram_opacity_2[index]).replace('bg-opacity-', ''))-20) < 20 ? 100 : Number(String(this.parallelogram_opacity_2[index]).replace('bg-opacity-', ''))-20)}`)
        }
        this.parallelogram_opacity_1 = [...this.parallelogram_opacity_2].reverse()
      }, 200);
    },
    blinkHeaderLineAni() {
      var opacity_val = 100
      this.header_line_ani_interval = setInterval(() => {
        opacity_val = opacity_val - 20
        if (opacity_val < 40) opacity_val = 100
        this.header_line_opacity = 'bg-opacity-' + String(opacity_val)
      }, 500);
    },
    renderMapChart() {
      window.echarts.registerMap('china', {geoJson: this.china_geo_json})
      var map_chart = window.echarts.init(document.getElementById('map_chart'))
      var geoCoordMap = {
        '台湾': [121.5135,25.0308],
        '黑龙江': [127.9688, 45.368],
        '内蒙古': [110.3467, 41.4899],
        "吉林": [125.8154, 44.2584],
        '北京市': [116.4551, 40.2539],
        "辽宁": [123.1238, 42.1216],
        "河北": [114.4995, 38.1006],
        "天津": [117.4219, 39.4189],
        "山西": [112.3352, 37.9413],
        "陕西": [109.1162, 34.2004],
        "甘肃": [103.5901, 36.3043],
        "宁夏": [106.3586, 38.1775],
        "青海": [101.4038, 36.8207],
        "新疆": [87.9236, 43.5883],
        "西藏": [91.11, 29.97],
        "四川": [103.9526, 30.7617],
        "重庆": [108.384366, 30.439702],
        "山东": [117.1582, 36.8701],
        "河南": [113.4668, 34.6234],
        "江苏": [118.8062, 31.9208],
        "安徽": [117.29, 32.0581],
        "湖北": [114.3896, 30.6628],
        "浙江": [119.5313, 29.8773],
        "福建": [119.4543, 25.9222],
        "江西": [116.0046, 28.6633],
        "湖南": [113.0823, 28.2568],
        "贵州": [106.6992, 26.7682],
        "云南": [102.9199, 25.4663],
        "广东": [113.12244, 23.009505],
        "广西": [108.479, 23.1152],
        "海南": [110.3893, 19.8516],
        '上海': [121.4648, 31.2891],
      };
      var data = [
        {name:"北京",value:199},
        {name:"天津",value:42},
        {name:"河北",value:102},
        {name:"山西",value:81},
        {name:"内蒙古",value:47},
        {name:"辽宁",value:67},
        {name:"吉林",value:82},
        {name:"黑龙江",value:123},
        {name:"上海",value:24},
        {name:"江苏",value:92},
        {name:"浙江",value:114},
        {name:"安徽",value:109},
        {name:"福建",value:116},
        {name:"江西",value:91},
        {name:"山东",value:119},
        {name:"河南",value:137},
        {name:"湖北",value:116},
        {name:"湖南",value:114},
        {name:"重庆",value:91},
        {name:"四川",value:125},
        {name:"贵州",value:62},
        {name:"云南",value:83},
        {name:"西藏",value:9},
        {name:"陕西",value:80},
        {name:"甘肃",value:56},
        {name:"青海",value:10},
        {name:"宁夏",value:18},
        {name:"新疆",value:180},
        {name:"广东",value:123},
        {name:"广西",value:59},
        {name:"海南",value:14},
      ];

      var option = {
        tooltip: {
          show: true,
          trigger: 'item',
          backgroundColor: 'rgba(8, 28, 37, 1)',
          borderColor: '#90ca74',
          borderWidth: 1 * this.px_rate,
          extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
          textStyle: {
            color: '#fff',
            fontSize: 15 * this.px_rate
          }
        },
        geo: {
          map: 'china',
          aspectScale: 0.75,
          zoom: 1.2,
          // layoutCenter
          show: true,
          roam: true,
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false,
            }
          },
          itemStyle: {
            areaColor: '#081c25',
            borderColor: '#01bee5',
            // shadowColor: '#092f8f',//外发光
            // shadowBlur: 20
            borderWidth: 1 * this.px_rate,
            emphasis: {
              show: false,
              areaColor: '#2AB8FF',//悬浮区背景
            }
          },
        },
        series : [
          {
            symbolSize: 5 * this.px_rate,
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: this.convertData(data, geoCoordMap),
          },
          
          {
            name: 'Rate',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAYAAADkDTpVAAADg0lEQVRIiZWXvYucVRTGf+/uZMfdTTQiQUJIwM4iiWDAgJWIlgHzUVnYpDCNKBoMEiwUa5sIIhYhoIgpLEyTPyBY2hghKhgkJhBFQZz9eGf3nZFrnjt55tw7cTxwmHdn7vs85/vcbbjzMQ+QRkp4TjI2zX8X0iu+mQZbkC7acyOwDhjZ56hGVCNw4B3SJZ1d1O8ZeAhsSbdrJJGgMYsT6EPAsrQvskbgCXQD2NRnq+86J+kF8EbgfYHuMl0RKbI0Aa8BfwunMeBMUniwKCuT5Q8Dj0qfAY4BT+q328A14Arwu97L4CMniR5k61eBR4DHgNPAqWDIE9LngPeBn5SDLQvTv0QLIfa9QPBSBdxlP/CuDNmlsC5ZtbFgh51gRaF5uYAs5QDwvIzqW7URCRrLQTp4SFbNI0f1zpIlvPDA6z8d2jcneJK91oxTHb8QDnrbtwXMbGnD2JiIE+QSy9VwYyZcKT9aV3dOVCPIXfoL8H0BVUp67yqwXiPxMo0kSS+oWx8kl4EfdG5DBKNIgCU4Szp0B3gb+LlCkEbFp8DnwEAetGHoTWW9CaM5yy3gfAF/z/IrAovAk0rq2RcZPH23J4yRojqCp4QynxjtOfADx4GPgKcLuFJ6arB+ZW9MrByHBF9Ssl4HfgW+LGCnZVk52VQlbUsnHoytPIeqiK+AV4HrwGsF5H1Z1cz6xDyYGnZu/ZYStmHb6gvgbAELjwNngIvAs8DXtXx5iDrr4lbaKZ5dAQ8vAN9oXH8H/CHvO2u0cW3pjymvIieLU/c8u6zngTVaawuHuHB8XOd4PgWcKODvl+e69vLAOnnbPfBlv6SK2ClNW+1NvXxXgMsa5XnarknXlbNtHxU5RHFd5vX3BrAbeA/4VmcPAx+ow4dWDLmbp6apd7J7kCx8ETiics3gyIBsuV+6OrfcCWrXxHOyNN0WPguxdwK/Ns5cOONKJ38I/KYujiW6MxDES3BBQOjkFM+bwDvAQTWT36rdg3EIS0GSCfKqbPXiX1oibynJ/UDQVuJegOcc5B8zwcCW/prKNF+CeyJY+6/kOoGHaGgetVZVKwJblQ7C5JyLACPJnzuCpZ28+VNebNZuEjWCSDKy4deZJrBXdHZoN4m5CLB8+H8xo/AfTX4nT91hpZRnEkRvPGx5X+SLbfZwrhzMklzn+TmBxjuUd/L/JohA3nDuaf3WAfwDNMhfphkdhqsAAAAASUVORK5CYII=',
            symbolSize: [20 * this.px_rate, 35 * this.px_rate],
            data: this.convertData(data, geoCoordMap),
            zlevel: 1
          },
         
        ]
      };
      map_chart.setOption(option)
    },
    showMapDlg() {
      this.enable_map_dlg = true
    },
    closeMapDlg() {
      this.enable_map_dlg = false
    },
    alertTbScrolling() {
      var table = document.querySelector('.alert_tb')
      this.alert_tb_scroll_interval = setInterval(() => {
        table.scrollTop = table.scrollTop + 2 * this.px_rate
        if (table.scrollTop >= (table.scrollHeight - document.querySelector('.alert_tb').offsetHeight)) {
          table.scrollTop = 0
        }
      }, 70);
      table.addEventListener('mouseenter', () => {
        clearInterval(this.alert_tb_scroll_interval)
        this.alert_tb_scroll_interval = null
      })
      table.addEventListener('mouseleave', () => {
        if (this.alert_tb_scroll_interval === null) {
          this.alert_tb_scroll_interval = setInterval(() => {
            table.scrollTop = table.scrollTop + 2 * this.px_rate
            if (table.scrollTop >= (table.scrollHeight - document.querySelector('.alert_tb').offsetHeight)) {
              table.scrollTop = 0
            }
          }, 70);
        }
      })
    },
    renderTotalPieChart() {
      var total_pie_chart = window.echarts.init(document.getElementById('total_pie_chart'))
      var option = {
        title: [
          {
            text: "场站统计",
            left: '4.5%',
            top: '70%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 16 * this.px_rate,
              color: '#638f9e',
            }
          },
          {
            text: "AI盒子",
            left: '26%',
            top: '70%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 16 * this.px_rate,
              color: '#638f9e',
            }
          },
          {
            text: "视频源",
            left: '46%',
            top: '70%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 16 * this.px_rate,
              color: '#638f9e',
            }
          },
          {
            text: "即时呼叫设备",
            left: '62%',
            top: '70%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 16 * this.px_rate,
              color: '#638f9e',
            }
          },
          {
            text: "声光DTU 拷贝",
            left: '82%',
            top: '70%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 16 * this.px_rate,
              color: '#638f9e',
            }
          }
        ],
        series: [
          {
            type: 'pie',
            clockwise: true,
            radius: ['45%', '60%'],
            hoverAnimation: true,
            center: ['10%', '40%'],
            data: [
              {
                name: 323,
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 25 * this.px_rate,
                  fontWeight: 'bold',
                  color: '#fff'
                },
                itemStyle: {
                  color: '#006afe',
                }
              }, 
              {
                name: '总报警次数',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#00ffbf',
                }
              },
              {
                name: '总报警次数',
                value: 50,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#6858ff',
                }
              }, 
              {
                name: '总报警次数',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#ffcc66',
                }
              }
            ]
          },
          {
            name: "",
            type: 'pie',
            clockwise: true,
            radius: ['45%', '60%'],
            hoverAnimation: true,
            center: ['30%', '40%'],
            data: [
              {
                name: 78,
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 25 * this.px_rate,
                  fontWeight: 'bold',
                  color: '#fff'
                },
                itemStyle: {
                  color: '#006afe',
                }
              }, 
              {
                name: '',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#00ffbf',
                }
              },
              {
                name: '',
                value: 50,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#6858ff',
                }
              }, 
              {
                name: '',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#ffcc66',
                }
              }
            ]
          },
          {
            name: "",
            type: 'pie',
            clockwise: true,
            radius: ['45%', '60%'],
            hoverAnimation: true,
            center: ['50%', '40%'],
            data: [
              {
                name: 104,
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 25 * this.px_rate,
                  fontWeight: 'bold',
                  color: '#fff'
                },
                itemStyle: {
                  color: '#006afe',
                }
              }, 
              {
                name: '',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#00ffbf',
                }
              },
              {
                name: '',
                value: 50,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#6858ff',
                }
              }, 
              {
                name: '',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#ffcc66',
                }
              }
            ]
          },
          {
            name: "",
            type: 'pie',
            clockwise: true,
            radius: ['45%', '60%'],
            hoverAnimation: true,
            center: ['70%', '40%'],
            data: [
              {
                name: 63,
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 25 * this.px_rate,
                  fontWeight: 'bold',
                  color: '#fff'
                },
                itemStyle: {
                  color: '#006afe',
                }
              }, 
              {
                name: '',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#00ffbf',
                }
              },
              {
                name: '',
                value: 50,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#6858ff',
                }
              }, 
              {
                name: '',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#ffcc66',
                }
              }
            ]
          },
          {
            name: "",
            type: 'pie',
            clockwise: true,
            radius: ['45%', '60%'],
            hoverAnimation: true,
            center: ['90%', '40%'],
            data: [
              {
                name: 78,
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 25 * this.px_rate,
                  fontWeight: 'bold',
                  color: '#fff'
                },
                itemStyle: {
                  color: '#006afe',
                }
              }, 
              {
                name: '',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#00ffbf',
                }
              },
              {
                name: '',
                value: 50,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#6858ff',
                }
              }, 
              {
                name: '',
                value: 100,
                label: {
                  show: false,
                },
                itemStyle: {
                  color: '#ffcc66',
                }
              }
            ]
          },
        ]
      }
      total_pie_chart.setOption(option)
      total_pie_chart.on('click', function() {
        total_pie_chart.clear()
        total_pie_chart.setOption(option)
      })
      this.total_pie_chart_change_interval = setInterval(() => {
        for (let index = 0; index < option.series.length; index++) {
          option.series[index].data[0].name = Math.round(Math.random() * 100);
        }
        total_pie_chart.setOption(option)
        
      }, 3000);
    },
    renderBarChart() {
      var bar_chart = window.echarts.init(document.getElementById('bar_chart'))
      var x_data = []
      var y_data = []
      for (let index = 0; index < this.bar_chart_data_type.length; index++) {
        var obj_var_x = {}
        var obj_var_y = {}
        obj_var_x.value = this.bar_chart_data_type[index].title
        obj_var_x.textStyle = {
          color: '#638f9e',
          fontSize: 14 * this.px_rate
        }

        obj_var_y.value = Math.round(Math.random() * 200)
        obj_var_y.itemStyle = {
          color: this.bar_chart_data_type[index].color
        }
        obj_var_y.label = {
          color: this.bar_chart_data_type[index].color,
          show: true,
          fontSize: 12 * this.px_rate,
          position: 'top'
        }
        x_data.push(obj_var_x)
        y_data.push(obj_var_y)
      }
      var option = {
        grid: {
          top: '15%',
          bottom: '20%',
          right: '20%'
        },
        tooltip: {
          show: true,
          backgroundColor: '#081c25',
          textStyle: {
            color: '#fff',
            fontSize: 12 * this.px_rate
          }
        },
        xAxis: {
          type: 'category',
          data: x_data,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              width: 1 * this.px_rate
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: true,
            lineStyle: {
              width: 1 * this.px_rate
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            fontSize: 12 * this.px_rate
          },
        },
        series: [
          {
            data: y_data,
            type: 'bar',
          }
        ]
      };
      bar_chart.setOption(option)
    },
    convertData(data, geoCoordMap) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    },
    showAllWorkOrder() {
      this.enable_all_work_order = true
      document.querySelector(".work_order_tb").style.height = 'auto'
      document.querySelector(".work_order_tb").classList.remove('overflow-hidden')
      document.querySelector(".work_order_tb").classList.add('z-10')
      document.querySelector(".work_order_tb").classList.add('bg-r1g8b14')
      document.querySelector(".work_order_tb").classList.add('bg-opacity-90')
    },
    closeAllWorkOrder() {
      this.enable_all_work_order = false
      document.querySelector(".work_order_tb").style.height = '8.729628vh'
      document.querySelector('.work_order_tb').classList.add('overflow-hidden')
      document.querySelector(".work_order_tb").classList.remove('z-10')
      document.querySelector(".work_order_tb").classList.remove('bg-r1g8b14')
      document.querySelector(".work_order_tb").classList.remove('bg-opacity-80')
    },
    closeEffect() {
      var camera_img = document.querySelectorAll('.camera_img')
      for (let index = 0; index < camera_img.length; index++) {
        var img_width = 100
        var img_height = 100
        setInterval(() => {
          img_width = img_width - 1
          img_height = img_height - 1
          camera_img[index].style.width = `${img_width}%`
          camera_img[index].style.height = `${img_height}%`
          if (img_width < 0 ) {
            img_height = 100
            img_width = 100
          }
        }, 150);
      }
    }
  }
}
</script>
<style scoped>
.page3_header {
  /* height: 12.592533vh; */
  height: 6.041666vw;
}
.page3_part1 {
  width:59.479vw;
  height:51.5184vh;
}
.parellegram {
  width: 1.77083vw;
  height: 0.72916vw;
  transform: skew(25deg);
}
.parallelogram--1 {
  transform: skewX(25deg);
}
.parallelogram--2 {
  transform: skewX(-25deg);
}
#map_chart {
  height:47.2888vh;
  width: 92%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 20px;
}
.page3_part4 {
  width:35.416vw;
  height: 21.2037vh;
  /* background-image: url('../assets/img/page3_part4_bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%; */
}
.page3_part4_bg {
    border-top: 120px solid transparent;
    border-right: 200px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 50px solid transparent;
    border-image: url("../assets/img/page3_part4_bg.png");
    border-image-slice: 120 200 20 50;
    border-image-repeat: repeat;
    border-image-outset: 0;
}
.page3_part2 {
  width:29.2708vw; 
  height:26.29617vh;
  /* background-image: url('../assets/img/page3_part2_3_bg.png'); */
  /* background-repeat: no-repeat; */
  /* background-size: 100% 100%; */
  
}
.page3_part2_bg {
  /* border-image: url("../assets/img/page3_part2_3_bg.png");
  border-top: 410px solid transparent;
  border-right: 768px solid transparent;
  border-left: 183px solid transparent;
  border-bottom: 50px solid transparent;
  border-image-slice: 208 410 41 98;
  border-image-repeat: repeat;
  border-image-outset: 0; */
  border-top: 146px solid transparent;
  border-right: 320px solid transparent;
  border-bottom: 35px solid transparent;
  border-left: 87px solid transparent;
  border-image-source: url('../assets/img/page3_part1_bg.png');
  border-image-slice: 208 410 41 98;
  border-image-repeat: repeat;
  border-image-outset: 0;
}
.alert_tb {
  height:16.7777vh;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
#bar_chart {
  height: 16.7777vh;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}
.page3_part5 {
    width: 35.5729167vw;
    height: 17.4074vh;
    /* background-image: url('../assets/img/page3_part5_bg.png'); */
    /* background-repeat: no-repeat;
    background-size: 100% 100%; */
    padding-top: 0.0416vw;
    display: flex;
    flex-direction: column;
}
.page3_part5_bg {
  border-top: 120px solid transparent;
    border-right: 200px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 50px solid transparent;
    border-image: url("../assets/img/page3_part4_bg.png");
    border-image-slice: 120 200 20 50;
    border-image-repeat: repeat;
    border-image-outset: 0;
}
.page3_part5 .work_order_tb {
  height: 8.729628vh;
  width: 93%;
  margin-left: auto;
  margin-right: auto;
}
.page3_part6_item {
  width: 11.5625vw;
  height: 12.962962vh;
}
.page3_part6_item_bg {
  border-top: 78px solid transparent;
  border-right: 120px solid transparent;
  border-bottom: 13px solid transparent;
  border-left: 67px solid transparent;
  border-image: url('../assets/img/page3_part6_item_bg1.png');
  border-image-slice: 78 120 13 67;
  border-image-repeat: repeat;
  border-image-outset: 0;
}
#classification_alarm_pie_chart {
  height: 19.4444vh;
}
#alarm_type_line_chart {
  height: 19.4444vh;
}
#total_pie_chart {
  height: 14.03703vh;
}

.page3_part1_bg {
  border-image-source: url("../assets/img/page3_part1_bg.png");
  border-top: 208px solid transparent;
  border-right: 410px solid transparent;
  border-bottom: 41px solid transparent;
  border-left: 98px solid transparent;
  border-image-slice: 208 410 41 98;
  border-image-repeat: repeat;
  border-image-outset: 0;

  /* border: 20px solid transparent;

  border-image-slice:90 50 100 50;
  border-image-width:20px 20px 20px 20px;
  border-image-outset: 0;
  border-image-repeat:stretch stretch;
  z-index: 999999; */
}

/* fadeout animation */
.fade-out-image {
  animation: fadeOut 5s;
  -webkit-animation: fadeOut 5s;
  -moz-animation: fadeOut 5s;
  -o-animation: fadeOut 5s;
  -ms-animation: fadeOut 5s;
  opacity: 0;
}
@keyframes fadeOut {
  from {opacity:1;}
  to {opacity:0;}
}

@-moz-keyframes fadeOut {
  from {opacity:1;}
  to {opacity:0;}
}

@-webkit-keyframes fadeOut {
  from {opacity:1;}
  to {opacity:0;}
}

@-o-keyframes fadeOut {
  from {opacity:1;}
  to {opacity:0;}
}

@-ms-keyframes fadeOut {
  from {opacity:1;}
  to {opacity:0;}
}
</style>