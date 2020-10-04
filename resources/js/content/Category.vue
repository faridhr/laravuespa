<template>
  <div class="container-fluid">
    <h1 class="mt-4">Category</h1>
    <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active">Category</li>
    </ol>
    <div class="row">
      <div class="col-lg-12">
        <button type="button" class="btn btn-primary" v-on:click="showmodal"><i class="fa fa-fw fa-eye"/> Show Modal</button>
        <table class="table table-bordered">
          <thead>
            <td>No.</td>
            <td>Category</td>
            <td>Actions</td>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>Category 1</td>
              <td>
                <button type="button" class="btn btn-warning"><i class="fa fa-fw fa-edit"/> Edit</button>
                <button type="button" class="btn btn-danger"><i class="fa fa-fw fa-trash"/> Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <b-modal ref="newModal" hide-footer title="Using Component Methods">
      <div class="d-block text-center">
        <h3>Category Form</h3>

      </div>
    </b-modal>
  </div>
</template>

<script>
  export default{
    name: 'category',
    data() {
      return {
        categoryData:{
          name:'',
          image:''
        }
      }
    },
    methods: {
      showmodal() {
        this.$refs.newModal.show();
      }
    }
  }
</script>
