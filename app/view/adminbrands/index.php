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
        <a href="add" class="btn btn-success mr-0">Get Started <i class="fa fa-plus"></i></a>
      </section>
    </article>
  </section>
<?php else:?>
<section class="row">
  <article class="col-lg-10 offset-lg-1 p-5">
    <h2 class="text-center">Affiliate Manager</h2>
      <table class="table table-hover table-light table-sm">
        <thead>
          <th>Brand</th>
          <th>About</th>
          <th>Updated</th>
          <th class="tbl-ctrl-prod">
            <a class="btn btn-success btn-sm" href="add">Brand <i class="fas fa-plus"></i></a>
          </th>
        </thead>
        <tbody>
          <?php foreach($this->brands as $brand): ?>
            <tr data-id="<?=$brand->id?>">
              <td><?=$brand->name?></td>
              <td><?=$brand->about?></td>
              <td><?=$brand->updated_at?></td>
              <td class="tbl-ctrl">
                <a class="btn btn-dark btn-sm" href="edit/<?=$brand->id?>"><i class="fas fa-pen-square"></i></a>
                <a class="btn btn-dark btn-sm" href="#" onclick="deleteProduct(<?=$brand->id?>);return false;"><i class="fas fa-trash-alt"></i></a>
              </td>
            </tr>
          <?php
          endforeach;
          endif;?>
        </body>
      </table>
    </article>
</section>
<script>
  function deleteBrand(id){
    if(window.confirm("Deleting this product will remove all affiliate content including reviews and images. Are you sure you want to continue?")){
      jQuery.ajax({
        url : '<?=SROOT?>adminproducts/delete',
        method : "POST",
        data : {id : id},
        success: function(resp){
          var msgType = (resp.success)? 'dark' : 'danger';
          if(resp.success){

            jQuery('tr[data-id="'+resp.model_id+'"]').remove();
          }
          alertMsg(resp.msg, msgType);
        }
      });
    }
  }
</script>
<?php $this->end(); ?>
