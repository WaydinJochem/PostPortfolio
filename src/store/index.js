import { createStore } from 'vuex'
const link = "https://waydinjochem.github.io/PostPortfolio.github.io/db.json"

export default createStore({
  state: {
    skills: null,
    skill: null
  },
  mutations: {
    setSkills: (state, skills) => {
      state.skills = skills;
    },
    setSkill: (state, skill) => {
      state.skill = skill
    }
  },
  actions: {
    async fetchSkills(context) {
      try {
       let { skills } = await (
        await fetch(`${link}`)
       ).json();
       if(skills) {
        context.commit("setSkills", skills);
       }
       else {
        alert("Unable to fetch skills")
       }
      }
      catch(e) {
        console.error(error);
      }
    }
  }
})
