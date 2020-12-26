import Vue from 'vue'
import Vuex from 'vuex'
// =======================
import TrendingNow from "../assets/data/Home/TrendingNow";
import Album from "../assets/data/Home/Album";
import Feature from "../assets/data/Home/Feature";
import Top5 from '../assets/data/Topsongs/Top5'
import Chart from '../assets/data/Topsongs/Chart'
import TopUsUk from '../assets/data/Topsongs/TopUsUk'
import TopVietNam from '../assets/data/Topsongs/TopVietNam';
import TopCpop from '../assets/data/Topsongs/TopCpop';

import Database from '../assets/data/database';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    TrendingNow,
    Album,
    Feature,
    Top5,
    Chart,
    TopUsUk,
    TopVietNam,
    TopCpop,
    Database
  },
  mutations: {
    appendSong: (state, song) => {
      state.Database.push(song);
    }
  },
  actions: {
    addSong: ({ commit }, song) => {
      commit("appendSong", song);
    }
  },
  modules: {
  }
})
