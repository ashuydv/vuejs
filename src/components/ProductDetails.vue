<template>
  <div>
    <b-container class="p-1">
      <b-row>
        <b-col class="d-flex align-items-center flex-column p-1" :key="index">
          <b-card class="b-card border">
            <font-awesome-icon
              :icon="['far', 'heart']"
              class="icons-heart"
              style="font-size: 12px, margin-left: 10rem; "
            />
            <b-img
              class="p-4"
              src="https://dummyimage.com/150x150/"
              fluid
            ></b-img>
            <h6 class="mb-1">Jacqueline USA</h6>
            <h5 class="mb-1">Eyeshadow Palette</h5>
            <p class="card-text mb-0">Title</p>
            <div class="d-flex align-items-center mb-4 pb-4">
              <p class="card-text mb-0 mr-1">&#8377; 4,600</p>
              <p class="card-text">
                <small>MRP:</small>
                <span class="small">&#8377; 5750</span>
              </p>
            </div>
            <b-button class="btnss" block>ADD TO BAG</b-button>
          </b-card>
        </b-col>
        <b-col class="d-flex align-items-center flex-column p-1" :key="index">
          <b-card class="b-card border">
            <font-awesome-icon
              :icon="['far', 'heart']"
              class="icons-heart"
              style="font-size: 12px, margin-left: 10rem; "
            />
            <b-img
              class="p-4"
              src="https://dummyimage.com/150x150/"
              fluid
            ></b-img>
            <h6 class="mb-1">Jacqueline USA</h6>
            <h5 class="mb-1">Eyeshadow Palette</h5>
            <p class="card-text mb-0">Title</p>
            <div class="d-flex align-items-center mb-4 pb-4">
              <p class="card-text mb-0 mr-1">&#8377; 4,600</p>
              <p class="card-text">
                <small>MRP:</small>
                <span class="small">&#8377; 5750</span>
              </p>
            </div>
            <b-button class="btnss" block>ADD TO BAG</b-button>
          </b-card>
        </b-col>
        <b-col class="d-flex align-items-center flex-column p-1" :key="index">
          <b-card class="b-card border">
            <font-awesome-icon
              :icon="['far', 'heart']"
              class="icons-heart"
              style="font-size: 12px, margin-left: 10rem; "
            />
            <b-img
              class="p-4"
              src="https://dummyimage.com/150x150/"
              fluid
            ></b-img>
            <h6 class="mb-1">Jacqueline USA</h6>
            <h5 class="mb-1">Eyeshadow Palette</h5>
            <p class="card-text mb-0">Title</p>
            <div class="d-flex align-items-center mb-4 pb-4">
              <p class="card-text mb-0 mr-1">&#8377; 4,600</p>
              <p class="card-text">
                <small>MRP:</small>
                <span class="small">&#8377; 5750</span>
              </p>
            </div>
            <b-button class="btnss" block>ADD TO BAG</b-button>
          </b-card>
        </b-col>
        <b-col class="d-flex align-items-center flex-column p-1" :key="index">
          <b-card class="b-card border">
            <font-awesome-icon
              :icon="['far', 'heart']"
              class="icons-heart"
              style="font-size: 12px, margin-left: 10rem; "
            />
            <b-img
              class="p-4"
              src="https://dummyimage.com/150x150/"
              fluid
            ></b-img>
            <h6 class="mb-1">Jacqueline USA</h6>
            <h5 class="mb-1">Eyeshadow Palette</h5>
            <p class="card-text mb-0">Title</p>
            <div class="d-flex align-items-center mb-4 pb-4">
              <p class="card-text mb-0 mr-1">&#8377; 4,600</p>
              <p class="card-text">
                <small>MRP:</small>
                <span class="small">&#8377; 5750</span>
              </p>
            </div>
            <b-button class="btnss" block>ADD TO BAG</b-button>
          </b-card>
        </b-col>
        <b-col class="d-flex align-items-center flex-column p-1" :key="index">
          <b-card class="b-card border">
            <font-awesome-icon
              :icon="['far', 'heart']"
              class="icons-heart"
              style="font-size: 12px, margin-left: 10rem; "
            />
            <b-img
              class="p-4"
              src="https://dummyimage.com/150x150/"
              fluid
            ></b-img>
            <h6 class="mb-1">Jacqueline USA</h6>
            <h5 class="mb-1">Eyeshadow Palette</h5>
            <p class="card-text mb-0">Title</p>
            <div class="d-flex align-items-center mb-4 pb-4">
              <p class="card-text mb-0 mr-1">&#8377; 4,600</p>
              <p class="card-text">
                <small>MRP:</small>
                <span class="small">&#8377; 5750</span>
              </p>
            </div>
            <b-button class="btnss" block>ADD TO BAG</b-button>
          </b-card>
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
];

export default {
  name: "MyBootstrapGrid",
  data() {
    return {
      items: items,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.border {
	border: 2px solid purple !important;
}
.b-card {
	background: white !important;
	.card {
		border: 1px solid purple !important;
	}
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
	&:hover {
		background: #7954a1 !important;
		color: white !important;
		text-align: center !important;
		font-weight: normal !important;
		border: 1px solid transparent !important;
		border-radius: 0px !important;
	}
	&:focus {
		background: #7954a1 !important;
		color: white !important;
		text-align: center !important;
		font-weight: normal !important;
		border: 1px solid transparent !important;
		border-radius: 0px !important;
	}
}
.icons-heart {
	position: absolute;
	right: 5%;
	top: 3%;
}
.page-item {
	&:first-child {
		.page-link {
			border-radius: 50% !important;
			padding: 1.05rem !important;
			width: auto !important;
		}
	}
	&:last-child {
		.page-link {
			border-radius: 50% !important;
			padding: 1.05rem !important;
			width: auto !important;
		}
	}
	&:not(:first-child) {
		.page-link {
			border-radius: 50% !important;
			padding: 1.05rem !important;
			width: auto !important;
		}
	}
	&:nth-child(2) {
		.page-link {
			margin-left: 3rem;
		}
	}
	&:nth-last-child(2) {
		.page-link {
			margin-right: 3rem;
		}
	}
}
.page-item.disabled {
	.page-link {
		border-radius: 50% !important;
		padding: 1.05rem !important;
		width: auto !important;
	}
}
.page-item.disabled.flex-fill {
	.page-link {
		border-radius: 50% !important;
		padding: 1.05rem !important;
		width: auto !important;
	}
}
.flex-fill {
	border-radius: 50% !important;
	padding: 1.05rem !important;
	width: auto !important;
}

</style>
