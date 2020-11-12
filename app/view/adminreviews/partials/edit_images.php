<style>
  .edit-image-wrap {
    border-radius: 4px;
    box-shadow:2px 2px 6px rgba(0,0,0,0.25);
  }
  .edit-image-wrap img {
    height:75px;
  }
  .sortable-placeholder {
    background-color:red;
  }
  .img-delete {
    padding-left:4px;
    position:absolute;
    color:crimson;
    cursor:pointer;
  }
  .img-delete:hover {
    color:darkred;
  }

</style>
<section class="cols-sm-12 col-md-12 col-lg-8 offset-lg-2">
  <label for="sortable-img">Sort Images</label>
  <article id="sortable-img" class="d-flex">
  <?php foreach($this->images as $image):?>

    <div class="edit-image-wrap m-1" id="img_<?=$image->id?>" data-id="<?=$image->id?>">
      <span class="img-delete" onclick="deleteImage(<?=$image->id?>);return false;"><i class="fas fa-times"></i></span>
      <img src="<?=SROOT.$image->url?>" class="img-fluid"/>
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
        url: '<?=SROOT?>adminreviews/delete_img',
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
