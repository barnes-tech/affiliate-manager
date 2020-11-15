<?php use Core\FormHelpers;?>
<div class="modal fade" id="addBrandModal" tabindex="-1" role="dialog" aria-labelledby="addBrandModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="addBrandModalLabel">New Brand</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">

        <form method="post" action="" class="row" id="modalForm">
          <input type="hidden" id="brand_id" name="brand_id" value="new" />
          <?=FormHelpers::input_block('text','Brand name','name',$this->brand->name,['class'=>'form-control'],['class'=>'form-group col-sm-4']);?>
          <?=FormHelpers::input_block('text','About','about',$this->brand->about,['class'=>'form-control'],['class'=>'form-group col-sm-8']);?>
        </form>

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary" onclick="saveBrand()">Save changes</button>
    </div>
  </div>
</div>
</div>
<script>
jQuery('#addBrandModal').on('hidden.bs.modal', function() {
  jQuery('#brand_id').val('new');
  jQuery('#name').val('');
  jQuery('#about').val('');
});

function saveBrand() {
  var formData = jQuery('#modalForm').serialize();
  jQuery.ajax({
    url : '<?=SROOT?>adminbrands/save',
    method :"POST",
    data: formData,
    success: function(resp) {
      if(resp.success) {
        alertMsg(resp.brand.name + " succesfully added.",'success');
        jQuery('#addBrandModal').modal('hide');
        var row = jQuery('tr[data-id="'+resp.brand.id+'"]');
        var newRow = '<tr data-id="'+resp.brand.id+'"><td>'+resp.brand.name+'</td><td>'+resp.brand.about+'</td><td class="brnd-tbl-ctrl"><a class="btn btn-dark btn-sm" href="editBrand('+resp.brand.id+');return false;""><i class="fas fa-pen-square"></i></a><a class="btn btn-dark btn-sm" href="#" onclick="deleteBrand('+resp.brand.id+');return false;"><i class="fas fa-trash-alt"></i></a></td></tr>';
        if(row.length ===0) {
          jQuery('#brandTable tbody').prepend(newRow);
        } else {
          jQuery('tr[data-id="'+resp.brand.id+'"] td:nth-child(1)').text(resp.brand.name);
          jQuery('tr[data-id="'+resp.brand.id+'"] td:nth-child(2)').text(resp.brand.about);
        }
      } else {
        alertMsg(resp.errors.name,'dark');
        jQuery('#addBrandModal').modal('hide');
      }
    }
  });
}
</script>
