<?php
  $this->start('body');
  if(!$this->products) :?>
  <section class="row">
    <article class="card col-lg-4 offset-lg-4 p-0 mx-auto mt-1 text-center">
      <header class="card-header">
        <h1>Product Manager</h1>
      </header>
      <section class="card-body">
        <p>There are currently no products in the database</p>
      </section>
      <section class="card-footer">
        <a href="add" class="btn btn-success mr-0">Get Started <i class="fa fa-plus"></i></a>
      </section>
    </article>
  </section>
<?php else:?>
<section class="row">
  <article class="col-lg-10 offset-lg-1 p-5">
    <h2 class="text-center">Product Manager</h2>
      <table class="table table-hover table-light table-sm">
        <thead>
          <th>Product</th>
          <th>About</th>
          <th>Updated</th>
          <th class="tbl-ctrl-prod">
            <a class="btn btn-success btn-sm" href="add">Product <i class="fas fa-plus"></i></a>
          </th>
        </thead>
        <tbody>
          <?php foreach($this->products as $product):
            $style = ($product->reviewed==0)? 'btn-danger':'btn-success';
            ?>
            <tr data-id="<?=$product->id?>">
              <td><?=$product->name?></td>
              <td><?=$product->tagline?></td>
              <td><?=$product->updated_at?></td>
              <td class="tbl-ctrl">
                <a class="btn <?=$style?> btn-sm" href="<?=SROOT?>adminreviews/edit/<?=$product->id?>"><i class="fas fa-feather-alt"></i></a>
                <a class="btn btn-dark btn-sm" href="#" onclick="toggleListed(<?=$product->id?>);return false;">
                  <i data-id="<?=$product->id?>" class="<?=($product->listed)? 'fas fa-star':'far fa-star'?>"></i>
                </a>
                <a class="btn btn-dark btn-sm" href="edit/<?=$product->id?>"><i class="fas fa-pen-square"></i></a>
                <a class="btn btn-dark btn-sm" href="#" onclick="deleteProduct(<?=$product->id?>);return false;"><i class="fas fa-trash-alt"></i></a>
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
  function deleteProduct(id){
    if(window.confirm("Are you sure you want to delete this product. It cannot be reversed.")){
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

  function toggleListed(id){
    jQuery.ajax({
      url : '<?=SROOT?>adminproducts/listed',
      method : "POST",
      data : { id : id },
      success: function(resp){
        if(resp.success) {
          var el = jQuery('i[data-id="'+resp.model_id+'"]');
          var klass = (resp.listed)? 'fas' : 'far';
          el.removeClass("fas far");
          el.addClass(klass);
          alertMsg(resp.msg,'dark');
        } else {
          alertMsg(resp.msg,'danger');
        }
      }
    });
  }
</script>
<?php $this->end(); ?>
