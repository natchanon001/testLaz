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
      <b-col cols="6" md="4" lg="3" >
          <b-card
                  title-src="https://lzd-img-global.slatic.net/g/p/cf2e6f3847cb6f50466afa76ffe25fa5.png_80x80q80.jpg_.webp"
                  img-src="https://lzd-img-global.slatic.net/g/p/37e06caee8fb0555b1dafa339e1dd735.png_200x200q80.jpg_.webp"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  >
                    <a href="https://www.lazada.co.th/products/fashion-giant-ge-zi-2020-i2246189399.html" class="card-link" >Fashion giant กระเป๋าสะพายกระเป๋าแฟชั่น ge zi 2020</a>
                    <b-card-text>
                        ฿ 55.00
                    </b-card-text>
            </b-card>
      </b-col>

      <b-col cols="6" md="4" lg="3" >
            <b-card
                  title="Card Title2"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  >
                    <a href="#" class="card-link">Card link</a>
                    <b-card-text>
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
            </b-card>
      </b-col>

      <b-col cols="6" md="4" lg="3"  >
            <b-card
                  title="Card Title3"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  >
                    <a href="#" class="card-link">Card link</a>
                    <b-card-text>
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
            </b-card>
      </b-col>

      <b-col cols="6" md="4" lg="3"  >
            <b-card
                  title="Card Title4"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  >
                    <a href="#" class="card-link">Card link</a>
                    <b-card-text>
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
            </b-card>
      </b-col>

      <b-col cols="6" md="4" lg="3"  >
            <b-card
                  title="Card Title5"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  >
                    <a href="#" class="card-link">Card link</a>
                    <b-card-text>
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
            </b-card>
      </b-col>

      <b-col cols="6" md="4" lg="3"  >
            <b-card
                  title="Card Title6"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  >
                    <a href="#" class="card-link">Card link</a>
                    <b-card-text>
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
            </b-card>
      </b-col>

      <b-col cols="6" md="4" lg="3"  >
            <b-card
                  title="Card Title7"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  >
                    <a href="#" class="card-link">Card link</a>
                    <b-card-text>
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
            </b-card>
      </b-col>

      <b-col cols="6" md="4" lg="3"  >
            <b-card
                  title="Card Title8"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
                  >
                    <a href="#" class="card-link">Card link</a>
                    <b-card-text>
                          Some quick example text to build on the card title and make up the bulk of the card's content.
                    </b-card-text>
            </b-card>
      </b-col>
    </b-row>
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
        { value: null, text: 'เกี่ยวข้อง' },
        { value: null, text: 'จากสูงไปต่ำ' },
        { value: null, text: 'จากต่ำไปสูง' },
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
