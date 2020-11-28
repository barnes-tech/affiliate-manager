<?php
  $this->start('body');
  if(!$this->brands) :?>
  <section class="row">
    <article class="card col-lg-4 offset-lg-4 p-0 mx-auto mt-1 text-center">
      <header class="card-header">
        <h1>Affiliate Manager</h1>
      </header>
      <section class="card-body">
        <p>There are currently no brands in the database</p>
      </section>
      <section class="card-footer">
        <a class="btn btn-success btn-md" href="add">Get started <i class="fas fa-plus"></i></a>
      </section>
    </article>
  </section>
<?php else:?>
<section class="row">
  <article class="col-lg-10 offset-lg-1 p-5">
    <h2 class="text-center">Affiliate Manager</h2>
    <section class="row">
      <?php foreach($this->brands as $brand):?>
        <article id="<?=$brand->id?>" class="object-card flex">
          <a href="#" onclick="brandDetails(<?=$brand->id?>)">
          <img src="<?=SROOT.$brand->url?>" class="d-block mx-auto" height="150px" width="200px" alt="<?=$brand->name?>"/>
          <h3 class="text-center"><?=$brand->name?></h3>
          </a>
        </article>
      <?php
        endforeach;
        endif;?>
      <article class="object-card-flex">

    </section>
  </article>
</section>
<?php $this->partial('adminbrands','modal');?>
<script>
  function brandDetails(id) {
    jQuery.ajax({
      url : '<?=SROOT?>adminbrands/get_brand',
      method : "POST",
      data : { id : id},
      success : function(resp) {
        if(resp.success) {
          jQuery('#brand_id').val(resp.brand.id);
          jQuery('#name').val(resp.brand.name);
          jQuery('#about').val(resp.brand.about);
          jQuery('#brandModal').modal('show');
        } else {
          jQuery('#brand_id').val('new');
          jQuery('#name').val('');
          jQuery('#about').val('');
        }
      }
    });
  }

  function deleteBrand(id){
    if(window.confirm("Deleting this product will remove all affiliate content including reviews and images. Are you sure you want to continue?")){
      jQuery.ajax({
        url : '<?=SROOT?>adminbrands/delete',
        method : "POST",
        data : {id : id},
        success: function(resp){
          var msgType = (resp.success)? 'dark' : 'danger';
          if(resp.success){
            jQuery('article[id="'+resp.model_id+'"]').remove();
          }
          alertMsg(resp.msg, msgType);
        }
      });
    }
  }
</script>
<?php $this->end(); ?>
