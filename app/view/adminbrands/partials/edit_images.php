<section class="cols-sm-12 col-md-12 col-lg-8 offset-lg-2">
  <label for="sortable-img">Sort Images</label>
  <article id="sortable-img" class="d-flex">
  <?php foreach($this->images as $image):

    if(preg_match('/..\//', $image->img_url) == 1) {
      $stripped_url = ltrim($image->img_url,'.');
      $img_url = ltrim($stripped_url,'/');
      $img_url = SROOT.$img_url;
    }
    ?>

    <div class="edit-image-wrap m-1" id="img_<?=$image->id?>" data-id="<?=$image->id?>">
      <span class="img-delete" onclick="deleteImage(<?=$image->id?>);return false;"><i class="fas fa-times"></i></span>
      <img src="<?=$img_url?>" height="150px" width="auto"/>
    </div>
  <?php endforeach;?>
  </article>
</section>
<script>
  function updateSort() {
    var sortedIDs = $("#sortable-img").sortable("toArray");
    $('#sorted-img').val(JSON.stringify(sortedIDs));
  }

  function deleteImage(image_id) {
    if(confirm("Remove image?")) {
      jQuery.ajax({
        url: '<?=SROOT?>adminbrands/delete_img',
        method: "POST",
        data: { image_id, image_id },
        success: function(resp) {
          jQuery('#img_'+resp.model_id).remove();
          updateSort();
          alertMsg('Image deleted','dark');
        }
      });
    }
  }


  jQuery('document').ready(function(){
    jQuery("#sortable-img").sortable({
      axis: "x",
      placeholder: "sortable-placeholder",
      update: function(event, ui) {
        updateSort();
      }
    });
    updateSort();
  });
</script>
