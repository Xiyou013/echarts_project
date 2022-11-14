<template>
  <div class="two-first">
    <div class="echartsOne">第三个echarts</div>
    <div class="real_vehicle">
      <!-- <div class="vehicle_echarts"></div> -->
      <vehicle-echarts></vehicle-echarts>
    </div>
  </div>
</template>

<script setup>
import VehicleEcharts from '../../test2/components/vehicleEchartsfour.vue'

</script>

<style lang="less" scoped>
.two-first{
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background-color: #fff;
}
.echartsOne {
  font-size: 30px;
}

.real_vehicle {
  width: calc(100% -230px);
  height: calc(100vh - 200px);
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