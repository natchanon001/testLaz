<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul> -->
    <b-container fluid>
      <b-row>
        <b-col cols="2"> 
          <b-button variant="white" href="https://www.lazada.co.th" >
          <b-img src="//laz-img-cdn.alicdn.com/images/ims-web/TB1KB2laMFY.1VjSZFnXXcFHXXa.png" fluid alt="Responsive image"></b-img>
          </b-button>
        </b-col>
        <b-col>
          <b-input-group class="mt-3">
            <b-form-input type="search" placeholder="ค้นหาในลาซาด้า"></b-form-input>
          <b-input-group-append>
        <b-button style="background-color: rgb(255, 69, 0);" variant="outline-light">
          <b-icon icon="search" ></b-icon>
        </b-button>
    </b-input-group-append>
  </b-input-group>
          <!-- <b-row>
            <b-col cols="6" class="search-pad">
              <b-form-input type="search" placeholder="ค้นหาในลาซาด้า"></b-form-input>
            </b-col>
            <b-col cols="6">
              <b-button style="background-color: rgb(255, 69, 0);" variant="outline-light" >
                <b-icon icon="search" ></b-icon>
              </b-button>
            </b-col>
          </b-row> -->
        </b-col>
        <b-col cols="1"> 
          <b-button variant="white" href="https://www.lazada.co.th"  >
          <b-icon icon="cart2" ></b-icon></b-button>
        </b-col>
        <b-col cols="2">
          <b-button variant="white" href="https://www.lazada.co.th" >
          <b-img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1DcZESBr0gK0jSZFnXXbRRXXa.jpg" fluid alt="Responsive image"></b-img></b-button>
        </b-col>
      </b-row>
      
    

      <b-row >
        <b-col cols="2"> 
          <b-dropdown id="dropdown-1" text="หมวดหมู่" class="m-md-2" variant="white">
            <b-dropdown id="dropdown-dropright" size="sm" dropright text="อุปกรณ์ อิเล็กทรอนิกส์" class="m-2" variant="white">
              <b-dropdown-item href="#">มือถือ</b-dropdown-item>
              </b-dropdown>
            <b-dropdown id="dropdown-dropright" size="sm" dropright text="อุปกรณ์เสริม อิเล็กทรอนิกส์" class="m-2" variant="white">
              <b-dropdown-item>อุปกรณ์เสริมมือถือ</b-dropdown-item>
              </b-dropdown>
            <b-dropdown id="dropdown-dropright" size="sm" dropright text="ทีวีเครื่องใช้ไฟฟ้าในบ้าน" class="m-2" variant="white">
              <b-dropdown-item>ทีวี</b-dropdown-item>
              </b-dropdown>
          </b-dropdown>
        </b-col>
        <b-col cols="10" md="2" align-self="end" >
          <p>LazMall</p>
        </b-col>
      </b-row>

      <b-row >
        <b-col md="2">
          <a href="https://www.lazada.co.th">หน้าหลัก</a>
        </b-col>
      </b-row>
        <p></p>
      <b-row>
        <b-col cols="2">
          <b-row>
            <p>หมวดหมู่ที่เกี่ยวข้อง</p>
            <a href="#">กระเป๋าสะพายข้าง</a>
          </b-row>
          <p></p>
          <b-row>
            <p>ขนาดสินค้า</p>
              <b-form-select v-model="selected" :options="options"></b-form-select>
              <div class="mt-3"><strong>{{ selected }}</strong></div>
                  <b-form-checkbox id="checkbox-1">
                    &nbsp;&nbsp;&nbsp;38
                  </b-form-checkbox>  
          </b-row>
        </b-col>

        <b-col>  
          <b-row>
            <b-col md="3">
              <h5>Lazada Thailand</h5>
            </b-col>
          </b-row>

          <!-- <b-row>
            <b-col cols="6" md="5">
              <h6>678880 ค้นพบสินค้าสำหรับ "lazada thailand"</h6>
            </b-col>
            <b-col md="5" align-self="start">
              <b-dropdown id="dropdown-1" text="เกี่ยวข้อง" class="m-md-2" variant="light">
              </b-dropdown>
            </b-col>
            <b-col cols="2">
              <p>...</p>
            </b-col>
          </b-row> -->

          <b-row>
            <b-col>
              <router-view></router-view>
            </b-col>
          </b-row>
        </b-col>
      </b-row>

      <b-row>
        <!-- <p><router-link to="h2">Go to Home2</router-link></p> -->
        <p>Foot</p>
        <p>Foot</p>
        <p>Foot</p>

      </b-row>


    </b-container>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'EU' },
        { value: null, text: 'INT' },
      ]
    }
  },
  methods: {
    changePage: () => {
      // event.preventDefault();
      console.log("watched called");
      this.$router.push('/h2')
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    text-decoration: none;
    color:black
  }
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
