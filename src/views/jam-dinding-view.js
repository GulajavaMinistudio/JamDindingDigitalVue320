import { mapGetters } from 'vuex';

const JamDindingComponent = () => import(/* webpackChunkName: "jam-dinding-component" */ '@/components/jam-dinding/JamDindingComponent.vue');

export default {
  name: 'JamDindingView',
  components: {
    'jam-dinding': JamDindingComponent,
  },
  data() {
    return {
      key: 'value',
    };
  },
  methods: {
    setTanggalSekarang() {
      this.$store.dispatch('DateTanggalModule/getTanggalbakuActions');
    },
  },
  computed: {
    ...mapGetters('DateTanggalModule', {
      stringWaktuTanggal: 'getTanggalBaku',
    }),
    ...mapGetters('DateTanggalModule', {
      stringTanggals: 'getTanggalBaku',
    }),
  },
  mounted() {
    this.setTanggalSekarang();
  },
};
