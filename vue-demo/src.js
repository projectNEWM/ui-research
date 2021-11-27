// --------Demo --------------------

const Demo = {
    data() {
      return {
        show: true
      }
    }
  }
  
  Vue.createApp(Demo).mount('#demo')

// --------Demo 2--------------------

const Demo2 = {
data() {
    return {
    show: true
    }
}
}
Vue.createApp(Demo2).mount('#demo2')

// --------Demo 3--------------------


const Demo3 = {
  data() {
    return {
      x: 0
    }
  },
  methods: {
    xCoordinate(e) {
      this.x = e.clientX
    }
  }
}

Vue.createApp(Demo3).mount('#demo3')


// --------Demo 4--------------------


const Demo4 = {
  data() {
    return {
      show: true
    }
  }
}

Vue.createApp(Demo4).mount('#demo4')

// --------Demo 5--------------------

const Demo5 = {
  data() {
    return {
      show: false
    }
  },
  methods: {
    beforeEnter(el) {
      gsap.set(el, {
        scaleX: 0.8,
        scaleY: 1.2
      })
    },
    enter(el, done) {
      gsap.to(el, {
        duration: 1,
        scaleX: 1.5,
        scaleY: 0.7,
        opacity: 1,
        x: 150,
        ease: 'elastic.inOut(2.5, 1)',
        onComplete: done
      })
    },
    leave(el, done) {
       gsap.to(el, {
        duration: 0.7,
        scaleX: 1,
        scaleY: 1,
        x: 300,
        ease: 'elastic.inOut(2.5, 1)',
      })
      gsap.to(el, {
        duration: 0.2,
        delay: 0.5,
        opacity: 0,
        onComplete: done
      })
    }
  }
}
Vue.createApp(Demo5).mount('#demo5')


// --------Demo 6--------------------

const Demo6 = {
  data() {
    return {
      on: false
    }
  }
}

Vue.createApp(Demo6).mount('#demo6')

// --------Demo 7--------------------

const Demo7 = {
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    };
  },
  methods: {
    shuffle() {
      this.items = _.shuffle(this.items);
    }
  }
};

Vue.createApp(Demo7).mount("#flip-list-demo");

// --------Demo 8--------------------

const Demo8 = {
  data() {
    return {
      query: '',
      list: [
        { msg: 'Bruce Lee' },
        { msg: 'Jackie Chan' },
        { msg: 'Chuck Norris' },
        { msg: 'Jet Li' },
        { msg: 'Kung Fury' }
      ]
    }
  },
  computed: {
    computedList() {
      var vm = this
      return this.list.filter((item) => {
        return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
      el.style.height = 0
    },
    enter(el, done) {
      gsap.to(el, { 
        opacity: 1, 
        height: '1.6em',
        delay: el.dataset.index * .15,
        onComplete: done
      })
    },
    leave(el, done) {
      gsap.to(el, { 
        opacity: 0, 
        height: 0,
        delay: el.dataset.index * .15,
        onComplete: done
      })
    }
  }
}

Vue.createApp(Demo8).mount('#demo8')

// --------Demo 9-------------------

const Demo9 = {
  data() {
    return {
      number: 0,
      tweenedNumber: 0
    }
  },
  computed: {
    animatedNumber() {
      return this.tweenedNumber.toFixed(0)
    }
  },
  // Watchers allow us to animate changes of any numerical property into another property.
  // Here is an example of this using Green Sock
  watch: {
    number(newValue) {
      // we're watching the data 
      // when it changes, apply an animation of 0.5 seconfs
      gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue })
    }
  }
}

Vue.createApp(Demo9).mount('#animated-number-demo')


