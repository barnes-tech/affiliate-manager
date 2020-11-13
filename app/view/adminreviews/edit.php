<?php
  use Core\{FormHelpers,Tools};
  $this->start('body')?>
  <section class="row">
    <article class="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
      <h2 class="text-center">Review the <?=$this->product->name?></h2>
      <form action="" method="POST" enctype="multipart/form-data">
        <?=FormHelpers::csrf_input()?>
        <section class="row">
          <?=FormHelpers::display_errors($this->display_errors)?>
          <input type="hidden" id="sorted-img" name="sorted-img" value="" />
          <?=FormHelpers::input_block('text','Title for Review','title',$this->review->title,['class'=>'form-control'],['class'=>'col-lg-4 offset-lg-2 p-2'])?>
          <?=FormHelpers::image_upload('Review Images','review_images',['class'=>'form-control'],['class'=>'col-lg-4 offset-lg-2-2 p-2'])?>
          <?php if(count($this->images)!=0):?>
            <?=$this->partial('adminreviews','edit_images')?>
          <?php endif;?>
          <?=FormHelpers::input_block('text','Overview section title','overview_head', $this->review->overview_head,['class'=>'form-control'],['class'=>'col-lg-2 offset-lg-2 p-2'])?>
          <?=FormHelpers::input_area('Overview content','overview',$this->review->overview,['class'=>'form-control'],['class'=>'col-lg-6 offset-lg-2-2 p-2'])?>
          <?=FormHelpers::input_block('text','Features section title','features_head', $this->review->features_head,['class'=>'form-control'],['class'=>'col-lg-2 offset-lg-2 p-2'])?>
          <?=FormHelpers::input_area('Features content','features',$this->review->features,['class'=>'form-control'],['class'=>'col-lg-6 offset-lg-2-2 p-2'])?>
          <?=FormHelpers::input_block('text','Conclusion section title','conclusion_head', $this->review->conclusion_head,['class'=>'form-control'],['class'=>'col-lg-2 offset-lg-2 p-2'])?>
          <?=FormHelpers::input_area('Conclusion content','conclusion',$this->review->conclusion,['class'=>'form-control'],['class'=>'col-lg-6 offset-lg-2-2 p-2'])?>




          <div class="col-lg-8 offset-lg-2 text-right p-2">
            <a href="<?=SROOT?>adminproducts/index" class="btn btn-md btn-dark">Back to products</a>
            <?=FormHelpers::submit_tag('Save',['class'=>'btn btn-md btn-success'])?>
          </div>
        </section>
      </form>
    </article>
  </section>
  <script>
    tinymce.init({
      selector: 'textarea',
      branding: false,
      plugins: 'advlist autolink lists link image charmap print preview hr anchor pagebreak',
      toolbar_mode: 'floating',
    });
  </script>
<?php $this->end()?>
