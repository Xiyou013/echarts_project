<template>
    <div class="zdiv">
        <div class="echartsOne">第二个echarts</div>
        <div class="real_vehicle">
            <!-- <div class="vehicle_echarts"></div> -->
            <vehicle-echarts-two></vehicle-echarts-two>
        </div>
    </div>
</template>

<script setup>
import vehicleEchartsTwo from './components/vehicleEchartsTwo.vue'
</script>

<style lang="less" scoped>
// body,
// html {
//     margin: 0 !important;
//     padding: 0 !important;
// }
.zdiv {
    width: 100vw;
    height: 100vh;
}

.echartsOne {
    font-size: 30px;
}

.real_vehicle {
    width: 100vw;
    height: calc(100vh - 50px);
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