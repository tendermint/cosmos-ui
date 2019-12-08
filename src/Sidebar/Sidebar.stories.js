import Sidebar from "./Sidebar.vue";
import data from "./data"

export default {
  title: "Sidebar"
};

export const normal = () => ({
  components: { Sidebar },
  data: function () {
    return {
      visible: null,
      data: data.sidebar,
    }
  },
  template: `
    <div>
      <div>
        <Sidebar :visible="visible" v-if="visible" @visible="visible = $event">
          <p v-for="text in data.lorem">{{text}}</p>
        </Sidebar>
        <div>
          <button @click="visible = !visible">Toggle</button> {{!!visible}}
          <p v-for="text in data.lorem">{{text}}</p>
        </div>
      </div>
    </div>
  `
});

export const wide = () => ({
  components: { Sidebar },
  data: function () {
    return {
      visible: null,
      data: data.sidebar,
    }
  },
  template: `
    <div>
      <div>
        <Sidebar :visible="visible" v-if="visible" @visible="visible = $event" width="100vw" max-width="100vw">
          <p v-for="text in data.lorem">{{text}}</p>
        </Sidebar>
        <div>
          <button @click="visible = !visible">Toggle</button> {{!!visible}}
          <p v-for="text in data.lorem">{{text}}</p>
        </div>
      </div>
    </div>
  `
});

export const right = () => ({
  components: { Sidebar },
  data: function () {
    return {
      visible: null,
      data: data.sidebar,
    }
  },
  template: `
    <div>
      <div>
        <Sidebar :visible="visible" v-if="visible" @visible="visible = $event" background-color="rgba(255,255,255,0)" box-shadow="0 0 50px 0 rgba(0,0,0,.25)" side="right">
          <p v-for="text in data.lorem">{{text}}</p>
        </Sidebar>
        <div>
          <button @click="visible = !visible">Toggle</button> {{!!visible}}
          <p v-for="text in data.lorem">{{text}}</p>
        </div>
      </div>
    </div>
  `
});