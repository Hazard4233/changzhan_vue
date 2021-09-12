<template>
  <div class="bg-r4g17b23 h-screen flex flex-col">
    <div class="w-full h-5 bg-r8g28b37"></div>
    <div class="flex flex-col w-full h-full">
      <div class="mx-auto mt-2">
        <div class="flex flex-row relative">
          <div class="absolute left-1/2 transform -translate-x-1/2 text-r114g149b164 font-bold" style="font-size:1.77083333vw;top:0.2083333vw">江东新区智慧养老平台</div>
          <div class="flex flex-row" style="margin-right:10.8333vw">
            <div 
              v-for="(item, index) in parallelogram_opacity_1" 
              :key="index" 
              class="parallelogram parallelogram--2 bg-r42g107b135"
              :class="item"></div>
          </div>
          <div class="flex flex-row relative">
            <div class="absolute" style="top: -0.2083333333vw;left: -7.1875vw;">
              <HexGrid width='16.1458333vw' height='16.1458333vw' viewBox="-10 -20 100 100">
                <Layout :size="{ x: 10, y: 10 }" :flat='true' :spacing="1" :origin="{ x: 0, y: 0 }">
                  <Hexagon v-for="(item, index) in hex_agon_style_1" :key="index" :q="index" :r="index > 0 ? -1 : 0" :s="0" :cellStyle="{'fill': item.fill_val, 'stroke': item.stroke_val, 'stroke-width': item.stroke_width}"/>
                  <!-- <Hexagon :q="1" :r="-1" :s="0" cellStyle="fill: rgba(42,107,135,0.5);stroke:#255f78;stroke-width:0.5" />
                  <Hexagon :q="2" :r="-1" :s="0" cellStyle="fill: rgba(42,107,135,0.2);stroke:#255f78;stroke-width:0.5" /> -->
                </Layout>
              </HexGrid>
            </div>
            <img class="mx-auto" src="../assets/img/page1-title.png" alt="" style="width:23.4375vw;">
            <div class="absolute" style="top: -0.2083333333vw;right: -15.26041666666667vw;">
              <HexGrid width='16.1458333vw' height='16.1458333vw' viewBox="-10 -20 100 100">
                <Layout :size="{ x: 10, y: 10 }" :flat='true' :spacing="1" :origin="{ x: 0, y: 0 }">
                  <Hexagon v-for="(item, index) in hex_agon_style_2" :key="index" :q="index" :r="index > 0 ? -1 : 0" :s="0" :cellStyle="{'fill': item.fill_val, 'stroke': item.stroke_val, 'stroke-width': item.stroke_width}"/>
                  <!-- <Hexagon :q="1" :r="-1" :s="0" cellStyle="fill: transparent;stroke:#255f78;stroke-width:0.5" />
                  <Hexagon :q="2" :r="-1" :s="0" cellStyle="fill: transparent;stroke:#255f78;stroke-width:0.5" /> -->
                </Layout>
              </HexGrid>
            </div>
          </div>
          <div class="flex flex-row" style="margin-left:10.8333vw">
            <div 
              v-for="(item, index1) in parallelogram_opacity_2" 
              :key="index1 + item" 
              class="parallelogram parallelogram--4 bg-r42g107b135"
              :class="item"></div>
          </div>
        </div>
        
      </div>
      <div class="flex flex-wrap w-full h-full my-5">
        <div class="w-full md:w-6/12 lg:w-4/12 flex flex-col" style="padding-left:1.041vw;padding-right:0.52vw">
          <div class="">
            <div class="sub_panel" style="height:23.05555vh;padding: 2.77777vh 1.25vw 0.885416vw 1.25vw">
              <div class="grid grid-cols-3 grid-rows-1 gap-x-6 h-full" style="grid-column-gap: 1.92vw">
                <div class="flex flex-col w-full bg-r4g17b23" style="padding:1.041666vw;">
                  <div class="border_rotate_ani" style="width: 6.5555vh;height: 6.5555vh;">
                    <div class="border_rotate_ani_div" style="border-width: 0.104166vw;"></div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div class="relative">
                        <img class="shake_img" src="../assets/img/page1_user_group.png" style="width: 3.02083vw"/>
                      </div>
                    </div>
                  </div>
                  <p class="text-center text-r114g149b164" style="font-size: 1.85185185vh;margin-top:auto;">总人数</p>
                  <p class="my-auto text-center text-r114g149b164" style="font-size: 1.85185185vh">95人</p>
                </div>
                <div class="flex flex-col w-full bg-r4g17b23" style="padding:1.041666vw;">
                  <div class="border_rotate_ani" style="width: 6.5555vh;height: 6.5555vh;">
                    <div class="border_rotate_ani_div" style="border-width: 0.104166vw;"></div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div class="relative">
                        <img class="shake_img" src="../assets/img/page1_user_run.png" style="width: 3.02083vw"/>
                      </div>
                    </div>
                  </div>
                  <p class="text-center text-r114g149b164" style="font-size: 1.85185185vh;margin-top:auto;">外出人数</p>
                  <p class="my-auto text-center text-r114g149b164" style="font-size: 1.85185185vh">44人</p>
                </div>
                <div class="flex flex-col w-full bg-r4g17b23" style="padding:1.041666vw;">
                  <div class="border_rotate_ani" style="width: 6.5555vh;height: 6.5555vh;">
                    <div class="border_rotate_ani_div" style="border-width: 0.104166vw;"></div>
                    <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div class="relative">
                        <img class="shake_img" src="../assets/img/page1_pie_chart.png" style="width: 3.02083vw"/>
                      </div>
                    </div>
                  </div>
                  <p class="text-center text-r114g149b164" style="font-size: 1.85185185vh;margin-top:auto;">设备在线率</p>
                  <p class="my-auto text-center text-r114g149b164" style="font-size: 1.85185185vh;">10.53%</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-auto">
            <div class="sub_panel relative" style="height:28.88888vh;">
              <div class="flex flex-col h-full" style="padding: 1.25vw;">
                <div class="flex flex-row items-center mx-auto">
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                  <div class="mx-auto">
                    <BorderCorner 
                    title="最近半年报警统计"
                    padding_x="15"
                    padding_y="2" 
                    class="text-r114g149b164 mx-4" style="font-size: 1.041vw"
                    ></BorderCorner>
                  </div>
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                </div>
                <div id="line_chart"></div>
                <div class="absolute" style="top:14%;right:4%;">
                  <div class="relative inline-flex self-center">
                    <div>
                      <SelectInput :options="line_chart_options" v-on:eventFromSelect="resetLineChart"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-5">
            <div class="sub_panel" style="height: 28.611111vh">
              <div class="flex flex-col px-5" style="padding-top: 1.25vw">
                <div class="flex flex-row items-center mx-auto">
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                  <div class="mx-auto">
                    <BorderCorner 
                    title="重点关注" 
                    class="text-r114g149b164 mx-8" style="font-size: 1.041vw"
                    padding_x="15"
                    padding_y="1" 
                    ></BorderCorner>
                  </div>
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                </div>
                <div class="client_tb my-4 overflow-hidden" style="height: 19.5911vh;">
                  <table class="w-full">
                    <thead class="sticky left-0 bg-r8g28b37" style="top: -0.51666vw;">
                      <tr style="height: 3.703703vh">
                        <td class="text-center text-r114g149b164" style="font-size:0.6375vw;">照片</td>
                        <td class="text-center text-r114g149b164" style="font-size:0.6375vw;">姓名</td>
                        <td class="text-center text-r114g149b164" style="font-size:0.6375vw;">年龄</td>
                        <td class="text-center text-r114g149b164" style="font-size:0.6375vw;">原因</td>
                        <td class="text-center text-r114g149b164" style="font-size:0.6375vw;">报警次数</td>
                        <td class="text-center text-r114g149b164" style="font-size:0.6375vw;">地址</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in table_data" :key="index" class="mt-1">
                        <td class="text-center text-r114g149b164 text-xs p-1 flex justify-center">
                          <img src="https://i.pinimg.com/564x/5b/40/87/5b4087d0fc8d9d372c00a32bc08f818c.jpg" alt="" style="width:1.875vw;height:1.975vw;">
                        </td>
                        <td class="text-center text-r114g149b164" style="font-size:0.6375vw;">{{item.name}}</td>
                        <td class="text-center text-r0g230b151" style="font-size:0.6375vw;">{{item.age}}岁</td>
                        <td class="text-center text-r1g190b229" style="font-size:0.6375vw;">{{item.origin}}</td>
                        <td class="text-center text-r0g230b151" style="font-size:0.6375vw;">{{item.num_alarm}}次</td>
                        <td class="text-center text-r0g230b151" style="font-size:0.6375vw;">{{item.pos}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 lg:w-5/12 flex flex-col" style="padding-left: 0.52vw;padding-right:0.52vw;">
          <div class="">
            <div class="sub_panel" style="height:52.7593vh;">
              <div class="px-5 py-6 h-full relative">
                <div id="map_chart"></div>
                  <transition name="fade">
                    <div v-if="enable_map_dlg"
                        class="map_dlg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 bg-r8g28b37 p-5"
                        style="box-shadow: rgba(14, 40, 51, 1) 0px 2px 4px 0px, rgba(14, 40, 51, 1) 0px 2px 16px 0px;height:90%;">
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
          </div>
          <div class="mt-auto">
            <div class="sub_panel" style="height:28.611111vh;">
              <div class="flex flex-col h-full" style="padding: 1.25vw;">
                <div class="flex flex-row items-center mx-auto">
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                  <div class="mx-8">
                    <BorderCorner 
                    title="报警数据统计"
                    padding_x="15"
                    padding_y="2" 
                    class="text-r114g149b164" style="font-size: 1.041vw"
                    ></BorderCorner>
                  </div>
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                </div>
                <div id="alarm_pie_chart"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-3/12 flex flex-col" style="padding-right:1.041vw;padding-left:0.52vw">
          <div class="">
            <div class="sub_panel" style="height:27.407407vh;">
              <div class="flex flex-col h-full" style="padding:1.25vw">
                <div class="flex flex-row items-center mx-auto">
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                  <div class="mx-4">
                    <BorderCorner 
                    title="年龄分布"
                    padding_x="15"
                    padding_y="2" 
                    class="text-r114g149b164" style="font-size: 1.041vw"
                    ></BorderCorner>
                  </div>
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                </div>
                <div id="age_bar_chart"></div>
              </div>
            </div>
          </div>
          <div class="mt-auto">
            <div class="sub_panel" style="height:24.35185vh;">
              <div class="flex flex-col h-full" style="padding:1.25vw">
                <div class="flex flex-row items-center mx-auto">
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                  <div class="mx-4">
                    <BorderCorner 
                    title="报警信息"
                    padding_x="20"
                    padding_y="2" 
                    class="text-r114g149b164" style="font-size: 1.041vw"
                    ></BorderCorner>
                  </div>
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                </div>
                <div class="alert_tb w-full mt-2 overflow-hidden" style="height:15.7777vh">
                  <table class="w-full">
                    <thead class="sticky top-0 left-0 bg-r8g28b37">
                      <tr class=" bg-r114g149b164 bg-opacity-20" style="height: 2.59259vh">
                        <td class="text-center text-r114g149b164" style="font-size:0.6375vw;">姓名</td>
                        <td class="text-center text-r114g149b164" style="font-size:0.6375vw;">原因</td>
                        <td class="text-center text-r114g149b164" style="font-size:0.6375vw;">时间</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr 
                      v-for="(item, index) in table_data" 
                      :key="index" style="height: 3.73333vh">
                        <td class="text-center text-r114g149b164" style="font-size:0.6375vw;">{{item.name}}</td>
                        <td class="text-center text-r114g149b164" style="font-size:0.6375vw;">{{item.origin}}</td>
                        <td class="text-center text-r114g149b164" style="font-size:0.6375vw;">{{item.created_at}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-auto">
            <div class="sub_panel" style="height:28.611111vh">
              <div class="flex flex-col h-full" style="padding-top:1.25vw;">
                <div class="flex flex-row items-center mx-auto">
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                  <div class="mx-4">
                    <BorderCorner 
                    title="本月状态统计"
                    padding_x="20"
                    padding_y="2" 
                    class="text-r114g149b164" style="font-size: 1.041vw"
                    ></BorderCorner>
                  </div>
                  <div class="w-10 bg-r42g107b135" style="height: 1px"></div>
                </div>
                <div id="statisticMonthPieChart"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import BorderCorner from '../components/BorderCorner.vue'
import geoJson from '../assets/json/geoJson.json'
import { HexGrid, Layout, Hexagon} from 'vue-hexgrid'
import SelectInput from '../components/SelectInput.vue'
export default {
  name: 'Page1',
  data() {
    return {
      table_data: [
        {
          'avatar': "",
          'name': '李进来',
          'age': 91,
          'origin': '呼吸率过低',
          'num_alarm': 3,
          'pos': '上联村 拷贝',
          'created_at': '2021-04-13 03:53:53'
        },
        {
          'avatar': "",
          'name': '李进来',
          'age': 91,
          'origin': '呼吸率过低',
          'num_alarm': 3,
          'pos': '上联村 拷贝',
          'created_at': '2021-04-13 03:53:53'
        },
        {
          'avatar': "",
          'name': '李进来',
          'age': 91,
          'origin': '呼吸率过低',
          'num_alarm': 3,
          'pos': '上联村 拷贝',
          'created_at': '2021-04-13 03:53:53'
        },
        {
          'avatar': "",
          'name': '李进来',
          'age': 91,
          'origin': '呼吸率过低',
          'num_alarm': 3,
          'pos': '上联村 拷贝',
          'created_at': '2021-04-13 03:53:53'
        },
        {
          'avatar': "",
          'name': '李进来',
          'age': 91,
          'origin': '呼吸率过低',
          'num_alarm': 3,
          'pos': '上联村 拷贝',
          'created_at': '2021-04-13 03:53:53'
        },
        {
          'avatar': "",
          'name': '李进来',
          'age': 91,
          'origin': '呼吸率过低',
          'num_alarm': 3,
          'pos': '上联村 拷贝',
          'created_at': '2021-04-13 03:53:53'
        },
        {
          'avatar': "",
          'name': '李进来',
          'age': 91,
          'origin': '呼吸率过低',
          'num_alarm': 3,
          'pos': '上联村 拷贝',
          'created_at': '2021-04-13 03:53:53'
        },
        {
          'avatar': "",
          'name': '李进来',
          'age': 91,
          'origin': '呼吸率过低',
          'num_alarm': 3,
          'pos': '上联村 拷贝',
          'created_at': '2021-04-13 03:53:53'
        },
        {
          'avatar': "",
          'name': '李进来',
          'age': 91,
          'origin': '呼吸率过低',
          'num_alarm': 3,
          'pos': '上联村 拷贝',
          'created_at': '2021-04-13 03:53:53'
        },
        {
          'avatar': "",
          'name': '李进来',
          'age': 91,
          'origin': '呼吸率过低',
          'num_alarm': 3,
          'pos': '上联村 拷贝',
          'created_at': '2021-04-13 03:53:53'
        },
        {
          'avatar': "",
          'name': '李进来',
          'age': 91,
          'origin': '呼吸率过低',
          'num_alarm': 3,
          'pos': '上联村 拷贝',
          'created_at': '2021-04-13 03:53:53'
        },
      ],
      china_geo_json: geoJson,
      parallelogram_opacity_1: ['bg-opacity-10', 'bg-opacity-20', 'bg-opacity-30', 'bg-opacity-40', 'bg-opacity-50'],
      parallelogram_opacity_2: ['bg-opacity-50', 'bg-opacity-40', 'bg-opacity-30', 'bg-opacity-20', 'bg-opacity-10'],
      parallelogram_interval: null,
      client_tb_scroll_interval: null,
      alert_tb_scroll_interval: null,
      hex_agon_style_1: [
        { fill_val: 'rgba(42,107,135,0.5)', stroke_val: '#255f78', stroke_width: '0.5'},
        { fill_val: 'rgba(42,107,135,0.3)', stroke_val: '#255f78', stroke_width: '0.5'},
        { fill_val: 'rgba(42,107,135,0.1)', stroke_val: '#255f78', stroke_width: '0.5'},
      ],
      hex_agon_style_2: [
        { fill_val: 'rgba(42,107,135,0.1)', stroke_val: '#255f78', stroke_width: '0.5'},
        { fill_val: 'rgba(42,107,135,0.3)', stroke_val: '#255f78', stroke_width: '0.5'},
        { fill_val: 'rgba(42,107,135,0.5)', stroke_val: '#255f78', stroke_width: '0.5'},
      ],
      hex_agon_interval: null,
      px_rate: window.innerWidth / 1920,

      line_chart_options: ['时段', '区域', '近半年'],
      line_chart_data_type: '时段',
      
      enable_map_dlg: false,
    }
  },
  components: {
    BorderCorner,
    HexGrid, Layout, Hexagon,
    SelectInput
  },
  mounted: function() {
    this.parellelogramAnimation()
    this.hexagonAnimation()
    this.rotateVibrationAni()
    this.alertTbAutoScrolling()
    this.clientTbAutoScrolling()
    this.renderLineChart()
    this.renderMapChart()
    setTimeout(() => {
      this.showMapDlg()
    }, 3000);
    setTimeout(() => {
      this.closeMapDlg()
    }, 50000);
    this.renderAlarmPieChart()
    this.renderAgeBarChart()
    this.renderStatisticMonthPieChart()
  },
  beforeDestroy: function(){
    if (this.hex_agon_interval !== null) {
      clearInterval(this.hex_agon_interval)
      this.hex_agon_interval = null
    }
    if (this.parallelogram_interval !== null) {
      clearInterval(this.parallelogram_interval)
      this.parallelogram_interval = null
    }
    if (this.alert_tb_scroll_interval !== null) {
      clearInterval(this.alert_tb_scroll_interval)
      this.alert_tb_scroll_interval = null
    }
    if (this.client_tb_scroll_interval !== null) {
      clearInterval(this.client_tb_scroll_interval)
      this.client_tb_scroll_interval = null
    }
  },
  methods: {
    parellelogramAnimation() {
      this.parallelogram_interval = setInterval(() => {
        for (let index = 0; index < this.parallelogram_opacity_1.length; index++) {
          this.$set(this.parallelogram_opacity_2, index, `bg-opacity-${String((Number(String(this.parallelogram_opacity_2[index]).replace('bg-opacity-', ''))-10) < 10 ? 50 : Number(String(this.parallelogram_opacity_2[index]).replace('bg-opacity-', ''))-10)}`)
        }
        this.parallelogram_opacity_1 = [...this.parallelogram_opacity_2].reverse()
      }, 150);
    },
    hexagonAnimation() {
      this.hex_agon_interval = setInterval(() => {
        for (let index = 0; index < this.hex_agon_style_1.length; index++) {
          this.hex_agon_style_2[index].fill_val = `rgba(42,107,135,${this.getOpacityVal(this.hex_agon_style_2[index].fill_val) - 0.2 < 0 ? 0.5 : this.getOpacityVal(this.hex_agon_style_2[index].fill_val) - 0.2})`
        }
        this.hex_agon_style_1 = [...this.hex_agon_style_2].reverse()
      }, 200)
    },
    rotateVibrationAni() {
      var border_rotate_ani = document.querySelectorAll('.border_rotate_ani')
      var shake_img_list = document.querySelectorAll('.shake_img')
      var border_rotate_ani_div = document.querySelectorAll('.border_rotate_ani_div')
      for (let index = 0; index < border_rotate_ani.length; index++) {
        border_rotate_ani[index].onmouseover = function() {
          shake_img_list[index].classList.add('shake_img_hover')
          border_rotate_ani_div[index].classList.add('border_rotate_ani_div_hover')
        }
        border_rotate_ani[index].onmouseleave = function() {
          shake_img_list[index].classList.remove('shake_img_hover')
          border_rotate_ani_div[index].classList.remove('border_rotate_ani_div_hover')
        }
      }
    },
    alertTbAutoScrolling() {
      var table = document.querySelector('.alert_tb')
      this.alert_tb_scroll_interval = setInterval(() => {
        table.scrollTop = table.scrollTop + 2 * this.px_rate
        if (table.scrollTop >= (table.scrollHeight - document.querySelector('.alert_tb').offsetHeight)) {
          table.scrollTop = 0
        }
      }, 70);
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
      table.addEventListener('mouseenter', () => {
        clearInterval(this.alert_tb_scroll_interval)
        this.alert_tb_scroll_interval = null
      })
    },
    clientTbAutoScrolling() {
      var table = document.querySelector('.client_tb')
      this.client_tb_scroll_interval = setInterval(() => {
        table.scrollTop = table.scrollTop + 2 * this.px_rate
        if (table.scrollTop >= (table.scrollHeight - document.querySelector('.client_tb').offsetHeight)) {
          table.scrollTop = 0
        }
      }, 70);
      table.addEventListener('mouseenter', () => {
        clearInterval(this.client_tb_scroll_interval)
        this.client_tb_scroll_interval = null
      })
      table.addEventListener('mouseleave', () => {
        if (this.client_tb_scroll_interval === null) {
          this.client_tb_scroll_interval = setInterval(() => {
            table.scrollTop = table.scrollTop + 2
            if (table.scrollTop >= (table.scrollHeight - document.querySelector('.client_tb').offsetHeight)) {
              table.scrollTop = 0
            }
          }, 70);
        }
      })
    },
    renderLineChart() {
      var line_chart = window.echarts.init(document.getElementById('line_chart'))
      var data = []
      var y_data = []
      for (let index = 0; index < 24; index++) {
        var obj_var = {}
        obj_var.textStyle = {
          fontSize: 10 * this.px_rate
        }
        obj_var.value = `${index}时1`
        data.push(obj_var)
      }
      for (let index = 0; index < 24; index++) {
        y_data.push({
          value: Math.round(Math.random() * 4),
          label: {
            fontSize: 12 * this.px_rate
          }
        })
      }
      var option = {
        grid: {
            bottom: '13%',
            top: '20%',
            left: '5%',
            right: '10%',
        },
        xAxis: {
          type: 'category',
          name: '时间',
          nameTextStyle: {
            color: '#7295a4',
            fontSize: 12 * this.px_rate
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#7295a4',
              width: 1 * this.px_rate
            }
          },
          boundaryGap: false,
          data: data
        },
        yAxis: {
          type: 'value',
          name: '数量',
          nameTextStyle: {
            color: '#7295a4',
            fontSize: 12 * this.px_rate
          },
          show: true,
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#7295a4',
              width: 1 * this.px_rate
            }
          },
          axisLabel: {
            fontSize: 12 * this.px_rate
          }
        },
        series: [{
          data: y_data,
          type: 'line',
          symbolSize: 4 * this.px_rate,
          lineStyle: {
            width: 2 * this.px_rate
          },
          areaStyle: {
            color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(5,76,136,0.9)'
                },
                {
                    offset: 1,
                    color: 'rgba(5,76,136,0)'
                }
            ], false),
          },
          itemStyle: {
            color: '#054c88',
          }
        }]
      }
      line_chart.setOption(option)
    },
    resetLineChart(value) {
      this.line_chart_data_type = value
      var line_chart = window.echarts.init(document.getElementById('line_chart'))
      var options = line_chart.getOption()
      var x_data = []
      var y_data = []
      var obj_var = {}
      for (let index = 0; index < 24; index++) {
        y_data.push(Math.round(Math.random() * 4))
      }
      if (this.line_chart_data_type === '时段') {
        x_data = []
        for (let index = 0; index < 24; index++) {
          obj_var = {}
          obj_var.textStyle = {
            fontSize: 12 * this.px_rate
          }
          obj_var.value = `${index}时1`
          x_data.push(obj_var)
        }
      }
      if (this.line_chart_data_type === '区域') {
        x_data = []
        for (let index = 0; index < 24; index++) {
          obj_var = {}
          obj_var.textStyle = {
            fontSize: 12 * this.px_rate
          }
          obj_var.value = `${index}时2`
          x_data.push(obj_var)
        }
      }
      if (this.line_chart_data_type === '近半年') {
        x_data = []
        for (let index = 0; index < 24; index++) {
          obj_var = {}
          obj_var.textStyle = {
            fontSize: 12 * this.px_rate
          }
          obj_var.value = `${index}时3`
          x_data.push(obj_var)
        }
      }
      options.xAxis[0].data = x_data
      options.series[0].data = y_data
      line_chart.setOption(options, true)
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
      // var max = 480, min = 9; // todo 
      // var maxSize4Pin = 100, minSize4Pin = 20;

      var option = {
        tooltip: {
          show: true,
          trigger: 'item',
          backgroundColor: 'rgba(4, 17, 23, 1)',
          borderColor: '#90ca74',
          borderWidth: this.px_rate * 1,
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
            borderColor: '#01bee5',//线
            // shadowColor: '#092f8f',//外发光
            // shadowBlur: 20
            borderWidth: 1 * this.px_rate,
            emphasis: {
              areaColor: '#2AB8FF',//悬浮区背景
            }
          }
        },
        series : [
          {
            symbolSize: 10 * this.px_rate,
            // label: {
            //   normal: {
            //     formatter: '{b}',
            //     position: 'right',
            //     show: true
            //   },
            //   emphasis: {
            //     show: false
            //   }
            // },
            // itemStyle: {
            //   normal: {
            //     color: '#fff'
            //   }
            // },
            name: 'light',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: this.convertData(data, geoCoordMap),
          },
          
          {
            name: 'Top 5',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAYAAADkDTpVAAADg0lEQVRIiZWXvYucVRTGf+/uZMfdTTQiQUJIwM4iiWDAgJWIlgHzUVnYpDCNKBoMEiwUa5sIIhYhoIgpLEyTPyBY2hghKhgkJhBFQZz9eGf3nZFrnjt55tw7cTxwmHdn7vs85/vcbbjzMQ+QRkp4TjI2zX8X0iu+mQZbkC7acyOwDhjZ56hGVCNw4B3SJZ1d1O8ZeAhsSbdrJJGgMYsT6EPAsrQvskbgCXQD2NRnq+86J+kF8EbgfYHuMl0RKbI0Aa8BfwunMeBMUniwKCuT5Q8Dj0qfAY4BT+q328A14Arwu97L4CMniR5k61eBR4DHgNPAqWDIE9LngPeBn5SDLQvTv0QLIfa9QPBSBdxlP/CuDNmlsC5ZtbFgh51gRaF5uYAs5QDwvIzqW7URCRrLQTp4SFbNI0f1zpIlvPDA6z8d2jcneJK91oxTHb8QDnrbtwXMbGnD2JiIE+QSy9VwYyZcKT9aV3dOVCPIXfoL8H0BVUp67yqwXiPxMo0kSS+oWx8kl4EfdG5DBKNIgCU4Szp0B3gb+LlCkEbFp8DnwEAetGHoTWW9CaM5yy3gfAF/z/IrAovAk0rq2RcZPH23J4yRojqCp4QynxjtOfADx4GPgKcLuFJ6arB+ZW9MrByHBF9Ssl4HfgW+LGCnZVk52VQlbUsnHoytPIeqiK+AV4HrwGsF5H1Z1cz6xDyYGnZu/ZYStmHb6gvgbAELjwNngIvAs8DXtXx5iDrr4lbaKZ5dAQ8vAN9oXH8H/CHvO2u0cW3pjymvIieLU/c8u6zngTVaawuHuHB8XOd4PgWcKODvl+e69vLAOnnbPfBlv6SK2ClNW+1NvXxXgMsa5XnarknXlbNtHxU5RHFd5vX3BrAbeA/4VmcPAx+ow4dWDLmbp6apd7J7kCx8ETiics3gyIBsuV+6OrfcCWrXxHOyNN0WPguxdwK/Ns5cOONKJ38I/KYujiW6MxDES3BBQOjkFM+bwDvAQTWT36rdg3EIS0GSCfKqbPXiX1oibynJ/UDQVuJegOcc5B8zwcCW/prKNF+CeyJY+6/kOoGHaGgetVZVKwJblQ7C5JyLACPJnzuCpZ28+VNebNZuEjWCSDKy4deZJrBXdHZoN4m5CLB8+H8xo/AfTX4nT91hpZRnEkRvPGx5X+SLbfZwrhzMklzn+TmBxjuUd/L/JohA3nDuaf3WAfwDNMhfphkdhqsAAAAASUVORK5CYII=',
            symbolSize: [20 * this.px_rate, 35 * this.px_rate],
            // label: {
            //   normal: {
            //     show: true,
            //     textStyle: {
            //         color: '#fff',
            //         fontSize: 9,
            //     },
            //     formatter (value){
            //         return value.data.value[2]
            //     }
            //   }
            // },
            // itemStyle: {
            //   normal: {
            //     color: '#D8BC37', //标志颜色
            //   }
            // },
            data: this.convertData(data, geoCoordMap),
            // showEffectOn: 'render',
            // rippleEffect: {
            //   brushType: 'stroke'
            // },
            hoverAnimation: true,
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
    renderAlarmPieChart() {
      var alarm_pie_chart = window.echarts.init(document.getElementById('alarm_pie_chart'))
      var option = {
        grid: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 20,
        },
        title: [
          {
            text: "48",
            left: '13%',
            top: '87%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 20 * this.px_rate,
              color: '#01bee5',
            }
          },
          {
            text: "48",
            left: '48%',
            top: '87%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 20 * this.px_rate,
              color: '#01bee5',
            }
          },
          {
            text: "48%",
            left: '82%',
            top: '87%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 20 * this.px_rate,
              color: '#01bee5',
            }
          }
        ],
        series: [
          {
            type: 'pie',
            clockwise: true,
            radius: ['50%', '65%'],
            hoverAnimation: true,
            center: ['15%', '50%'],
            data: [
              {
                name: '总报警次数',
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 15 * this.px_rate,
                  fontWeight: 'normal',
                  color: '#7295a4'
                },
                itemStyle: {
                  color: '#01bee5',
                      shadowColor: '#2a6b87',
                      shadowBlur: 0,
                      borderRadius: 10
                }
              }, 
              {
                name: '总报警次数',
                value: 100,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 15 * this.px_rate,
                  fontWeight: 'normal',
                  color: '#7295a4'
                },
                itemStyle: {
                  color: '#1c3f4e',
                  shadowColor: '#2a6b87',
                  shadowBlur: 0,
                }
              }
            ]
          },
          {
            name: "本月报警数",
            type: 'pie',
            clockwise: true,
            radius: ['50%', '65%'],
            hoverAnimation: true,
            center: ['50%', '50%'],
            data: [
              {
                name: '本月报警数',
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 15 * this.px_rate,
                  fontWeight: 'normal',
                  color: '#7295a4'
                },
                itemStyle: {
                  color: '#01bee5',
                  shadowColor: '#2a6b87',
                  shadowBlur: 0,
                  borderRadius: 10
                }
              }, 
              {
                name: '本月报警数',
                value: 100,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 15 * this.px_rate,
                  fontWeight: 'normal',
                  color: '#7295a4'
                },
                itemStyle: {
                  color: '#1c3f4e',
                  shadowColor: '#2a6b87',
                  shadowBlur: 0,
                }
              }
            ]
          },
          {
            name: "报警率",
            type: 'pie',
            clockwise: true,
            radius: ['50%', '65%'],
            hoverAnimation: true,
            center: ['85%', '50%'],
            data: [
              {
                name: '报警率',
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 15 * this.px_rate,
                  fontWeight: 'normal',
                  color: '#7295a4'
                },
                itemStyle: {
                  color: '#01bee5',
                  shadowColor: '#2a6b87',
                  shadowBlur: 0,
                  borderRadius: 10
                }
              }, 
              {
                name: '报警率',
                value: 100,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 15 * this.px_rate,
                  fontWeight: 'normal',
                  color: '#7295a4'
                },
                itemStyle: {
                  color: '#1c3f4e',
                  shadowColor: '#2a6b87',
                  shadowBlur: 0,
                }
              }
            ]
          },
        ]
      }
      alarm_pie_chart.setOption(option)
      alarm_pie_chart.on('click', function() {
        alarm_pie_chart.clear()
        alarm_pie_chart.setOption(option)
      })
    },
    renderAgeBarChart() {
      var age_bar_chart = window.echarts.init(document.getElementById('age_bar_chart'))
      var data = [
        {
          name: '50以下',
          value: 12
        },
        {
            name: '50-60',
            value: 23
        },
        {
            name:'60-70',
            value:56
        },
        {
            name:'70-80',
            value:17
        },
        {
            name:'80-90',
            value:65,
        },
        {
            name:'90以上',
            value:12
        }
      ];
      var dataSource = data;
      var dataName = [];
      var dataValue = [];
      var dataNum = [];
      for (var key in dataSource) {
          dataName.push(dataSource[key]["name"]);
          var obj_var = {}
          obj_var.value = dataSource[key]['value']
          obj_var.label = {fontSize: 15 * this.px_rate}
          dataValue.push(obj_var);
          dataNum.push(100);
      }
      var options = {
        grid: {
            top: "10%",
            left: "13%",
            bottom: "0%"
        },
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: [
          {
            type: 'category',
            show: true,
            data: dataName,
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#7295a4',
                fontSize: 12 * this.px_rate
            }
          },
          {
              type: 'category',
              show: true,
              inverse: true,
              axisTick: 'none',
              axisLine: 'none',
              data: dataValue,
              axisLabel: {
                textStyle: {
                    fontSize: 12 * this.px_rate,
                    color: "#00e697"
                },
              },
          }
        ],
        series: [
          {
            type: "bar",
            yAxisIndex: 0,
            data: dataValue,
            zlevel: 0,
            barWidth: 12 * this.px_rate,
            itemStyle: {
              barBorderRadius: 30,
              color: new window.echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                  offset: 0,
                  color: 'rgba(0,230,151,0.5)'
              }, {
                  offset: 1,
                  color: 'rgba(0,230,151,1)'
              }]),
            },
          },
        ]
      };
      age_bar_chart.setOption(options)
      age_bar_chart.on('click', function() {
        age_bar_chart.clear()
        age_bar_chart.setOption(options)
      })
    },
    renderStatisticMonthPieChart() {
      var statisticMonthPieChart = window.echarts.init(document.getElementById('statisticMonthPieChart'))
      var option = {
        series: [
          {
            name: '',
            type: 'pie',
            radius: '65%',
            center: ['50%', '40%'],
            label: {
              fontSize: 12 * this.px_rate
            },
            data: [
              {
                name: '心率过低',
                value: 60,
                label: {
                  position: 'outside',
                  show: true,
                  fontSize: 15 * this.px_rate,
                  fontWeight: 'normal',
                  color: '#01bee5',
                  formatter: '{b} {c}%'
                },
                labelLine: {
                  length: 20 * this.px_rate,
                  length2: 20 * this.px_rate,
                  lineStyle: {
                    width: 1 * this.px_rate
                  }
                },
                itemStyle: {
                  color: '#01bee5',
                  shadowColor: '#2a6b87',
                  shadowBlur: 0,
                }
              }, 
              {
                name: '呼吸率过低',
                value: 40,
                label: {
                  formatter: '{b} {c}%',
                  position: 'outside',
                  show: true,
                  fontSize: 15 * this.px_rate,
                  fontWeight: 'normal',
                  color: '#00e697'
                },
                labelLine: {
                  length: 20 * this.px_rate,
                  length2: 20 * this.px_rate,
                  lineStyle: {
                    width: 1 * this.px_rate
                  }
                },
                itemStyle: {
                  color: '#00e697',
                  shadowColor: '#2a6b87',
                  shadowBlur: 0,
                }
              }
            ]
          }
        ],
        legend: {
            type: 'plain',
            orient: 'vertical',
            right: '5%',
            bottom: '5%',
            data: ['心率过低', '呼吸率过低'],
            textStyle: {
              color: '#7295a4',
              fontSize: 15 * this.px_rate
            },
            itemWidth: 30 * this.px_rate,
            itemHeight: 17 * this.px_rate
        },
      }
      statisticMonthPieChart.setOption(option)
      statisticMonthPieChart.on('click', function() {
        statisticMonthPieChart.clear()
        statisticMonthPieChart.setOption(option)
      })
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
    
    getOpacityVal(rgb_val) {
      var opacity_val = rgb_val.replace('rgba(42,107,135,', '')
      opacity_val = opacity_val.replace(')', '')
      return Number(opacity_val) 
    }
  }
}
</script>
<style scoped>
.parallelogram {
  width: 1.5625vw;
  height: 2.604166vw;
  transform: skew(25deg);
  margin-left: 0.364583vw;
  margin-right: 0.364583vw;
}
.parallelogram--2 {
  transform: skew(-25deg);
}
.parallelogram--4 {
  transform: skew(25deg);
}

