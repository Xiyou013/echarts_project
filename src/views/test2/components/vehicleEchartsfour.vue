<template>
    <div ref="vehicle1" id="vehicle2"></div>
</template>

<script setup>
import dayjs from 'dayjs'
import { inject, onMounted, reactive, ref } from 'vue'
import { getOneData } from '@/api/echarts'

let echarts = inject('ec')
const colorList = ['#F1B164', '#05D2FC']
let myChart

const changeSize = (val) => {
    let nowClientWidth =
        window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    console.log('nowClientWidth', nowClientWidth)
    return val * (nowClientWidth / 1920)
}

const nowSize = (val) => {
    console.log(12312132132,val)
    let data = ''
    let arr = []
    if (typeof val === 'object') {
        if (val instanceof Array) {
            val.forEach((item) => {
                let size = changeSize(item)
                arr.push(size)
            })
            data = arr
        }
    } else {
        data = changeSize(val)
    }
    //   console.log('data::', data)
    return data
}

const getListData = () => {
    getOneData().then((res) => {
        console.log('res:::', res);
        if (res.data.data) {
            time.value.forEach((item, index) => {
                item.data = res.data.data[index]
                item.lineStyle = {
                    color: colorList[index],
                    width: 2
                }
                item.yAxisIndex = index
            })
            initChart()
        }

    }).catch((err) => {
        console.log('err:::', err);
    })
}

let time = ref([
    {
        data: [
            // 500, 800, 500, 200, 505, 700, 900, 700, 505, 600, 800, 905, 800, 700, 500, 40, 60, 75, 70, 60,
            // 40, 35, 60, 20
        ],
        type: 'line',
        smooth: true,
        symbol: 'none',
        name: '小车1'
        // 对准左侧y轴
        // yAxisIndex: 0
    },
    {
        data: [
            // 0, 20, 40, 58, 62, 50, 35, 55, 60, 70, 75, 65, 50, 40, 50, 70, 80, 95, 80, 60, 55, 70, 90, 70
        ],
        type: 'line',
        smooth: true,
        symbol: 'none',
        name: '小车2'
        // 对准右侧y轴
        // yAxisIndex: 1
    }
])

const data = reactive({
    options: {
        // 图例设置
        // legend: {},
        // 在canvas中占据的大小
        grid: {
            left: '0%',
            right: '0%',
            top: '15%',
            bottom: '3%',
            containLabel: true
        },
        // 辅助线提示
        // tooltip: {
        //   trigger: 'axis'
        // },
        xAxis: {
            type: 'category',
            data: [
                '2022-08-10 01:00:00',
                '2022-08-10 02:00:00',
                '2022-08-10 03:00:00',
                '2022-08-10 04:00:00',
                '2022-08-10 05:00:00',
                '2022-08-10 06:00:00',
                '2022-08-10 07:00:00',
                '2022-08-10 08:00:00',
                '2022-08-10 09:00:00',
                '2022-08-10 10:00:00',
                '2022-08-10 11:00:00',
                '2022-08-10 12:00:00',
                '2022-08-10 13:00:00',
                '2022-08-10 14:00:00',
                '2022-08-10 15:00:00',
                '2022-08-10 16:00:00',
                '2022-08-10 17:00:00',
                '2022-08-10 18:00:00',
                '2022-08-10 19:00:00',
                '2022-08-10 20:00:00',
                '2022-08-10 21:00:00',
                '2022-08-10 22:00:00',
                '2022-08-10 23:00:00',
                '2022-08-10 00:00:00'
            ],
            axisLabel: {
                // 坐标轴刻度标签的相关设置
                show: true, // 控制显隐
                color: '#E4E9EB', // x轴字体颜色
                fontSize: nowSize(17), //
                margin: nowSize(15), // x轴标签距离x轴距离
                formatter: (value) => {
                    return dayjs(new Date(value)).format('HH:mm')
                }
            },
            // x轴样式设置
            axisLine: {
                lineStyle: {
                    color: '#E4E9EB',
                    width: nowSize(2)
                }
            },
            // x轴刻度线显隐
            axisTick: {
                show: false
            }
        },
        yAxis: [
            // 左侧y轴
            {
                type: 'value',
                name: '米/秒',
                // 名称位置
                nameLocation: 'end',
                // 名称间隔
                nameGap: nowSize(20),
                // y轴名称样式设置
                nameTextStyle: {
                    color: '#E4E9EB',
                    fontSize: nowSize(15),
                    padding: nowSize([0, 50, 0, 0])
                },
                axisLabel: {
                    // 坐标轴刻度标签的相关设置
                    show: true, // 控制显隐
                    color: '#E4E9EB', // y轴字体颜色
                    fontSize: nowSize(17),
                    margin: nowSize(15)
                },
                // y轴分割线样式设置
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: nowSize(2),
                        color: 'rgba(228, 233, 235, 0.1)'
                    }
                }
            },
            // 右侧y轴
            {
                type: 'value',
                name: 'hz',
                // min: 0,
                // max: 100,
                // 名称位置
                nameLocation: 'end',
                // 名称间隔
                nameGap: nowSize(20),
                // y轴名称样式设置
                nameTextStyle: {
                    color: '#E4E9EB',
                    fontSize: nowSize(17),
                    padding: nowSize([0, 0, 0, 50])
                },
                axisLabel: {
                    // 坐标轴刻度标签的相关设置
                    show: true, // 控制显隐
                    color: '#E4E9EB', // y轴字体颜色
                    fontSize: nowSize(17),
                    margin: nowSize(15)
                },
                // y轴分割线样式设置
                splitLine: {
                    show: true,
                    lineStyle: {
                        width: nowSize(2),
                        color: 'rgba(228, 233, 235, 0.1)'
                    }
                }
            }
        ],
        // 相关数据
        series: time.value
    }
})

