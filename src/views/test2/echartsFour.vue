<template>
    <div>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="User" name="first">
                <div>一</div>
                <div v-if="activeName === 'first'" class="real_vehicle">
                    <!-- <div class="vehicle_echarts"></div> -->
                    <vehicle-echarts></vehicle-echarts>
                </div>
            </el-tab-pane>
            <el-tab-pane label="Config" name="second">
                <div>二</div>
                <div v-if="activeName === 'second'" class="real_vehicle">
                    <!-- <div class="vehicle_echarts"></div> -->
                    <vehicle-echarts-two></vehicle-echarts-two>
                </div>
            </el-tab-pane>
            <el-tab-pane label="Role" name="third">
                <div>三</div>
                <div v-if="activeName === 'third'" class="real_vehicle">
                    <!-- <div class="vehicle_echarts"></div> -->
                    <vehicle-echarts-three></vehicle-echarts-three>
                </div>
            </el-tab-pane>
            <!-- <el-tab-pane label="Task" name="fourth">Task</el-tab-pane> -->
        </el-tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';
// import echartsOneVue from './echartsOne.vue';
// import echartsTwoVue from './echartsTwo.vue';
// import echartsThreeVue from './echartsThree.vue';
import VehicleEcharts from './components/vehicleEcharts.vue'
import vehicleEchartsTwo from './components/vehicleEchartsTwo.vue'
import vehicleEchartsThree from './components/vehicleEchartsThree.vue'



const activeName = ref('first')

const handleClick = (tab, event) => {
    console.log(tab, event)
}
</script>

<style lang="less" scoped>
.real_vehicle {
    width: 100vw;
    height: calc(100vh - 150px);
    // background-color: blanchedalmond;
    // background-image: url(./image/h3c-real-vehicle.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    // margin-left: 5vw;
    // padding: 8vh 1vw 0vh 1vw;
    border: 0.1vh solid #000;
    box-sizing: border-box;
    background: currentColor;
}
</style>