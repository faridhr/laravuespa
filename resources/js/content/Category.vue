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
    <b-modal ref="newModal" hide-footer title="Category  Form">
      <form v-on:submit.prevent="createCategory">
      <!-- <form> -->
        <div class="d-block">
          <div class="form-group">
            <label for="categoryName">Category Name</label>
            <input type="text" name="categoryName" v-model="categoryData.name" class="form-control" placeholder="Category Name">
          </div>
          <div class="form-group">
            <label for="Image">Image</label><br>
            <img v-if="categoryData.image.name" width="150px" ref="imagePreview" src="">
            <input type="file" name="image" v-on:change="attachImage" ref="categoryImage" class="form-control">
          </div>
        </div>
        <hr>
        <div class="text-right">
          <button type="submit" class="btn btn-primary pull-right"><span class="fa fa-fw fa-check"></span> Save</button>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
  import * as categoryService from '../service/categoryservice';
  // import * as categoryService from '../service/categoryservice.js';
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
      },
      hideModal() {
        this.$refs.newModal.hide();
      },
      attachImage(){
        this.categoryData.image = this.$refs.categoryImage.files[0];
        let reader = new FileReader();
        reader.addEventListener('load', function(){
          this.$refs.imagePreview.src = reader.result;
        }.bind(this), false);
        reader.readAsDataURL(this.categoryData.image);
      },
      createCategory: async function() {
        let formData = new formData();
        formData.append('name', this.categoryData.name);
        formData.append('image', this.categoryData.image);
        try {
          const response = await categoryService.categoryPost(formData);
          console.log(response);
        } catch (error){
          alert(error);
        }
      }
    }
  }
</script>