// 初始化折线图
const initChart = () => {
    // setTimeout(() => {
    // let myChart = echarts.getInstanceByDom(
    //     document.getElementById('vehicle2')
    // );
    // if (myChart == null) {
    //     console.log('789');
    //     myChart = echarts.init(document.getElementById('vehicle2'));
    // }
    // myChart.setOption(data.options);
    if (myChart !== null && myChart !== '' && myChart !== undefined) {
        // 销毁
        myChart.dispose()
    }
    myChart = echarts.init(document.getElementById('vehicle2'))
    myChart.setOption(data.options)
    // }, 2000)

}
// 监听更改折线图y轴有关数据
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
//     myChart.setOption(data.options)
// }
// // 监听更改折线图x轴有关数据
// const changexAxis = () => {
//     data.options.xAxis.axisLabel.fontSize = nowSize(17)
//     data.options.xAxis.axisLabel.margin = nowSize(15)
//     data.options.xAxis.axisLine.lineStyle.width = nowSize(2)
// }
const changeDataSize = () => {
    return {
        xAxis: {
            axisLabel: {
                // 坐标轴刻度标签的相关设置
                fontSize: nowSize(17), //
                margin: nowSize(15), // x轴标签距离x轴距离
            },
            // x轴样式设置
            axisLine: {
                lineStyle: {
                    width: nowSize(2)
                }
            },
        },
        yAxis: [
            // 左侧y轴
            {
                // 名称间隔
                nameGap: nowSize(20),
                // y轴名称样式设置
                nameTextStyle: {
                    fontSize: nowSize(15),
                    padding: nowSize([0, 50, 0, 0])
                },
                axisLabel: {
                    // 坐标轴刻度标签的相关设置
                    fontSize: nowSize(17),
                    margin: nowSize(15)
                },
                // y轴分割线样式设置
                splitLine: {
                    lineStyle: {
                        width: nowSize(2),
                    }
                }
            },
            // 右侧y轴
            {
                nameGap: nowSize(20),
                // y轴名称样式设置
                nameTextStyle: {
                    fontSize: nowSize(17),
                    padding: nowSize([0, 0, 0, 50])
                },
                axisLabel: {
                    // 坐标轴刻度标签的相关设置
                    fontSize: nowSize(17),
                    margin: nowSize(15)
                },
                // y轴分割线样式设置
                splitLine: {
                    lineStyle: {
                        width: nowSize(2),
                    }
                }
            }
        ],
    }
}

onMounted(() => {
    getListData()
    // nextTick(() => {
    //     initChart()
    // })


    // initChart()
})
// window.onresize = (ec) => {
window.addEventListener('resize', () => {
    // 监听窗口大小变化
    // myChart.resize() // 自适应大小变化
    console.log('111111')
    // changeyAxis()
    // changexAxis()
    let option = changeDataSize()
    myChart.setOption(option)
    myChart.resize() // 自适应大小变化
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
