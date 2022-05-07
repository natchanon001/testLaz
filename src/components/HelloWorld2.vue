<template>
  <div class="hello">
    <b-row >
            <b-col cols="3" md="5">
              <h6>678880 ค้นพบสินค้าสำหรับ "lazada thailand"</h6>
            </b-col>
            <b-col cols="2" md="2" align-self="start">
              <h6>เรียงตาม:</h6>
            </b-col>
            <b-col cols="4" md="1" align-self="start">
              <b-form-select v-model="selected" :options="options"></b-form-select>
            </b-col>
            <b-col cols="3" align-self="start">
              <p>รูปแบบ:</p>&nbsp;
              <router-link to="/">
                <b-icon icon="ui-checks-grid" ></b-icon>
              </router-link>
              &nbsp;
              <router-link to="h2">
                <b-icon icon="ui-checks" ></b-icon>
              </router-link>
            </b-col>
    </b-row>
    <p></p>
    <b-row>
      <b-col cols="12" >
        <b-card img-src="https://lzd-img-global.slatic.net/g/p/37e06caee8fb0555b1dafa339e1dd735.png_200x200q80.jpg_.webp" img-alt="Card image" img-left class="mb-3">
          <a href="https://www.lazada.co.th/products/fashion-giant-ge-zi-2020-i2246189399.html" class="card-link" >Fashion giant กระเป๋าสะพายกระเป๋าแฟชั่น ge zi 2020</a>
            <b-card-text>
              ฿ 55.00
            </b-card-text>
        </b-card>
      </b-col>

      <b-col cols="12">
        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
          <b-card-text>
              Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>
      </b-col>

      <b-col cols="12">
        <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
          <b-card-text>
              Some quick example text to build on the card and make up the bulk of the card's content.
          </b-card-text>
        </b-card>
      </b-col>


    </b-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld2',
  props: {
    msg: String
  },
     data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'เกี่ยวข้อง' },
        { value: null, text: 'จากสูงไปต่ำ' },
        { value: null, text: 'จากต่ำไปสูง' },
      ]
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
