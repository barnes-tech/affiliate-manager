<?php
  use Core\FormHelpers;?>
  <form action="<?=$this->form_action?>" method="POST" enctype="multipart/form-data">
    <?=FormHelpers::csrf_input()?>
    <section class="row">
      <?=FormHelpers::display_errors($this->display_errors)?>
      <?=FormHelpers::input_block('text','Product','name',$this->product->name,['class'=>'form-control'],['class'=>'col-sm-4 col-md-4 col-lg-4 offset-lg-2']);?>
      <?=FormHelpers::input_block('text','Tagline','tagline',$this->product->tagline,['class'=>'form-control'],['class'=>'col-sm-8 col-md-4 col-lg-4 offset-lg-2-2'])?>
      <?=FormHelpers::select_block('Brand', 'brand', $this->product->brand, $this->brands,['class'=>'form-control '],['class'=>'col-sm-4 col-md-4 col-lg-4 offset-lg-2']);?>
      <?=FormHelpers::input_block('number','RRP','rrp',$this->product->rrp,['class'=>'form-control'],['class'=>'col-sm-4 col-md-4 col-lg-4 offset-lg-2-2']);?>
      <?=FormHelpers::image_upload('Product Images','product_images',['class'=>'form-control'],['class'=>'col-sm-6 col-md-4 col-lg-4 offset-lg-2'])?>
      <?=FormHelpers::input_area('Description','description',$this->product->description,['class'=>'form-control'],['class'=>'col-sm-12 col-md-12 col-lg-8 offset-lg-2']);?>
      <div class="col-sm-12 col-md-12 col-lg-10 offfset-lg-1 mt-3 text-right">
        <a href="<?=SROOT?>adminproducts/index" class="btn btn-md btn-dark">Back to products</a>
        <?=FormHelpers::submit_tag('Save',['class'=>'btn btnd-md btn-success'])?>
      </div>
    </section>
  </form>
