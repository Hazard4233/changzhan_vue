<template>
  <div class=" bg-r1g8b14 flex flex-col w-full h-screen" style="padding-top:0.521vw">
    <div class="page2_header w-full flex flex-col relative">
      <img class="w-full h-full absolute top-0 left-0" src="../assets/img/page2_header_bg.png" alt="">
      <div class="absolute left-1/2 transform -translate-x-1/2 flex flex-row items-center" style="top:1.2037037vh;">
        <div class=" rounded-full bg-r93g192b191" style="width:10px;height:10px;"></div>
        <div class=" border-transparent relative" 
            style="width:20.833333vw;height:0.3703697vh;background-color: #67d4d2">
          <div class="absolute top-0 left-1/2 transform -translate-x-1/2" 
                style="height:0.3703697vh;box-shadow: rgba(0, 255, 191, 0.7) 0px 0px 6px 2px;"
                :style="{'width': line_width + 'px'}"></div>
        </div>
        <div class=" rounded-full bg-r93g192b191" style="width:10px;height:10px;"></div>
      </div>
      <div class="font-bold text-r93g192b191 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 cursor-pointer" 
        style="font-size:2.34375vw;text-shadow:0px 0px 4px rgb(46 154 245)"
        @click="lineStreamAnimation()">场站可视化</div>
      <div class="flex flex-row items-center absolute top-1/2 transform -translate-y-1/2" style="left:5.416666vw">
        <div v-for="(item, index) in circle_opacity_1" :key="index">
          <div class="rounded-full bg-r93g192b191" 
              style="width: 1.5625vw;height: 1.5625vw;margin-right:0.67708vw;"
              :class="item"></div>
        </div>
      </div>
      <div class="flex flex-row items-center absolute top-1/2 transform -translate-y-1/2" style="right:5.416666vw">
        <div v-for="(item, index) in circle_opacity_2" :key="index">
          <div class="rounded-full bg-r93g192b191"
              style="width: 1.5625vw;height: 1.5625vw;margin-left:0.67708vw;"
              :class="item"></div>
        </div>
      </div>
      <div class="absolute left-1/2 transform -translate-x-1/2 bg-r62g235b233 rounded" 
          style="width:20.833333vw;height:0.10416666vw;top:12vh;">
        <div class="relative">
          <div class="absolute bg-r62g235b233 rounded" 
            style="width:4.833333vw;height:0.10416666vw;top:0;box-shadow: rgba(0, 255, 191, 0.7) 0px 0px 6px 3px;"
            :style="{'left': line2_stream_left + 'vw'}"></div>
        </div>
      </div>
      
    </div>
    <div class="w-full flex flex-row mt-5" style="height: 85.55555vh;padding-left:1.5vw;padding-right:1.5vw;padding-bottom:20px;">
      <div class="h-full flex flex-col">
        <div class="page2_part1 relative">
          <div class="w-full h-full absolute">
            <img class="w-full h-full" src="../assets/img/page2_part1_img.png" alt="">
          </div>
          <div class="w-full h-full absolute img2"></div>
        </div>
        <div class="flex flex-row items-center mt-auto">
          <div class="page2_part2 mr-auto flex flex-col relative">
            <div class="page2_part2_bg absolute top-0 left-0 w-full h-full"></div>
            <div class="text-r114g149b164 font-bold text-center" style="font-size:1.5625vw;margin-top:1.0416vw">分类报警</div>
            <div id="classification_alarm_pie_chart"></div>
          </div>
          <div class="page2_part2 ml-auto flex flex-col relative">
            <div class="page2_part2_bg absolute top-0 left-0 w-full h-full"></div>
            <div class="text-r114g149b164 font-bold text-center" style="font-size:1.5625vw;margin-top:1.0416vw">各类型报警趋势</div>
            <div id="alarm_type_line_chart"></div>
            <div class="absolute" style="top:30%;right:8%;">
              <div class="relative inline-flex self-center">
                <div>
                  <SelectInput :options="line_chart_options" v-on:eventFromSelect="changeLineChart"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-auto h-full flex flex-col">
        <div class="page2_part4 ml-auto flex flex-col relative">
          <div class="page2_part4_bg w-full h-full absolute top-0 left-0"></div>
          <div class="text-r114g149b164 font-bold text-center" style="font-size:1.5625vw;margin-top:1.0416vw">设备分类数量统计</div>
          <div id="equip_pie_chart"></div>
        </div>
        <div v-for="(item, index) in [7,8,9]" :key="index" class="w-full flex flex-col mt-auto">
          <div class="flex flex-row items-center">
            <div v-for="(item1, index1) in [0, 1,2]" :key="index1" class="page2_part_5_item relative ml-auto mt-auto">
              <img class="camera_img w-full h-full absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="../assets/img/page2_part5_item.png" alt="">
              <div class="page2_part_5_item_bg w-full h-full absolute left-0 top-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SelectInput from '../components/SelectInput.vue'
