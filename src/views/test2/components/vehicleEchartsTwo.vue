<template>
    <div ref="vehicle1" id="vehicle2"></div>
</template>

<script setup>
// import dayjs from 'dayjs'
import { inject, onMounted, reactive, ref } from 'vue'
import { getTwoData } from '@/api/echarts'

let echarts = inject('ec')
// const colorList = ['#F1B164', '#05D2FC']
// let vehicle2 = 'vehicle2'
let myChart

// const changeSize = (val) => {
//     let nowClientWidth =
//         window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
//     // console.log('nowClientWidth', nowClientWidth)
//     return val * (nowClientWidth / 1920)
// }

// const nowSize = (val) => {
//     //   console.log(val instanceof Array)
//     let data = ''
//     let arr = []
//     if (typeof val === 'object') {
//         if (val instanceof Array) {
//             val.forEach((item) => {
//                 let size = changeSize(item)
//                 arr.push(size)
//             })
//             data = arr
//         }
//     } else {
//         data = changeSize(val)
//     }
//     //   console.log('data::', data)
//     return data
// }

// const getListData = () => {
// data.forEach((item, index) => {
//     item.lineStyle = {
//         color: colorList[index],
//         width: 2
//     }
//     item.yAxisIndex = index
// })

// }

let time = ref([
    {
        name: 'Direct',
        type: 'bar',
        emphasis: {
            focus: 'series'
        },
        data: [
            // 320, 332, 301, 334, 390, 330, 320
        ]
    },
    {
        name: 'Email',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
            focus: 'series'
        },
        data: [
            // 120, 132, 101, 134, 90, 230, 210
        ]
    },
    {
        name: 'Union Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
            focus: 'series'
        },
        data: [
            // 220, 182, 191, 234, 290, 330, 310
        ]
    },
    {
        name: 'Video Ads',
        type: 'bar',
        stack: 'Ad',
        emphasis: {
            focus: 'series'
        },
        data: [
            // 150, 232, 201, 154, 190, 330, 410
        ]
    },
])

const data = reactive({
    options: {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        // legend: {},
        grid: {
            left: '0%',
            right: '0%',
            top: '15%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel: {
                    // ????????????????????????????????????
                    show: true, // ????????????
                    color: '#E4E9EB', // x???????????????
                    fontSize: 17, //
                    margin: 15, // x???????????????x?????????
                },
                // x???????????????
                axisLine: {
                    lineStyle: {
                        color: '#E4E9EB',
                        width: 2
                    }
                },
                // x??????????????????
                axisTick: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '???/???',
                // ????????????
                nameLocation: 'end',
                // ????????????
                nameGap: 20,
                // y?????????????????????
                nameTextStyle: {
                    color: '#E4E9EB',
                    fontSize: 15,
                    padding: [0, 50, 0, 0]
                },
                axisLabel: {
                    // ????????????????????????????????????
                    show: true, // ????????????
                    color: '#E4E9EB', // y???????????????
                    fontSize: 17,
                    margin: 15
                },
                // y????????????????????????
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: 2,
                        color: 'rgba(228, 233, 235, 0.1)'
                    }
                }
            }
        ],
        series: time.value
    }
})

// ??????????????????
const initChart = () => {
    // setTimeout(() => {
    console.log('12132123');
    // //????????????????????????echarts????????????????????????????????????????????????
    // let myChart = echarts.getInstanceByDom(
    //     document.getElementById('vehicle2')
    // );
    // if (myChart == null) {
    //     console.log('123');
    //     myChart = echarts.init(document.getElementById('vehicle2'));
    //     myChart.setOption(data.options);
    // }
    if (myChart !== null && myChart !== '' && myChart !== undefined) {
        // ??????
        myChart.dispose()
    }
    myChart = echarts.init(document.getElementById('vehicle2'))
    myChart.setOption(data.options)
    // }, 2000)

}
// ?????????????????????y???????????????
// const changeyAxis = () => {
//     data.options.yAxis[0].axisLabel.fontSize = nowSize(17)
//     data.options.yAxis[1].axisLabel.fontSize = nowSize(17)
//     data.options.yAxis[0].axisLabel.margin = nowSize(15)
//     data.options.yAxis[1].axisLabel.margin = nowSize(15)
//     data.options.yAxis[0].nameTextStyle.fontSize = nowSize(15)
//     data.options.yAxis[1].nameTextStyle.fontSize = nowSize(17)
//     data.options.yAxis[0].nameTextStyle.padding = nowSize([0, 50, 0, 0])
//     data.options.yAxis[1].nameTextStyle.padding = nowSize([0, 0, 0, 50])
//     data.options.yAxis[0].nameGap = nowSize(20)
//     data.options.yAxis[1].nameGap = nowSize(20)
//     data.options.yAxis[0].splitLine.lineStyle.width = nowSize(2)
//     data.options.yAxis[1].splitLine.lineStyle.width = nowSize(2)
// }
// ?????????????????????x???????????????
// const changexAxis = () => {
//     data.options.xAxis.axisLabel.fontSize = nowSize(17)
//     data.options.xAxis.axisLabel.margin = nowSize(15)
//     data.options.xAxis.axisLine.lineStyle.width = nowSize(2)
// }
const getListData = () => {
    getTwoData().then((res) => {
        console.log('res:::', res);
        if (res.data.data) {
            time.value.forEach((item, index) => {
                item.data = res.data.data[index]
            })
            initChart()
        }
    }).catch((err) => {
        console.log('err:::', err);
    })
}

onMounted(() => {
    getListData()
    // nextTick(() => {
    //     initChart()
    // })
    // initChart()
})
window.addEventListener('resize', () => {
// window.onresize = (ec) => {
    // ????????????????????????
    // myChart.resize() // ?????????????????????
    console.log('22222222')
    // changeyAxis()
    // changexAxis()
    // myChart.setOption(data.options)
    myChart.resize() // ?????????????????????
    // if (ec) return
})
</script>

<style>
.vehicle_echarts {
    width: 92vw;
    height: 28vh;
    /* background-color: blanchedalmond; */
    opacity: 0.7;
    font-size: 1.3vw;
}

.vehicle_echarts1 {
    width: 65vw;
    height: 35vh;
    /* background-color: blanchedalmond; */
    opacity: 0.7;
    font-size: 1.3vw;
}

#vehicle2 {
    width: 90%;
    /* height: 100%; */
    height: inherit;
    margin-left: 5%;
}
</style>
