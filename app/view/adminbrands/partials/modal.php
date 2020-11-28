<?php use Core\FormHelpers;?>
<div class="modal fade" id="brandModal" tabindex="-1" role="dialog" aria-labelledby="brandModelLabel" aria-hidden="true">
<div class="modal-dialog modal-lg" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="brandModalLabel"></h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">



    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
    </div>
  </div>
</div>
</div>
<script>
jQuery('#brandModal').on('hidden.bs.modal', function() {
  jQuery('#brand_id').val('new');
  jQuery('#name').val('');
  jQuery('#about').val('');
});
</script>