.shake_img_hover {
  animation: shake 0.5s;
  animation-iteration-count: 1;
}
.border_rotate_ani {
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
.border_rotate_ani_div {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-color: rgb(0, 230, 151);
  border-style: solid;
  
  background: transparent;
}
.border_rotate_ani_div_hover {
  border-style: dashed;
  -webkit-animation-name: Rotate;
  -webkit-animation-duration: 4s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: linear;
  -moz-animation-name: Rotate;
  -moz-animation-duration: 4s;
  -moz-animation-iteration-count: infinite;
  -moz-animation-timing-function: linear;
  -ms-animation-name: Rotate;
  -ms-animation-duration: 4s;
  -ms-animation-iteration-count: infinite;
  -ms-animation-timing-function: linear;
}
.sub_panel {
  background-image: url('../assets/img/page1-module-bg.png');
  background-size: cover;
  background-repeat: round;
}
#line_chart {
  margin-top: auto;
  height: 21.36888vh;
}
#map_chart {
  margin-top: auto;
  height: 48vh;
}
#alarm_pie_chart {
  margin-top: auto;
  height: 18.518518vh;
}
#age_bar_chart{
  margin-top: auto;
  height: 20.66666vh;
}
#statisticMonthPieChart {
  margin-top: auto;
  height: 20.36977vh;
}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}

@-webkit-keyframes Rotate {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes Rotate {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
@-ms-keyframes Rotate {
  from {
    -ms-transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
  }
}

</style>