<template>
  <div>
    <b-container class="p-1">
      <b-row>
        <b-col
          cols="12"
          sm="3"
          class="d-flex align-items-center flex-column p-1"
          :key="index"
          v-for="(item, index) in paginatedItems"
        >
          <b-card class="b-card border">
            <font-awesome-icon
              :icon="['far', 'heart']"
              class="icons-heart"
              style="font-size: 12px, margin-left: 10rem; "
            />
            <b-img class="p-4" :src="item.src" fluid></b-img>
            <h6 class="mb-1">Jacqueline USA</h6>
            <h5 class="mb-1">Eyeshadow Palette</h5>
            <p class="card-text mb-0">{{ item.body }}</p>
            <div class="d-flex align-items-center mb-4 pb-4">
              <p class="card-text mb-0 mr-1">&#8377; {{ item.pricing }}</p>
              <p class="card-text">
                <small>MRP:</small>
                <span class="small">&#8377; {{ item.strikethrough }}</span>
              </p>
            </div>
            <b-button class="btnss" block>ADD TO BAG</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row>
        <b-col class="my-2 px-0">
          <b-pagination
            @change="onPageChanged"
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"
            first-number="false"
            last-number="false"
            class="my-0 mx-0 px-0"
            align="fill"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
const items = [
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
  {
    src: "https://dummyimage.com/150x150/",
    title: "Hello",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    pricing: "4,600",
    strikethrough: "1000",
  },
];

export default {
  name: "MyBootstrapGrid",
  data() {
    return {
      items: items,
      paginatedItems: items,
      currentPage: 1,
      perPage: 12,
      totalRows: items.length,
    };
  },
  computed: {},
  methods: {
    paginate(page_size, page_number) {
      let itemsToParse = this.items;
      this.paginatedItems = itemsToParse.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    },
  },
  mounted() {
    this.paginate(this.perPage, 0);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.border {
  border: 1px solid black !important;
}
.b-card {
  background: white !important;
}
.b-card .card {
  border: 1px solid purple !important;
}
.btnss {
  border: 1px solid #7954a1 !important;
  color: #7954a1 !important;
  background: transparent;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  border-radius: 0px !important;
}
.btnss:hover,
.btnss:focus {
  background: #7954a1 !important;
  color: white !important;
  text-align: center !important;
  font-weight: normal !important;
  border: 1px solid transparent !important;
  border-radius: 0px !important;
}
.icons-heart {
  position: absolute;
  right: 5%;
  top: 3%;
}

.page-item:first-child .page-link,
.page-item:last-child .page-link,
.page-item.disabled .page-link,
.page-item.disabled.flex-fill .page-link,
.page-item:not(:first-child) .page-link,
.flex-fill {
  border-radius: 50% !important;
  padding: 1.05rem !important;
  width: auto !important;
}

.page-item:nth-child(2) .page-link {
    margin-left: 3rem;
}

.page-item:nth-last-child(2)  .page-link {
    margin-right: 3rem;
}

</style>
