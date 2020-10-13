<template>
  <div class="container-fluid">
    <h1 class="mt-4">Category</h1>
    <ol class="breadcrumb mb-4">
        <li class="breadcrumb-item active">Category</li>
    </ol>
    <div class="row">
      <div class="col-lg-12">
        <div align="right">
          <button type="button" class="btn btn-primary" v-on:click="showmodal"><i class="fa fa-fw fa-eye"/> New Category</button>
        </div> <br>
        <table class="table table-bordered">
          <thead>
            <td>No.</td>
            <td>Category</td>
            <td>Images</td>
            <td>Actions</td>
          </thead>
          <tbody>
            <tr v-for="(category, index) in categories" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ category.name }}</td>
              <td>
                  <img style="width: 200px;" :src="`${$store.state.serverPath}/storage/${category.images}`" :alt="category.name">
              </td>
              <td>
                <button type="button" v-on:click="editCategory(category)" class="btn btn-warning"><i class="fa fa-fw fa-edit"/> Edit</button>
                <button type="button" v-on:click="deleteConfirm(category)" class="btn btn-danger"><i class="fa fa-fw fa-trash"/> Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <b-modal ref="newModal" hide-footer title="Category Form">
      <form v-on:submit.prevent="createCategory">
        <div class="d-block">
          <div class="form-group">
            <label for="categoryName">Category Name</label>
            <input type="text" name="categoryName" v-model="categoryData.name" class="form-control" placeholder="Category Name">
            <div class="invalid-feedback" v-if="errors.name">{{ errors.name[0] }}</div>
          </div>
          <div class="form-group">
            <label for="Image">Image</label><br>
            <img v-if="categoryData.image.name" width="150px" ref="imagePreview" src="">
            <input type="file" name="image" v-on:change="attachImage" ref="categoryImage" class="form-control">
            <div class="invalid-feedback" v-if="errors.image">{{ errors.image[0] }}</div>
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
    name: 'Category',
    data() {
      return {
        categories : [],
        categoryData:{
          name:'',
          image:''
        },
        errors: {},
        categoryEditData:{}
      }
    },
    mounted(){
      this.getCategory();
    },
    methods: {
      getCategory : async function(){
        try{
          const response = await categoryService.getPost();
          this.categories = response.data.data;
        }catch(error){
          this.$swal.fire({
                icon : 'error',
                title : 'Oops...',
                text : 'something wen\'t wrong, \n Please refresh this pages'
              });
        }
      },
      showmodal() {
        this.categoryData.name = '';
        this.categoryData.image = '';
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
        let formData = new FormData();
        formData.append('name', this.categoryData.name);
        formData.append('image', this.categoryData.image);
        try {
          const response = await categoryService.categoryPost(formData);
          this.categories.unshift(response.data);
          this.hideModal();
          this.$swal.fire('Good job!','You clicked the button!','success');
        } catch (error){
          switch (error.response.status) {
            case 422:
              this.errors = error.response.data.errors;
              break;
            default:
              this.hideModal();
              this.$swal.fire({
                icon : 'error',
                title : 'Oops...',
                text : error.response.data.message
              });
              break;
          }
        }
      },
      deleteConfirm(category){
        this.$swal.fire({
          title: 'Are you sure?',
          text: "Are you sure delete " + category.name,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            this.deleteCategory(category);
          };
        });
      },
      deleteCategory: async function(category){
        try {
          const delData = await categoryService.deleteCategory(category.id);
          this.$swal.fire(
            'Deleted!',
            delData.data.message,
            'success'
          );
          this.categories = this.categories.filter(obj => {
            return obj.id != category.id;
          });
        } catch (e) {
          this.$swal.fire({
            icon : 'error',
            title : 'Oops...',
            text : e.response.data.message
          });
        }
      },
      editCategory: async function(category){
        try{
          this.categoryEditData =  category;
        }catch(error){

        }
      }
    }
  }
</script>
