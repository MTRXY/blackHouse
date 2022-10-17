<template>
  <div class="answet">
    <NavBar />
    <h4 class="title">{{name}}</h4>
    <br />
    <p>{{answet}}</p>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import { mapState, mapActions, mapMutations } from "vuex";
import { SET_ANSWET_ID } from "../../store/constant";
export default {
  name: "Answet",
  components: { NavBar },
  data() {
    return {
      name: ""
    };
  },
  computed: {
    ...mapState("module_question", ["answet", "answetId"])
  },
  methods: {
    ...mapActions("module_question", { getAnswet: "getAnswet" }),
    ...mapMutations("module_question", [SET_ANSWET_ID])
  },
  created() {
    let id = this.$route.query.id;
    if (this.answetId) {
      // 如果有ID则判断ID是和上次问题ID相同
      if (this.answetId == id) {
        return;
      } else {
        // ID不同则替换原本ID和调取接口
        this.SET_ANSWET_ID(id);
        this.getAnswet(id);
      }
    } else {
      // 没有ID则表示为第一次看则直接调取接口并存入VUEX且存入id
      this.getAnswet(id);
      this.SET_ANSWET_ID(id);
    }
  },
  mounted() {
    this.name = this.$route.query.name;
  }
};
</script>

<style scoped>
.title {
  text-align: center;
  font-size: 25px;
  font-weight: 700;
}
p {
  text-indent: 1rem;
  line-height: 40px;
  font-size: 20px;
}
</style>