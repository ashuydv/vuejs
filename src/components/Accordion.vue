<template>
  <div class="accordion" role="tablist">
    <b-card no-body class="mb-1 border-bottom">
      <b-card-header header-tag="header" class="px-0" role="tab">
        <b-button
          block
          v-b-toggle.accordion-1
          class="btns d-flex align-items-center justify-content-between"
        >
          <span>Accordion 1</span>
          <span><b-icon-chevron-down class="icons"></b-icon-chevron-down></span
        ></b-button>
      </b-card-header>
      <b-collapse
        id="accordion-1"
        visible="true"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body class="py-2">
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Women <small>(2145)</small>
          </b-form-checkbox>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 border-bottom">
      <b-card-header header-tag="header" class="px-0" role="tab">
        <b-button
          block
          v-b-toggle.accordion-2
          class="btns d-flex align-items-center justify-content-between"
        >
          <span>Accordion 1</span>
          <span><b-icon-chevron-down class="icons"></b-icon-chevron-down></span
        ></b-button>
      </b-card-header>
      <b-collapse
        id="accordion-2"
        visible="true"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body class="py-2">
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 border-bottom">
      <b-card-header header-tag="header" class="px-0" role="tab">
        <b-button
          block
          v-b-toggle.accordion-3
          class="btns d-flex align-items-center justify-content-between"
        >
          <span>Accordion 1</span>
          <span><b-icon-chevron-down class="icons"></b-icon-chevron-down></span
        ></b-button>
      </b-card-header>
      <b-collapse
        id="accordion-3"
        visible="true"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body class="py-2">
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 border-bottom">
      <b-card-header header-tag="header" class="px-0" role="tab">
        <b-button
          block
          v-b-toggle.accordion-4
          class="btns d-flex align-items-center justify-content-between"
        >
          <span>Accordion 1</span>
          <span><b-icon-chevron-down class="icons"></b-icon-chevron-down></span
        ></b-button>
      </b-card-header>
      <b-collapse
        id="accordion-4"
        visible="true"
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body class="py-2">
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >
            Men <small>(2145)</small>
          </b-form-checkbox>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.accordion .btns,
.btn:hover,
.btns:focus,
.btn-secondary:focus {
  background: transparent !important;
  color: black;
  border: none;
  margin: 0;
}
.icons {
  font-size: 1rem !important;
}
.card,
.card-header {
  background: transparent !important;
  border: 1px solid transparent !important;
  border-radius: 0%;
  padding: 0 !important;
}
.card-body {
  padding: 0px 10px;
  font-weight: normal;
}
.border-bottom {
  border-bottom: 1px solid purple !important;
}
</style>
