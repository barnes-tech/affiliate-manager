<?php use Core\FormHelpers;?>
<div class="modal fade" id="brandModal" tabindex="-1" role="dialog" aria-labelledby="brandModelLabel" aria-hidden="true">
<div class="modal-dialog modal-lg" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="brand_name"></h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">

      <section class="row">
        <div class="col-lg-4">
          <img id="brand_image" src="" alt="" class="img-fluid"/>
        </div>
        <div class="col-lg-8 text-center">
          <h3 id="name"></h3>
          <p id="about"></p>
          <a id="brand_url" href=""></a>
        </div>
      </section>
    </div>
    <div class="modal-footer">
      <form method="post" action="<?=SROOT.'adminbrands/get_edit'?>" class="row" id="modalForm">
        <?=FormHelpers::csrf_input()?>
        <input type="hidden" id="brand_id" name="brand_id" value=""/>
        <input type="submit" class="btn btn-success" value="Edit" />
      </form>
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>
<script>
jQuery('#brandModal').on('hidden.bs.modal', function() {
  jQuery('#brand_id').val('new');
  jQuery('#brand_name').html('');
  jQuery('#name').val('');
  jQuery('#about').val('');
  jQuery('#brand_url').attr('href','#');
});

function editBrand(){
  jQuery.ajax({
    url : '<?=SROOT?>adminbrands/edit',
    method : "POST",
    data : { id : brand_id },
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
