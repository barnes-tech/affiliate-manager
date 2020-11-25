<?php
   use Core\FormHelpers;
   $this->set_sitle($this->brand->name.' details.');
   $this->start('head')?>
   <!-- keywords object space-->
<?php
  $this->end();
  $this->start('body')?>
  <section class="row">
    <article class="col-md-10 offset-md-1 col-lg-6 offset-lg-3">
      <h2 class="text-center"><?=$this->brand->name?> details.</h2>
      <form action="" method="POST" enctype="multipart/form-data">
        <?=FormHelpers::csrf_input()?>
        <section class="row">
          <?=FormHelpers::display_errors($this->display_errors)?>
          <input type="hidden" id="sorted-img" name="sorted-img" value="" />
          <?=FormHelpers::input_block('text','Brand Name','name',$this->brand->name,['class'=>'form-control'],['class'=>'col-sm-4 col-md-4 col-lg-4 offset-lg-2'])?>
          <?=FormHelpers::input_block('text','About','about',$this->brand->about,['class'=>'form-control'],['class'=>'col-sm-8 col-md-4 col-lg-4 offset-lg-2-2'])?>
          <?=FormHelpers::input_block('text','Company Website','url',$this->brand->url,['class'=>'form-control'],['class'=>'col-sm-4 col-md-4 col-lg-4 offset-lg-2'])?>
          <?=FormHelpers::image_upload('Upload Logo','logo_upload',['class'=>'form-control'],['class'=>'form-group col-lg-4 offset-lg-2-2'])?>
          <?=$this->partial('adminbrands','edit_images')?>
          <div class="col-lg-8 offset-lg-2 text-right pt-4">
            <a href="<?=SROOT?>adminbrands/index" class="btn btn-md btn-dark">Back to brands</a>
            <?=FormHelpers::submit_tag('Save',['class'=>'btn btn-md btn-success'])?>
          </div>
        </section>
      </form>
    </article>
  </section>

<?php $this->end()?>
