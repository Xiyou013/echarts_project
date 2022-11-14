<template>
    <div class="zdiv">
        <div class="leftdiv">
            <el-menu :default-active="activeName" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                @select="handleSelect">
                <!-- <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <Location />
                        </el-icon>
                        <span>Navigator One</span>
                    </template>
                    <el-menu-item-group title="Group One">
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="Group Two">
                        <el-menu-item index="1-3">item three</el-menu-item>
                    </el-menu-item-group>
                    <el-sub-menu index="1-4">
                        <template #title>item four</template>
                        <el-menu-item index="1-4-1">item one</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu> -->
                <el-menu-item index="1">
                    <el-icon>
                        <Location />
                    </el-icon>
                    <span>Navigator One</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <el-icon>
                        <IconMenu />
                    </el-icon>
                    <span>Navigator Two</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <el-icon>
                        <Document />
                    </el-icon>
                    <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <setting />
                    </el-icon>
                    <span>Navigator Four</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="rightdiv">
            <div v-if="activeName === '1'" class="real_vehicle">
                <vehicle-echarts></vehicle-echarts>
            </div>
            <div v-if="activeName === '2'" class="real_vehicle">
                <vehicle-echarts-two></vehicle-echarts-two>
            </div>
            <div v-if="activeName === '4'" class="real_vehicle">
                <vehicle-echarts-three></vehicle-echarts-three>
            </div>
        </div>
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

import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

let activeName = ref('2')

// 打开当前菜单 如果没有子菜单的话，点击只会触发一次
const handleOpen = (key, keyPath) => {
    console.log('111', key, keyPath)
    activeName.value = key
}
// 关闭当前菜单
const handleClose = (key, keyPath) => {
    console.log('222', key, keyPath)
    activeName.value = key
}
// 选择菜单触发
const handleSelect = (key, keyPath) => {
    console.log('333', key, keyPath)
    activeName.value = key
}
</script>

<style lang="less" scoped>
.zdiv {
    width: 100vw;
    height: 100vh;
    display: flex;
}

.leftdiv {
    width: 20vw;
    height: 100vh;
    background-color: burlywood;
}

.rightdiv {
    width: 80vw;
    height: 100vh;
    background-color: cadetblue;

    .real_vehicle {
        width: 100%;
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
}
</style>