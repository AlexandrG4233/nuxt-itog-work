<template>
  <ol-map class="the-map">
    <ol-view
      :enableRotation="false"
      :center="center"
      :zoom="15"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-vector-layer>
      <ol-source-vector :projection="projection">
        <ol-feature>
          <ol-geom-point :coordinates="center"></ol-geom-point>
          <ol-style>
            <ol-style-circle :radius="0"></ol-style-circle>
          </ol-style>
        </ol-feature>
      </ol-source-vector>
    </ol-vector-layer>

    <ol-overlay
      :position="center"
      :offset="[30, 30]"
      positioning="bottom-center"
    >
      <div class="custom-marker">
        <img src="/icons/logo.svg" alt="Logo" width="78" height="57" />
      </div>
    </ol-overlay>

    <ol-interaction-mouse-wheel-zoom :condition="shiftKeyOnly" />
  </ol-map>
</template>

<script setup>
import { fromLonLat } from "ol/proj";
import { shiftKeyOnly } from "ol/events/condition";

const projection = ref("EPSG:3857");
const zoom = ref(15);
const center = ref(fromLonLat([84.978389, 56.454001]));
</script>