export default {
  name: 'Page2',
  data() {
    return {
      circle_opacity_1                  : ['bg-opacity-10', 'bg-opacity-20', 'bg-opacity-30', 'bg-opacity-40', 'bg-opacity-50'],
      circle_opacity_2                  : ['bg-opacity-50', 'bg-opacity-40', 'bg-opacity-30', 'bg-opacity-20', 'bg-opacity-10'],
      circle_interval                   : null,
      line_stream_interval              : null,
      line2_stream_interval             : null,
      line2_stream_left                 : 0,
      line2_stream_direction_right      : true,
      line_width                        : 0,
      line_chart_options                : ['季', '年', '月'],
      selected_line_chart_option        : '季',
      px_rate                           : window.innerWidth / 1920,
      equip_pie_chart_change_interval   : null,
      close_effect_interval              : null
    }
  },
  components: {
    SelectInput
  },
  mounted: function() {
    this.circleAnimation()
    this.line2StreamAnimation()
    this.renderAlarmPieChart()
    this.renderLineChart()
    this.renderEquipmentPieChart()
    this.closeEffect()
  },
  beforeDestroy: function() {
    if (this.close_effect_interval !== null) {
      clearInterval(this.close_effect_interval)
      this.close_effect_interval = null
    }
    if (this.equip_pie_chart_change_interval !== null) {
      clearInterval(this.equip_pie_chart_change_interval)
      this.equip_pie_chart_change_interval = null
    }
    if (this.line_stream_interval !== null) {
      clearInterval(this.line_stream_interval)
      this.line_stream_interval = null
    }
    if (this.line2_stream_interval !== null) {
      clearInterval(this.line2_stream_interval)
      this.line2_stream_interval = null
    }
    if (this.circle_interval !== null) {
      clearInterval(this.circle_interval)
      this.circle_interval = null
    }
  },
  methods: {
    circleAnimation() {
      this.circle_interval = setInterval(() => {
        for (let index = 0; index < this.circle_opacity_1.length; index++) {
          this.$set(this.circle_opacity_2, index, `bg-opacity-${String((Number(String(this.circle_opacity_2[index]).replace('bg-opacity-', ''))-10) < 10 ? 50 : Number(String(this.circle_opacity_2[index]).replace('bg-opacity-', ''))-10)}`)
        }
        this.circle_opacity_1 = [...this.circle_opacity_2].reverse()
      }, 150);
    },
    lineStreamAnimation() {
      if (this.line_stream_interval !== null) {
        clearInterval(this.line_stream_interval)
        this.line_stream_interval = null
      }else {
        this.line_stream_interval = setInterval(() => {
          this.line_width = this.line_width + 3
          if (this.line_width > 400) {
            this.line_width = 0
            clearInterval(this.line_stream_interval)
            this.line_stream_interval = null
          }
        }, 15);
      }
      
    },
    line2StreamAnimation() {
      this.line2_stream_interval = setInterval(() => {
        if (this.line2_stream_left > 15.625) {
          this.line2_stream_direction_right = false
        }
        if (this.line2_stream_left < 0.260416) {
          this.line2_stream_direction_right = true
        }
        if (this.line2_stream_direction_right) {
          this.line2_stream_left = this.line2_stream_left + 0.05208
        }
        if (!this.line2_stream_direction_right) {
          this.line2_stream_left = this.line2_stream_left - 0.05208
        }
      }, 10);
    },
    renderAlarmPieChart() {
      var pie_chart = window.echarts.init(document.getElementById('classification_alarm_pie_chart'))
      var option = {
            color: ['#ffcc66', '#00ffbf', '#2e9af5'],
            tooltip: {
              trigger: 'item',
              formatter: '{b} : {c} ({d}%)'
            },
            legend: {
                data: ['火灾等报警', '非新能源车', '其他'],
                orient: 'vertical',
                right: '10%',
                bottom: '10%',
                textStyle: {
                  color: '#7295a4',
                  fontSize: 15 * this.px_rate
                },
                itemWidth: 40 * this.px_rate,
                itemHeight: 15 * this.px_rate
            },
            series: [
              {
                type: 'pie',
                clockwise: true,
                startAngle: 90,
                radius: '80%',
                center: ['30%', '40%'],
                hoverAnimation: true,
                roseType: 'radius', //area
                emphasis: {
                    label: {
                        show: true
                    }
                },
                data: [
                  {
                      value: 335,
                      name: '火灾等报警',
                      label: {
                        fontSize: 14 * this.px_rate,
                      },
                      itemStyle: {
                        // color: new window.echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        //     offset: 0,
                        //     color: 'rgba(255,204,102,1)'
                        // }, {
                        //     offset: 1,
                        //     color: 'rgba(255,204,102,0.1)'
                        // }]),
                      }

                  },
                  {
                      value: 435,
                      name: '非新能源车',
                      label: {
                        fontSize: 14 * this.px_rate,
                      },
                      // itemStyle: {
                      //   color: new window.echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      //       offset: 0,
                      //       color: 'rgba(0,255,191,1)'
                      //   }, {
                      //       offset: 1,
                      //       color: 'rgba(0,255,191,0.1)'
                      //   }]),
                      // }
                  },
                  {
                      value: 280,
                      name: '其他',
                      label: {
                        fontSize: 14 * this.px_rate,
                      },
                      // itemStyle: {
                      //   color: new window.echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                      //       offset: 0,
                      //       color: 'rgba(46,154,245,1)'
                      //   }, {
                      //       offset: 1,
                      //       color: 'rgba(46,154,245,0.1)'
                      //   }]),
                      // }
                  },
                ],
                itemStyle: {
                    borderColor: '#081c25',
                    borderWidth: 4 * this.px_rate,
                },
                label: {
                    show: false,
                    position: 'outside',
                    formatter: '{b}',
                    color: '#7295a4'
                },
                labelLine: {
                    show: true,
                    smooth: true,
                    length: 20 * this.px_rate,
                    length2: 20 * this.px_rate,
                    lineStyle: {
                        width: 1 * this.px_rate,
                        color: '#01080e'
                    }
                },
                tooltip: {
                  padding: 5 * this.px_rate,
                  textStyle: {
                    fontSize: 14 * this.px_rate
                  }
                }
            }],
      }
      pie_chart.setOption(option)
      pie_chart.on('click', function() {
        pie_chart.clear()
        pie_chart.setOption(option)
      })
    },
    renderLineChart() {
      var line_chart = window.echarts.init(document.getElementById('alarm_type_line_chart'))
      var XName= ["第一季度","第二季度","第三季度","第四季度"]
      var data1 = [
        [123,154, 234, 32], [163, 321,278, 430], [53, 221,118, 360],
      ]
      var Line = ["非新能源车","火灾等报警","其他"];
      var color =['#00ffbf','#ffcc66','#2e9af5'];
      var datas = [];
      Line.map((item,index)=>{
        datas.push(
          {
            name: item,
            type: "line",
            yAxisIndex: 1,
            data: data1[index] ,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    color: color[index],
                }
            },
            lineStyle: {
              width: 2 * this.px_rate
            }
          }
        )
      })
      var option = {
        grid: {
          left: '10%',
          top: '5%',
          bottom: '25%',
          right: '25%',
        },
        legend: {
          type: "scroll",
          orient: 'vertical',
          data: Line,
          itemWidth: 18 * this.px_rate,
          itemHeight: 12 * this.px_rate,
          textStyle: {
            color: "#638f9e",
            fontSize: 12 * this.px_rate
          },
          bottom: '10%',
          right: '5%'
        },
        yAxis: [
          {
            type: 'value',
            position: 'left',
            splitLine: {
                show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                  color: '#6A989E',
                  width: 2 * this.px_rate
              }
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: '{value}',
                color: '#fff',
                fontSize: 10 * this.px_rate
            }
          },
          {
            type: 'value',
            position: 'left',
            nameTextStyle: {
                color: '#00FFFF'
            },
            splitLine: {
              show: false,
              lineStyle: {
                  type: 'dashed',
                  width: 2 * this.px_rate,
                  color: 'rgba(135,140,147,0.8)'
              }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: '{value}',
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: 10 * this.px_rate
            }
          },
        ],
        xAxis: [
          {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
              show: true,
              lineStyle: {
                  color: '#6A989E',
                  width: 2 * this.px_rate
              }
            },
            axisLabel: {
              inside: false,
              textStyle: {
                color: '#638f9e',
                fontSize: 12 * this.px_rate,
              }

            },
            data: XName,
          },
        ],
        series: datas,
      };
      line_chart.setOption(option)
    },
    changeLineChart(value) {
      this.selected_line_chart_option = value
      var line_chart = window.echarts.init(document.getElementById('alarm_type_line_chart'))
      var options = line_chart.getOption()

      var x_data = []
      var Line = ["非新能源车","火灾等报警","其他"];
      var color =['#00ffbf','#ffcc66','#2e9af5'];
      var datas = [];
      var data1 = [
        [Math.round(Math.random() * 130), Math.round(Math.random() * 300), Math.round(Math.random() * 230), Math.round(Math.random() * 90)], 
        [Math.round(Math.random() * 50), Math.round(Math.random() * 230), Math.round(Math.random() * 130), Math.round(Math.random() * 220)], 
        [Math.round(Math.random() * 300), Math.round(Math.random() * 90), Math.round(Math.random() * 80), Math.round(Math.random() * 140)],
      ]
      Line.map((item,index)=>{
        datas.push(
            {
                name: item,
                type: "line",
                yAxisIndex: 1,
                data: data1[index],
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        color: color[index],
                    }
                }
            }
        )
      })
      if (this.selected_line_chart_option === '季') {
        for (let index = 0; index < 4; index++) {
          x_data.push(`第${index + 1}季`)
        }
      }
      if (this.selected_line_chart_option === '年') {
        for (let index = 0; index < 4; index++) {
          x_data.push(`第${index + 1}年`)
        }
      }
      if (this.selected_line_chart_option === '月') {
        for (let index = 0; index < 4; index++) {
          x_data.push(`第${index + 1}月`)
        }
      }
      options.xAxis[0].data = x_data
      options.series = datas
      line_chart.setOption(options, true)
    },
    renderEquipmentPieChart() {
      var equip_pie_chart = window.echarts.init(document.getElementById('equip_pie_chart'))
      var option = {
        title: [
          {
            text: "AI盒子",
            left: '10%',
            top: '82%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 14 * this.px_rate,
              color: '#638f9e',
            }
          },
          {
            text: "视频源",
            left: '35%',
            top: '82%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 14 * this.px_rate,
              color: '#638f9e',
            }
          },
          {
            text: "即时呼叫设备",
            left: '57%',
            top: '82%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 14 * this.px_rate,
              color: '#638f9e',
            }
          },
          {
            text: "声光DTU",
            left: '83%',
            top: '82%',
            textStyle: {
              textAlign: 'center',
              fontWeight: 'normal',
              fontSize: 14 * this.px_rate,
              color: '#638f9e',
            }
          }
        ],
        series: [
          {
            type: 'pie',
            clockwise: true,
            radius: ['40%', '50%'],
            hoverAnimation: true,
            center: ['13%', '45%'],
            data: [
              {
                name: '47',
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 35 * this.px_rate,
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
            radius: ['40%', '50%'],
            hoverAnimation: true,
            center: ['38%', '45%'],
            data: [
              {
                name: '78',
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 35 * this.px_rate,
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
            radius: ['40%', '50%'],
            hoverAnimation: true,
            center: ['63%', '45%'],
            data: [
              {
                name: '104',
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 35 * this.px_rate,
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
            radius: ['40%', '50%'],
            hoverAnimation: true,
            center: ['87%', '45%'],
            data: [
              {
                name: '64',
                value: 50,
                label: {
                  position: 'center',
                  show: true,
                  fontSize: 35 * this.px_rate,
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
      equip_pie_chart.setOption(option)
      equip_pie_chart.on('click', function() {
        equip_pie_chart.clear()
        equip_pie_chart.setOption(option)
      })
      this.equip_pie_chart_change_interval = setInterval(() => {
        for (let index = 0; index < option.series.length; index++) {
          option.series[index].data[0].name = Math.round(Math.random() * 100);
        }
        equip_pie_chart.setOption(option)
      }, 3000);
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
.page2_header {
  height: 12.59253vh;
}
.page2_part1 {
  width:59.479vw;
  height:53.5184vh;
}
.page2_part4 {
  width:35.416vw;
  height: 26.6666vh;
  /* background-image: url('../assets/img/page2_part4_bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%; */
}
.page2_part4_bg {
  border-image: url('../assets/img/page2_part4_bg.png');
  border-top: 126px solid transparent;
  border-right: 180px solid transparent;
  border-bottom: 16px solid transparent;
  border-left: 47px solid transparent;
  border-image-slice: 130 215 18 53;
  border-image-repeat: stretch;
}
.page2_part2 {
  width:29.2708vw; 
  height:26.29617vh;
  /* background-image: url('../assets/img/page2_part2_3_bg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%; */
}
.page2_part2_bg {
  border-image: url('../assets/img/page2_part1_bg.png');
  border-top: 109px solid transparent;
  border-right: 96px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 28px solid transparent;
  border-image-slice: 253 192 20 50;
  border-image-repeat: stretch;
}
.page2_part_5_item {
  width: 11.5625vw;
  height: 16.29617vh;
}
.page2_part_5_item_bg {
  border-image: url('../assets/img/page2_part5_item_bg.png');
  border-top: 74px solid transparent;
  border-right: 129px solid transparent;
  border-bottom: 13px solid transparent;
  border-left: 50px solid transparent;
  border-image-slice: 91 157 14 42;
  border-image-repeat: stretch;
}
#classification_alarm_pie_chart {
  height: 19.4444vh;
}
#alarm_type_line_chart {
  height: 19.4444vh;
}
#equip_pie_chart {
  height: 19.4444vh;
}
.img2 {
  border-image: url('../assets/img/page2_part1_bg.png') 30 round;
  border-top: 213px solid transparent;
  border-right: 198px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 41px solid transparent;
  border-image-slice: 242 191 20 43;
  border-image-repeat: stretch;
}

</style>