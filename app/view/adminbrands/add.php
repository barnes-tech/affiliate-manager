<?php
  use Core\FormHelpers;
  $this->set_sitle('New Brand');
  $this->start('body');?>
  <section class="row">
    <article class="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
      <h2 class="text-center">New Product</h2>
      <form action="<?=$this->form_action?>" method="POST" enctype="multipart/form-data">
        <?=FormHelpers::csrf_input()?>
        <?=FormHelpers::display_errors($this->display_errors)?>
        <section class="row">
          <?=FormHelpers::input_block('text','Brand','name',$this->brand->name,['class'=>'form-control'],['class'=>'form-group col-lg-4 offset-lg-2'])?>
          <?=FormHelpers::input_block('text','About','about',$this->brand->about,['class'=>'form-control'],['class'=>'form-group col-lg-4 offset-lg-2-2'])?>
          <?=FormHelpers::input_block('text','Company website','url',$this->brand->url,['class'=>'form-control'],['class'=>'form-group col-lg-4 offset-lg-2'])?>
          <?=FormHelpers::image_upload('Upload Logo','logo_upload',['class'=>'form-control'],['class'=>'form-group col-lg-4 offset-lg-2-2'])?>
          <div class="col-lg-8 offset-lg-2 text-right">
            <a href="<?=SROOT?>adminbrands/index" class="btn btn-md btn-dark">Back to Brands</a>
            <?=FormHelpers::submit_tag('Save',['class'=>'btn btnd-md btn-success'])?>
          </div>
        </section>
      </form>
    </article>
  </section>


<?php $this->end();?>
